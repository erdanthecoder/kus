// Bishkek Drive – entry point: boot, input, main loop, menus, airport interaction.
import * as THREE from 'three';
import { MapData } from './data.js';
import { makeTextures, U } from './materials.js';
import { World } from './world.js';
import { Environment } from './sky.js';
import { PlayerCar, CameraRig, CAR_CHOICES } from './player.js';
import { Traffic } from './traffic.js';
import { Pedestrians } from './peds.js';
import { Airport } from './airport.js';
import { Landmarks } from './landmarks.js';
import { Audio } from './audio.js';
import { HUD } from './hud.js';
import { Game, PLACES, fmt } from './game.js';

const $ = (id) => document.getElementById(id);
const sleep = (ms) => new Promise(r => setTimeout(r, ms));
const COLORS = [0xf0f0f0, 0x111214, 0x8c9096, 0xc01818, 0x1a3a7a, 0x2a6a3a, 0xf2c200, 0x6a1a3a, 0xd87a20, 0x40a8d8];

async function boot() {
  const prog = (t, p) => { $('loadText').textContent = t; $('loadBar').style.width = (p * 100).toFixed(0) + '%'; };
  prog('Reading OpenStreetMap data of Bishkek…', 0.05); await sleep(30);
  if (!window.BISHKEK_DATA) { $('loadText').textContent = 'Map data missing (data/bishkek-data.js)'; return; }
  const map = new MapData(window.BISHKEK_DATA);
  window.BISHKEK_DATA = null;
  prog(`Road graph: ${map.edges.length.toLocaleString()} street segments, ${map.signalClusters.length} signalised junctions`, 0.25); await sleep(30);

  const quality = localStorage.getItem('bd_quality') || (navigator.hardwareConcurrency >= 8 ? 'high' : 'medium');
  const renderer = new THREE.WebGLRenderer({ antialias: quality !== 'low', powerPreference: 'high-performance' });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, quality === 'high' ? 1.5 : quality === 'medium' ? 1 : 0.75));
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 0.92;
  renderer.shadowMap.enabled = quality !== 'low';
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.autoClear = false;
  $('app').appendChild(renderer.domElement);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(62, window.innerWidth / window.innerHeight, 0.5, 4200);
  const env = new Environment(renderer, scene);
  if (quality === 'medium') env.sun.shadow.mapSize.set(1536, 1536);
  const T = makeTextures();
  prog('Building Bishkek…', 0.35); await sleep(20);
  const world = new World(scene, map, T);
  world.radius = quality === 'high' ? 1600 : quality === 'medium' ? 1250 : 900;
  // layered ground surfaces: polygon offset prevents distant z-fighting
  for (const k of ['grass', 'dirt', 'field', 'asphalt', 'concrete', 'water']) Object.assign(world.mat[k], { polygonOffset: true, polygonOffsetFactor: -1, polygonOffsetUnits: -2 });
  Object.assign(world.mat.paving, { polygonOffset: true, polygonOffsetFactor: -1, polygonOffsetUnits: -3 });
  Object.assign(world.mat.road, { polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -5 });
  Object.assign(world.mat.mark, { polygonOffset: true, polygonOffsetFactor: -3, polygonOffsetUnits: -9 });

  const hud = new HUD(map);
  const audio = new Audio();
  const game = new Game(map, hud, audio);
  const airport = new Airport(scene, map, world);
  game.setAirport(airport);
  prog('Landmarks: Ala-Too Square, Victory Square, Central Mosque…', 0.45); await sleep(20);
  const landmarks = new Landmarks(scene, map, world);

  // ---- start position: Chuy Avenue in front of Ala-Too Square
  const start = map.nearestRoad(40, 55, 120, e => e.cls <= 2) || map.nearestRoad(0, 0, 500);
  const car = new PlayerCar(scene, game.savedCar || 'sedan', game.savedColor);
  const sx = start.x - start.dz * map.laneOffset(start.e, 0), sz = start.z + start.dx * map.laneOffset(start.e, 0);
  car.place(sx, sz, Math.atan2(start.dx, start.dz));
  const startPos = { x: sx, z: sz, h: car.h };

  // pre-build the world around the start
  prog('Streets, buildings and parks around Ala-Too Square…', 0.5);
  world.radius = Math.min(world.radius, 900);
  for (let i = 0; i < 20; i++) { world.update({ x: car.x, z: car.z }, 0, false); prog('Streets, buildings and parks around Ala-Too Square…', 0.5 + i * 0.02); await sleep(1); }
  world.radius = quality === 'high' ? 1600 : quality === 'medium' ? 1250 : 900;
  const baseRadius = world.radius;

  prog('Traffic, traffic lights and people…', 0.92); await sleep(20);
  const traffic = new Traffic(scene, map, world);
  const peds = new Pedestrians(scene, map);
  peds.addZone({ name: 'Manas Airport', x: airport.dropoff.x + airport.n.x * 18, z: airport.dropoff.y + airport.n.y * -18, r: 45, n: 40, bags: true });
  const settings = { traffic: 1, peds: 1, timeSpeed: 1, sens: 1 };
  try { Object.assign(settings, JSON.parse(localStorage.getItem('bd_settings') || '{}')); } catch (e) { /* ignore */ }
  traffic.target = Math.round(260 * settings.traffic * (quality === 'low' ? 0.6 : 1));
  peds.target = Math.round(220 * settings.peds * (quality === 'low' ? 0.6 : 1));
  const rig = new CameraRig(camera);
  rig.pos.set(car.x - Math.sin(car.h) * 8, 3, car.z - Math.cos(car.h) * 8);

  // ---------------------------------------------------------------- state
  const S = {
    mode: 'menu', hour: 8.4, paused: true, flight: null, flightCam: 0, spot: null,
    keys: {}, steer: 0, mapOpen: false, photoCbs: [], lastSave: 0, time: 0, mouseYaw: 0,
  };
  window.__bd = { teleport: (...a) => teleport(...a), rig, map, world, car, traffic, peds, airport, game, S, scene, camera, renderer, env };

  // ---------------------------------------------------------------- input
  const touch = { steer: 0, gas: 0, brake: 0, hand: false };
  window.addEventListener('keydown', (e) => {
    if (e.repeat && !['KeyW', 'KeyS', 'KeyA', 'KeyD', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Space'].includes(e.code)) return;
    S.keys[e.code] = true;
    if (['Space', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.code)) e.preventDefault();
    onKey(e.code);
  });
  window.addEventListener('keyup', (e) => { S.keys[e.code] = false; });
  window.addEventListener('blur', () => { S.keys = {}; });

  function onKey(code) {
    audio.start();
    if (S.mode === 'menu') return;
    if (code === 'Escape' || code === 'KeyP') {
      if (S.mapOpen) return toggleMap(false);
      if (!$('airportMenu').classList.contains('hidden')) return $('airportMenu').classList.add('hidden');
      if (S.mode === 'flight') return endFlight(true);
      if (S.mode === 'spot') return endSpot();
      return togglePause();
    }
    if (S.paused) return;
    switch (code) {
      case 'KeyC':
        if (S.mode === 'flight') { S.flightCam = (S.flightCam + 1) % 4; }
        else hud.toast('Camera: ' + rig.cycle(), 1.2);
        break;
      case 'KeyM': toggleMap(); break;
      case 'KeyH': audio.horn(0.3, 0.45); peds.list.forEach(p => { if (Math.hypot(p.x - car.x, p.z - car.z) < 15 && p.mode === 'walk') { p.dodge = 0.5; p.dside = Math.random() < 0.5 ? 1 : -1; } }); break;
      case 'KeyE': interact(); break;
      case 'KeyJ':
        if (game.mission) { game.cancelMission(peds); hud.toast('Taxi job cancelled', 2); }
        else if (game.startTaxi(car, peds)) hud.toast(`🚕 New taxi order: pick up <b>${game.mission.passenger}</b> (follow the blue GPS line)`, 4);
        break;
      case 'KeyR': resetCar(); break;
      case 'BracketRight': S.hour = (S.hour + 1) % 24; hud.toast('Time ' + hud.clockText(), 1); break;
      case 'BracketLeft': S.hour = (S.hour + 23) % 24; hud.toast('Time ' + hud.clockText(), 1); break;
      case 'KeyG': if (game.routeTarget && !game.mission) { game.clearRoute(); hud.toast('GPS cleared', 1.5); } break;
      case 'KeyK': hud.toast(audio.toggleMute() ? 'Sound off' : 'Sound on', 1.2); break;
    }
  }

  // mouse look (hold right button to orbit camera)
  let rmb = false;
  renderer.domElement.addEventListener('contextmenu', (e) => e.preventDefault());
  renderer.domElement.addEventListener('mousedown', (e) => { if (e.button === 2) rmb = true; audio.start(); });
  window.addEventListener('mouseup', (e) => { if (e.button === 2) rmb = false; });
  window.addEventListener('mousemove', (e) => { if (rmb) S.mouseYaw -= e.movementX * 0.006; });

  function resetCar() {
    const r = map.nearestRoad(car.x, car.z, 300, e => e.cls <= 4);
    if (!r) return;
    const off = map.laneOffset(r.e, 0);
    const fx = Math.sin(car.h), fz = Math.cos(car.h);
    let dx = r.dx, dz = r.dz;
    if (!r.e.ow && fx * dx + fz * dz < 0) { dx = -dx; dz = -dz; }
    car.place(r.x - dz * off, r.z + dx * off, Math.atan2(dx, dz));
    hud.toast('Car reset to the road', 1.5);
  }

  function teleport(x, z) {
    const r = map.nearestRoad(x, z, 400, e => e.cls <= 4);
    if (!r) return;
    const off = map.laneOffset(r.e, 0);
    car.place(r.x - r.dz * off, r.z + r.dx * off, Math.atan2(r.dx, r.dz));
    traffic.clear(); for (const t in traffic.models) traffic.models[t].n = 0;
    peds.list.length = 0; for (const z2 of peds.extraZones) z2.count = 0;
    rig.snap(car);
    for (let i = 0; i < 6; i++) world.update({ x: car.x, z: car.z }, 0, true);
  }

  // ---------------------------------------------------------------- menus
  function togglePause(force) {
    S.paused = force !== undefined ? force : !S.paused;
    $('pause').classList.toggle('hidden', !S.paused);
    if (S.paused) { renderFines(); renderPlaces(); }
  }
  function toggleMap(force) {
    S.mapOpen = force !== undefined ? force : !S.mapOpen;
    $('mapPanel').classList.toggle('hidden', !S.mapOpen);
    if (S.mapOpen) { hud._resize(); hud.centerMap(car.x, car.z, 0.12); }
  }
  hud.onMapClick = (x, z, shift) => {
    if (shift) { teleport(x, z); toggleMap(false); return; }
    game.setRoute(x, z, 'Waypoint'); hud.toast('GPS route set (G to clear)', 1.5);
  };
  $('mapClose').onclick = () => toggleMap(false);

  function renderFines() {
    const el = $('fineList');
    if (!game.fines.length) { el.innerHTML = '<p class="muted">No fines yet. Stay under 150 km/h, stop at red lights and keep off the runway!</p>'; return; }
    el.innerHTML = game.fines.slice(-12).reverse().map(f => `<div class="fineRow"><b>${f.kind}</b> <span>−${fmt(f.amount)} сом</span><small>${f.time} · ${f.detail}</small></div>`).join('');
  }
  function renderPlaces() {
    $('placeList').innerHTML = PLACES.map(p => `<button class="place ${game.visited.has(p.id) ? 'done' : ''}" data-id="${p.id}">${game.visited.has(p.id) ? '✔' : '○'} ${p.name}<small>${p.local || ''}</small></button>`).join('');
    $('placeList').querySelectorAll('button').forEach(b => b.onclick = () => {
      const p = PLACES.find(q => q.id === b.dataset.id);
      teleport(p.x, p.z); togglePause(false);
    });
    $('placeCount').textContent = `${game.visited.size}/${PLACES.length}`;
  }
  function renderGarage(target) {
    target.innerHTML = CAR_CHOICES.map(c => `<button class="carCard ${car.type === c.id ? 'sel' : ''}" data-id="${c.id}"><b>${c.name}</b><small>${c.desc}</small></button>`).join('');
    target.querySelectorAll('button').forEach(b => b.onclick = () => {
      const c = CAR_CHOICES.find(q => q.id === b.dataset.id);
      car.setType(c.id, car.color ?? c.color);
      renderGarage(target);
      game.save(car);
    });
  }
  function renderColors(target) {
    target.innerHTML = COLORS.map(c => `<button class="sw" style="background:#${c.toString(16).padStart(6, '0')}" data-c="${c}"></button>`).join('');
    target.querySelectorAll('button').forEach(b => b.onclick = () => { car.setColor(+b.dataset.c); game.save(car); });
  }
  renderGarage($('garage')); renderColors($('colors'));
  renderGarage($('garage2')); renderColors($('colors2'));
  const bindRange = (id, key, fn) => { const el = $(id); el.value = settings[key]; el.oninput = () => { settings[key] = +el.value; fn && fn(); localStorage.setItem('bd_settings', JSON.stringify(settings)); }; };
  bindRange('setTraffic', 'traffic', () => traffic.target = Math.round(260 * settings.traffic));
  bindRange('setPeds', 'peds', () => peds.target = Math.round(220 * settings.peds));
  bindRange('setTimeSpeed', 'timeSpeed');
  const vol = $('setVol'); vol.oninput = () => audio.setVolume(+vol.value);
  $('setQuality').value = quality;
  $('setQuality').onchange = () => { localStorage.setItem('bd_quality', $('setQuality').value); location.reload(); };
  $('resume').onclick = () => togglePause(false);
  $('resetBtn').onclick = () => { teleport(startPos.x, startPos.z); togglePause(false); };
  $('clearSave').onclick = () => { localStorage.removeItem('bishkekDrive'); location.reload(); };

  $('startBtn').onclick = () => {
    audio.start();
    $('menu').classList.add('hidden');
    S.mode = 'drive'; S.paused = false;
    hud.toast('Welcome to <b>Bishkek</b>! Chuy Avenue, in front of Ala-Too Square. Speed limit for this game: <b>150 km/h</b>', 6);
  };

  // ---------------------------------------------------------------- airport interaction
  function interact() {
    if (S.mode !== 'drive') return;
    const dz = Math.hypot(car.x - airport.dropoff.x, car.z - airport.dropoff.y);
    const ds = Math.hypot(car.x - airport.spotter.x, car.z - airport.spotter.y);
    if (dz < 14) {
      if (car.speed > 3) { hud.toast('Stop the car first', 1.5); return; }
      hud.renderBoard(airport.board, $('fids'));
      $('airportMenu').classList.remove('hidden');
      audio.pa();
    } else if (ds < 14) {
      startSpot();
    } else hud.toast('Nothing to interact with here. Airport: drive to the glowing ring in front of the terminal.', 2.5);
  }
  $('apFlight').onclick = () => {
    if (game.money < 2500) { hud.toast('Not enough money for a ticket (2 500 сом)', 2); return; }
    game.money -= 2500; audio.cash();
    $('airportMenu').classList.add('hidden');
    startFlight();
  };
  $('apSpot').onclick = () => { $('airportMenu').classList.add('hidden'); startSpot(); };
  $('apTaxi').onclick = () => {
    $('airportMenu').classList.add('hidden');
    if (game.mission) game.cancelMission(peds);
    const M = game.startTaxi(car, peds);
    if (M) {
      // passenger right at the terminal going into the city
      M.x = airport.dropoff.x + airport.n.x * 6; M.z = airport.dropoff.y + airport.n.y * 6;
      if (M.ped) { M.ped.x = M.ped.tx = M.x; M.ped.z = M.ped.tz = M.z; }
      M.dest = PLACES.filter(p => !p.airport)[Math.floor(Math.random() * (PLACES.length - 1))];
      game.setRoute(M.x, M.z, 'Passenger');
      hud.toast(`🚕 Airport transfer: <b>${M.passenger}</b> just landed and needs a ride to ${M.dest.name}`, 4);
    }
  };
  $('apClose').onclick = () => $('airportMenu').classList.add('hidden');

  function fade(on) { $('fade').classList.toggle('on', on); }

  async function startFlight() {
    fade(true); await sleep(700);
    S.flight = airport.createScenicFlight();
    S.mode = 'flight'; S.flightCam = 0;
    airport.scenicCamera(S.flight, 0, camTarget, camLook); camera.position.copy(camTarget); lookSm.copy(camLook);
    world.radius = 2600;
    scene.fog.far = 9000; camera.far = 12000; camera.updateProjectionMatrix();
    car.group.visible = true;
    $('boarding').classList.add('show'); setTimeout(() => $('boarding').classList.remove('show'), 4500);
    audio.pa();
    fade(false);
  }
  async function endFlight(skipped) {
    if (!S.flight || S.ending) return;
    S.ending = true;
    const F = S.flight;
    fade(true); await sleep(700);
    airport.endScenic(F); S.flight = null; S.ending = false;
    S.mode = 'drive'; world.radius = baseRadius; camera.far = 4200; camera.updateProjectionMatrix();
    hud.setFlightInfo(null);
    rig.pos.set(car.x - Math.sin(car.h) * 8, 3, car.z - Math.cos(car.h) * 8);
    fade(false);
    hud.toast(skipped ? 'Flight skipped – back at Manas airport' : 'Welcome back to Bishkek! Thank you for flying Ala-Too Air.', 3);
  }
  function startSpot() {
    S.mode = 'spot';
    let pl = airport.planes.find(p => p.state === 'approach' || p.state === 'flare');
    if (!pl) { pl = airport._newPlane(); airport._startApproach(pl, 0.45); }
    S.spot = { pl, cam: new THREE.Vector3(airport.spotter.x, 2.2, airport.spotter.y) };
    lookSm.set(pl.x, pl.y, pl.z);
    hud.toast('Plane spotting – watch the landing. [Esc] to exit', 3);
  }
  function endSpot() { S.mode = 'drive'; S.spot = null; }

  // ---------------------------------------------------------------- touch controls
  if ('ontouchstart' in window) {
    $('touch').classList.remove('hidden');
    const bind = (id, on, off) => { const el = $(id); el.addEventListener('touchstart', (e) => { e.preventDefault(); audio.start(); on(); }); el.addEventListener('touchend', (e) => { e.preventDefault(); off(); }); };
    bind('tLeft', () => touch.steer = -1, () => touch.steer = 0);
    bind('tRight', () => touch.steer = 1, () => touch.steer = 0);
    bind('tGas', () => touch.gas = 1, () => touch.gas = 0);
    bind('tBrake', () => touch.brake = 1, () => touch.brake = 0);
    bind('tHand', () => touch.hand = true, () => touch.hand = false);
    bind('tCam', () => onKey('KeyC'), () => { });
    bind('tMap', () => onKey('KeyM'), () => { });
    bind('tAct', () => onKey('KeyE'), () => { });
  }

  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight; camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });

  // ---------------------------------------------------------------- loop
  const clock = new THREE.Clock();
  const focusObj = { x: 0, z: 0, h: 0, speed: 0, spec: car.spec, vx: 0, vz: 0, radius: 1 };
  const info = {};
  const camTarget = new THREE.Vector3(), camLook = new THREE.Vector3(), lookSm = new THREE.Vector3();
  let fpsT = 0, frames = 0;

  function requestPhoto(cb) { S.photoCbs.push(cb); }
  const photoCanvas = document.createElement('canvas'); photoCanvas.width = 320; photoCanvas.height = 180;

  $('loading').classList.add('hidden');
  $('menu').classList.remove('hidden');

  function districtOf(x, z) {
    if (airport.rel(new THREE.Vector2(x, z)).x > -2500 && z < -15500) return 'Manas International Airport';
    if (z < -3600) return 'Bishkek – Manas airport road';
    if (z < 300) return x < 500 ? 'Pervomaisky district' : 'Sverdlovsky district';
    return x < 0 ? 'Leninsky district' : 'Oktyabrsky district';
  }

  function loop() {
    requestAnimationFrame(loop);
    let dt = Math.min(0.05, clock.getDelta());
    const running = !S.paused && S.mode !== 'menu';
    if (!running) dt = 0;
    S.time += dt;
    U.uTime.value += dt;
    S.hour = (S.hour + dt / 60 * settings.timeSpeed) % 24;
    env.setHour(S.hour);
    // rush hours -> traffic jams on the main avenues
    const h = S.hour;
    traffic.rush = (h > 7.5 && h < 10) || (h > 17 && h < 20) ? 1.65 : (h > 23 || h < 6) ? 0.45 : 1;

    // ---- input
    const k = S.keys;
    let steerIn = (k.KeyD || k.ArrowRight ? 1 : 0) - (k.KeyA || k.ArrowLeft ? 1 : 0) + touch.steer;
    let thr = (k.KeyW || k.ArrowUp ? 1 : 0) + touch.gas, brk = (k.KeyS || k.ArrowDown ? 1 : 0) + touch.brake;
    const gp = navigator.getGamepads ? [...navigator.getGamepads()].find(g => g) : null;
    if (gp) {
      if (Math.abs(gp.axes[0]) > 0.12) steerIn = gp.axes[0];
      if (gp.buttons[7]) thr = Math.max(thr, gp.buttons[7].value);
      if (gp.buttons[6]) brk = Math.max(brk, gp.buttons[6].value);
    }
    S.steer += (THREE.MathUtils.clamp(steerIn, -1, 1) - S.steer) * Math.min(1, dt * (steerIn === 0 ? 7 : 4.5));
    const input = { steer: S.steer, throttle: Math.min(1, thr), brake: Math.min(1, brk), hand: !!(k.Space || touch.hand || (gp && gp.buttons[0]?.pressed)) };
    car.throttleOn = input.throttle > 0;
    const night = env.night;
    car.night = night > 0.45;

    if (running) {
      if (S.mode === 'drive' || S.mode === 'spot') {
        const inp = S.mode === 'spot' ? { steer: 0, throttle: 0, brake: 1, hand: true } : input;
        car.update(dt, inp, world, traffic, (v, what) => {
          rig.shake = Math.min(0.6, v * 0.04);
          audio.crash(v);
          if (v > 6) hud.toast(what === 'car' ? '💥 Collision! Careful – Bishkek drivers will honk at you.' : '💥 Crash!', 1.5);
        });
      }
      const focus = S.mode === 'flight' ? Object.assign(focusObj, { x: S.flight.plane.x, z: S.flight.plane.z, h: S.flight.plane.h, speed: 0 }) : car;
      traffic.night = night;
      traffic.update(dt, focus.x !== undefined ? (S.mode === 'flight' ? focusObj : car) : car, settings.peds > 0 ? peds : null);
      peds.update(dt, S.mode === 'flight' ? focusObj : car, settings.peds > 0);
      // AI honks when stuck behind the player
      for (const c of traffic.honks) { const d = Math.hypot(c.x - car.x, c.z - car.z); audio.horn(Math.min(0.3, 6 / (d + 8)), 0.35 + Math.random() * 0.4, 0.8 + Math.random() * 0.5); }
      airport.update(dt, night, car, S.flight ? S.flight.plane : null);
      landmarks.update(dt, S.time, night);
      if (S.mode === 'drive') {
        // road info, rules, missions
        const road = map.nearestRoad(car.x, car.z, 25);
        info.road = road && road.dist < road.e.w / 2 + 4 ? road : null;
        const nm = info.road ? map.roadName(info.road.e.name) : null;
        info.street = nm ? nm.en : null;
        game.trafficTime = traffic.time;
        game.checkRules(dt, car, info, null, airport, requestPhoto);
        game.checkLandmarks(car);
        game.updateMission(dt, car, peds);
        hud.setStreet(nm ? (nm.en !== nm.local ? `${nm.en} · ${nm.local}` : nm.local) : (info.runway ? 'Runway 07/25' : ''), districtOf(car.x, car.z));
        hud.setLimit(car.speed * 3.6, info.wrongWay, info.runway);
        // context hints
        const dzn = Math.hypot(car.x - airport.dropoff.x, car.z - airport.dropoff.y);
        const dsp = Math.hypot(car.x - airport.spotter.x, car.z - airport.spotter.y);
        $('hint').textContent = dzn < 14 ? 'Press E – Manas Airport: flights, plane spotting, airport taxi' : dsp < 14 ? 'Press E – watch planes land' : '';
        $('hint').classList.toggle('show', dzn < 14 || dsp < 14);
      } else $('hint').classList.remove('show');
      if (S.mode === 'flight') {
        const fdt = ['pushback', 'taxi', 'taxiIn'].includes(S.flight.stage) ? dt * 3 : dt;
        const done = !S.ending && airport.updateScenic(S.flight, fdt);
        if (done) endFlight(false);
      }
      game.updateRoute(S.mode === 'flight' ? focusObj : car, scene);
      if (game.routeMat) game.routeMat.uniforms.uTime.value = S.time;
      // mission HUD
      const M = game.mission;
      if (M) {
        const d = Math.hypot(car.x - M.x, car.z - M.z);
        hud.setMission(M.stage === 'pickup' ? `🚕 <b>Taxi</b>: pick up ${M.passenger} · ${fmtDist(d)}<small>J – cancel job</small>` : `🚕 <b>${M.passenger}</b> → ${M.dest.name} · ${fmtDist(d)}<small>Fare ${fmt(M.fare)} сом · stop at the destination</small>`);
      } else if (game.routeTarget) hud.setMission(`📍 GPS: ${game.routeTarget.label} · ${fmtDist(Math.hypot(car.x - game.routeTarget.x, car.z - game.routeTarget.z))}<small>G – clear route</small>`);
      else hud.setMission(`<b>J</b> – start a taxi job · <b>M</b> – city map`);
      S.lastSave += dt;
      if (S.lastSave > 10) { S.lastSave = 0; game.save(car); }
    }

    // ---- camera
    if (S.mode === 'flight' && S.flight) {
      airport.scenicCamera(S.flight, S.flightCam, camTarget, camLook);
      const k2 = S.flightCam === 0 ? 1 - Math.exp(-dt * 4) : 1;
      camera.position.lerp(camTarget, k2 || 1);
      lookSm.lerp(camLook, S.flightCam === 0 ? 1 - Math.exp(-dt * 6) : 1);
      camera.lookAt(lookSm);
      camera.fov = S.flightCam === 2 ? 70 : 55; camera.updateProjectionMatrix();
      const pl = S.flight.plane;
      const hdg = (Math.atan2(Math.sin(pl.h), -Math.cos(pl.h)) * 180 / Math.PI + 360) % 360;
      hud.setFlightInfo({ alt: (pl.y - pl.a.groundY) + 627, spd: pl.v, hdg, stage: { pushback: 'Pushback', taxi: 'Taxiing to runway 07', roll: 'Take-off roll', air: 'Scenic flight over Bishkek', final: 'Final approach – runway 07', taxiIn: 'Taxi to gate', done: 'Arrived' }[S.flight.stage], cam: ['Chase', 'Window seat', 'Cockpit', 'Spotter'][S.flightCam] });
    } else if (S.mode === 'free') {
      // debug / photo camera (set from the console)
    } else if (S.mode === 'spot' && S.spot) {
      const pl = S.spot.pl;
      camera.position.copy(S.spot.cam);
      lookSm.lerp(new THREE.Vector3(pl.x, pl.y, pl.z), 1 - Math.exp(-dt * 5));
      camera.lookAt(lookSm);
      const dist = Math.hypot(pl.x - S.spot.cam.x, pl.z - S.spot.cam.z);
      camera.fov = THREE.MathUtils.clamp(dist / 40, 12, 60); camera.updateProjectionMatrix();
      if (!airport.planes.includes(pl) || pl.state === 'taxiIn' || pl.state === 'climb' || pl.state === 'goaround' && pl.y > 300) { if (S.time > 0) { endSpot(); hud.toast('Landing complete', 1.5); } }
    } else {
      if (!rmb) S.mouseYaw *= Math.exp(-dt * 2);
      rig.update(Math.max(dt, 0.001), car, S.mouseYaw);
      if (S.mode === 'menu') {
        // slow orbit on the title screen
        const a = performance.now() * 0.00005;
        camera.position.set(car.x + Math.sin(a) * 60, 28, car.z + Math.cos(a) * 60);
        camera.lookAt(car.x, 4, car.z);
      }
    }

    // ---- world & environment
    const focusPos = S.mode === 'flight' && S.flight ? { x: S.flight.plane.x, z: S.flight.plane.z } : { x: car.x, z: car.z };
    world.update(S.mode === 'flight' || S.mode === 'free' ? { x: camera.position.x, z: camera.position.z } : focusPos, dt);
    const lit = env.update(camera, S.mode === 'flight' ? focusPos : car);
    if (S.mode === 'flight') { env.sun.shadow.camera.left = env.sun.shadow.camera.bottom = -160; env.sun.shadow.camera.right = env.sun.shadow.camera.top = 160; env.sun.shadow.camera.updateProjectionMatrix(); }
    else if (env.sun.shadow.camera.right !== 110) { env.sun.shadow.camera.left = env.sun.shadow.camera.bottom = -110; env.sun.shadow.camera.right = env.sun.shadow.camera.top = 110; env.sun.shadow.camera.updateProjectionMatrix(); }
    world.setNight(lit.night);
    if (S.mode !== 'flight') { scene.fog.near = 250; scene.fog.far = world.radius + 300; }
    // ambience / jets
    const jet = airport.noiseAt(camera.position.x, camera.position.z, camera.position.y);
    audio.update(dt, car, { throttle: input.throttle, inFlight: S.mode === 'flight', cityLevel: Math.min(1, traffic.cars.length / 200) * (Math.abs(car.z) < 4000 ? 1 : 0.2), jet: S.mode === 'flight' ? 0.35 : jet });

    // ---- render
    renderer.clear();
    env.render(renderer);
    renderer.clearDepth();
    renderer.render(scene, camera);
    if (S.photoCbs.length) {
      const pc = photoCanvas.getContext('2d');
      pc.drawImage(renderer.domElement, 0, 0, 320, 180);
      pc.fillStyle = 'rgba(0,0,0,0.55)'; pc.fillRect(0, 158, 320, 22);
      pc.fillStyle = '#ffeb3b'; pc.font = 'bold 12px monospace';
      pc.fillText(`${Math.round(car.speed * 3.6)} km/h  LIMIT 150  ${hud.clockText()}  01KG`, 8, 173);
      const url = photoCanvas.toDataURL('image/jpeg', 0.7);
      for (const cb of S.photoCbs) cb(url);
      S.photoCbs.length = 0;
    }

    // ---- HUD
    if (S.mode !== 'menu') {
      hud.drawSpeedo(car);
      frames++; fpsT += dt;
      if (frames % 3 === 0) hud.drawMini(car, traffic, game, airport);
      hud.setMoney(game.money, game.fines.length);
      hud.setClock(S.hour, traffic.jamLevel(car.x, car.z));
      if (S.mapOpen) hud.drawBigMap(car, game, airport);
      $('hudRoot').classList.toggle('flightmode', S.mode === 'flight' || S.mode === 'spot');
    }
  }
  loop();
}

function fmtDist(d) { return d > 1000 ? (d / 1000).toFixed(1) + ' km' : Math.round(d / 10) * 10 + ' m'; }

boot().catch(e => { console.error(e); const el = document.getElementById('loadText'); if (el) el.textContent = 'Error: ' + e.message; });
