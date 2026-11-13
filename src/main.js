// BskDrive – entry point: boot, settings, input, main loop, menus, jobs, multiplayer, airport.
import * as THREE from 'three';
import { MapData } from './data.js';
import { makeTextures, U } from './materials.js';
import { World } from './world.js';
import { Environment } from './sky.js';
import { PlayerCar, CameraRig } from './player.js';
import { Traffic } from './traffic.js';
import { Pedestrians } from './peds.js';
import { Airport } from './airport.js';
import { Landmarks } from './landmarks.js';
import { Audio } from './audio.js';
import { HUD } from './hud.js';
import { Game, PLACES, fmt } from './game.js';
import { Jobs, JOBS } from './jobs.js';
import { Net } from './net.js';
import { PostFX } from './postfx.js';
import { FX } from './fx.js';
import { Police } from './police.js';
import { PlaceSearch } from './search.js';
import { Drift, Kalpaks, Races, RACES, Weather, fmtT } from './fun.js';
import { OnFoot } from './onfoot.js';
import { Radio, STATIONS } from './radio.js';

const $ = (id) => document.getElementById(id);
const sleep = (ms) => new Promise(r => setTimeout(r, ms));
const COLORS = [0xf0f0f0, 0x111214, 0x8c9096, 0x5a6066, 0xc01818, 0x1a3a7a, 0x2a6a3a, 0xf2c200, 0x6a1a3a, 0xd87a20, 0x40a8d8, 0xc8b89a];
const CARS = [
  { id: 'sedan', name: 'Sedan', desc: 'The classic white Bishkek sedan. 165 hp', price: 0 },
  { id: 'oldsedan', name: 'Old Classic', desc: 'Boxy Soviet-era legend. 75 hp', price: 2500 },
  { id: 'hatch', name: 'City Hatch', desc: 'Small Japanese import. Nimble. 110 hp', price: 6000 },
  { id: 'van', name: 'Marshrutka', desc: 'Your own white minibus. 160 hp', price: 12000 },
  { id: 'suv', name: 'Land SUV', desc: 'Big 4x4 – rules the potholes. 280 hp', price: 25000 },
  { id: 'coupe', name: 'Sport Coupe', desc: '420 hp. Mind the 150 km/h cameras!', price: 60000 },
];
const PRESETS = {
  low: { scale: 0.7, view: 900, far: 2500, shadows: false, bloom: false, msaa: false },
  medium: { scale: 1, view: 1250, far: 4500, shadows: true, bloom: true, msaa: false },
  high: { scale: 1.25, view: 1600, far: 6500, shadows: true, bloom: true, msaa: true },
  ultra: { scale: 1.6, view: 2200, far: 9000, shadows: true, bloom: true, msaa: true },
};
const DEFAULTS = {
  preset: 'medium', traffic: 1, peds: 1, sens: 1, abs: true, tcs: true, esc: true, steerAssist: true, manual: false,
  fov: 62, vol: 0.7, minimap: true, autoRes: true, showFps: false, weather: 'auto', timeSpeed: 1, mp: true, name: '', shake: true, ...PRESETS.medium,
};

function loadSettings() {
  let s = {};
  try { s = JSON.parse(localStorage.getItem('bd_settings2') || '{}'); } catch (e) { /* ignore */ }
  if (!s.preset) {
    const cores = navigator.hardwareConcurrency || 4, mobile = /Mobi|Android|iPhone/i.test(navigator.userAgent);
    const q = new URLSearchParams(location.search).get('q');
    s.preset = q || (mobile ? 'low' : cores >= 8 ? 'high' : 'medium');
    Object.assign(s, PRESETS[s.preset]);
  }
  return Object.assign({}, DEFAULTS, PRESETS[s.preset] || {}, s);
}
function saveSettings(s) { try { localStorage.setItem('bd_settings2', JSON.stringify(s)); } catch (e) { /* ignore */ } }

async function boot() {
  const prog = (t, p) => { $('loadText').textContent = t; $('loadBar').style.width = (p * 100).toFixed(0) + '%'; };
  prog('Reading OpenStreetMap data of Bishkek…', 0.05); await sleep(30);
  if (!window.BISHKEK_DATA) { $('loadText').textContent = 'Map data missing (data/bishkek-data.js)'; return; }
  const map = new MapData(window.BISHKEK_DATA);
  window.BISHKEK_DATA = null;
  prog(`${map.buildings.length.toLocaleString()} buildings · ${map.edges.length.toLocaleString()} streets · ${map.signalClusters.length} traffic lights`, 0.25); await sleep(30);

  const settings = loadSettings();
  const renderer = new THREE.WebGLRenderer({ antialias: false, powerPreference: 'high-performance' });
  let dynScale = 1; // adaptive resolution factor (drops automatically when the frame rate dips)
  const applyScale = () => renderer.setPixelRatio((Math.min(window.devicePixelRatio * settings.scale, 2) * (window.devicePixelRatio >= 2 ? 0.75 : 1) || 1) * dynScale);
  applyScale();
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 0.95;
  renderer.shadowMap.enabled = settings.shadows;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.autoClear = false;
  $('app').appendChild(renderer.domElement);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(settings.fov, window.innerWidth / window.innerHeight, 0.5, 4200);
  const env = new Environment(renderer, scene);
  env.sun.shadow.mapSize.set(settings.preset === 'ultra' ? 4096 : settings.preset === 'high' ? 2048 : 1536, settings.preset === 'ultra' ? 4096 : settings.preset === 'high' ? 2048 : 1536);
  const T = makeTextures();
  prog('Building Bishkek…', 0.35); await sleep(20);
  const world = new World(scene, map, T);
  for (const k of ['grass', 'dirt', 'field', 'asphalt', 'concrete', 'water']) Object.assign(world.mat[k], { polygonOffset: true, polygonOffsetFactor: -1, polygonOffsetUnits: -2 });
  Object.assign(world.mat.paving, { polygonOffset: true, polygonOffsetFactor: -1, polygonOffsetUnits: -3 });
  Object.assign(world.mat.road, { polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -5 });
  Object.assign(world.mat.mark, { polygonOffset: true, polygonOffsetFactor: -3, polygonOffsetUnits: -9 });

  const hud = new HUD(map);
  const audio = new Audio();
  const game = new Game(map, hud, audio);
  if (!game.owned) game.owned = ['sedan'];
  const airport = new Airport(scene, map, world);
  game.setAirport(airport);
  prog('Landmarks: Ala-Too Square, Victory Square, Central Mosque…', 0.45); await sleep(20);
  const landmarks = new Landmarks(scene, map, world);

  // ---- start: Chuy Avenue in front of Ala-Too Square
  const start = map.nearestRoad(40, 55, 120, e => e.cls <= 2) || map.nearestRoad(0, 0, 500);
  const car = new PlayerCar(scene, game.owned.includes(game.savedCar) ? game.savedCar : 'sedan', game.savedColor);
  game.homeCar = car.type; game.homeColor = car.color;
  const sx = start.x - start.dz * map.laneOffset(start.e, 0), sz = start.z + start.dx * map.laneOffset(start.e, 0);
  car.place(sx, sz, Math.atan2(start.dx, start.dz));
  const startPos = { x: sx, z: sz };

  prog('Streets, buildings and parks around Ala-Too Square…', 0.5);
  world.radius = 500; world.update({ x: car.x, z: car.z }, 0, true);
  world.radius = Math.min(settings.view, 900);
  for (let i = 0; i < 15; i++) { world.update({ x: car.x, z: car.z }, 0, false); prog('Streets, buildings, trees and shop signs…', 0.55 + i * 0.025); await sleep(1); }
  world.radius = settings.view;

  prog('Traffic, traffic lights and people…', 0.92); await sleep(20);
  const traffic = new Traffic(scene, map, world);
  const peds = new Pedestrians(scene, map);
  peds.addZone({ name: 'Manas Airport', x: airport.dropoff.x + airport.n.x * 18, z: airport.dropoff.y + airport.n.y * -18, r: 45, n: 40, bags: true });
  const jobs = new Jobs(map, game, hud, audio, peds);
  const drift = new Drift(hud, audio, game);
  const kalpaks = new Kalpaks(scene, map, game, hud, audio);
  const races = new Races(scene, map, game, hud, audio);
  const weather = new Weather(scene, world, env);
  const foot = new OnFoot(scene, world, map);
  const radio = new Radio(audio);
  if (settings.weather && settings.weather !== 'auto') weather.set(settings.weather);
  if (game.custom) { car.custom = { ...game.custom }; car._applyCustom(); if (game.custom.plate) car.setPlate(game.custom.plate); }
  jobs.completed = game.jobsDone || 0;
  const search = new PlaceSearch(map);
  const fx = new FX(scene);
  const police = new Police(scene, map, world, audio, hud, fx);
  police.onEscape = (stars) => { const b = 100 * stars; game.money += b; audio.cash(); hud.toast(`+${b} coins escape bonus`, 2); };
  const net = new Net(scene);
  car.remotes = net;
  const rig = new CameraRig(camera);
  rig.snap(car);
  let post = null;
  const buildPost = () => { post = (settings.bloom || settings.msaa) ? new PostFX(renderer, env, scene, camera, { bloom: settings.bloom, msaa: settings.msaa }) : null; };
  buildPost();

  const S = {
    mode: 'menu', hour: 8.4, paused: true, flight: null, flightCam: 0, spot: null,
    keys: {}, steer: 0, thr: 0, mapOpen: false, photoCbs: [], lastSave: 0, time: 0, mouseYaw: 0, hud: true, chatOpen: false,
  };

  function applySettings() {
    traffic.target = Math.round(260 * settings.traffic);
    peds.target = Math.round(220 * settings.peds);
    car.assists = { abs: settings.abs, tcs: settings.tcs, esc: settings.esc, steerAssist: settings.steerAssist, sens: settings.sens, manual: settings.manual };
    audio.setVolume(settings.vol);
    world.radius = settings.view;
    world.farRadius = settings.far || 0;
    camera.far = Math.max(4200, (settings.far || 0) + 800); camera.updateProjectionMatrix();
    camera.fov = settings.fov;
    $('hudRoot').classList.toggle('nomini', !settings.minimap);
    saveSettings(settings);
  }
  applySettings();
  window.__bd = { drift, kalpaks, races, weather, foot, radio, fx, police, teleport: (...a) => teleport(...a), rig, map, world, car, traffic, peds, airport, game, jobs, net, S, scene, camera, renderer, env, settings };

  // ---------------------------------------------------------------- vehicles
  function setCar(type, color, isHome) {
    car.setType(type, color ?? car.color);
    if (S.engineSmoke) { fx.removeEmitter(S.engineSmoke); S.engineSmoke = null; }
    car.stolen = false;
    car.assists && (car.assists = { ...car.assists });
    if (isHome) { game.homeCar = type; game.homeColor = color ?? car.color; }
    rig.snap(car);
  }

  // ---------------------------------------------------------------- input
  const touch = { steer: 0, gas: 0, brake: 0, hand: false, nitro: false };
  const DRIVE_KEYS = ['KeyW', 'KeyS', 'KeyA', 'KeyD', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Space'];
  window.addEventListener('keydown', (e) => {
    if (S.chatOpen) return;
    if (e.target && e.target.tagName === 'INPUT' && e.target.type === 'text' && e.target.offsetParent !== null) return;
    if (e.code === 'Tab') { e.preventDefault(); if (S.mode !== 'menu') showOnline(true); return; }
    if (e.code === 'F1') e.preventDefault();
    if (e.repeat && !DRIVE_KEYS.includes(e.code)) return;
    S.keys[e.code] = true;
    if (DRIVE_KEYS.includes(e.code)) e.preventDefault();
    onKey(e.code);
  });
  window.addEventListener('keyup', (e) => { S.keys[e.code] = false; if (e.code === 'Tab' && S.tabOnline) showOnline(false); });
  window.addEventListener('blur', () => { S.keys = {}; });

  function onKey(code) {
    audio.start();
    if (S.mode === 'menu') { if (code === 'Enter') $('startBtn').click(); return; }
    if (code === 'Escape') {
      if (S.mapOpen) return toggleMap(false);
      if (!$('airportMenu').classList.contains('hidden')) return $('airportMenu').classList.add('hidden');
      if (S.mode === 'flight') return endFlight(true);
      if (S.mode === 'spot') return endSpot();
      if (S.mode === 'cutscene') return;
      return togglePause();
    }
    if (S.paused) return;
    switch (code) {
      case 'KeyC': if (S.mode === 'flight') S.flightCam = (S.flightCam + 1) % 4; else hud.toast('Camera: ' + rig.cycle(), 1.2); break;
      case 'KeyM': toggleMap(); break;
      case 'KeyH': audio.horn(0.3, 0.45); peds.list.forEach(p => { if (!p.fixed && Math.hypot(p.x - car.x, p.z - car.z) < 15 && p.mode === 'walk') { p.dodge = 0.5; p.dside = Math.random() < 0.5 ? 1 : -1; } }); break;
      case 'KeyE': interact(); break;
      case 'KeyJ': togglePause(true, 'pJobs'); break;
      case 'KeyR': resetCar(); break;
      case 'KeyG': if (game.routeTarget && !jobs.active) { game.clearRoute(); hud.toast('GPS cleared', 1.2); } break;
      case 'KeyK': hud.toast(audio.toggleMute() ? 'Sound off' : 'Sound on', 1.2); break;
      case 'Equal': case 'NumpadAdd': if (S.mapOpen) hud.zoomMap(1.4); else hud.zoomMini(1.4); break;
      case 'Minus': case 'NumpadSubtract': if (S.mapOpen) hud.zoomMap(1 / 1.4); else hud.zoomMini(1 / 1.4); break;
      case 'BracketRight': S.hour = (S.hour + 1) % 24; hud.toast(hud.clockText(), 0.8); break;
      case 'BracketLeft': S.hour = (S.hour + 23) % 24; hud.toast(hud.clockText(), 0.8); break;
      case 'KeyX': if (settings.manual) car.shiftUp(); break;
      case 'KeyZ': if (settings.manual) car.shiftDown(); break;
      case 'KeyF': toggleFoot(); break;
      case 'KeyQ': { const st = radio.next(); hud.toast(st ? `📻 ${st.name} · ${st.genre}` : '📻 Radio off', 1.6); $('radioLbl').textContent = st ? '📻 ' + st.name : ''; break; }
      case 'F1': S.hud = !S.hud; $('hudRoot').classList.toggle('off', !S.hud); break;
      case 'Enter': if (settings.mp) openChat(); break;
    }
  }

  let rmb = false;
  renderer.domElement.addEventListener('contextmenu', (e) => e.preventDefault());
  renderer.domElement.addEventListener('mousedown', (e) => { if (e.button === 2) rmb = true; audio.start(); });
  window.addEventListener('mouseup', (e) => { if (e.button === 2) rmb = false; });
  const mouse = { dx: 0, dy: 0, active: false };
  window.addEventListener('mousemove', (e) => { if (rmb) { S.mouseYaw -= e.movementX * 0.006; mouse.dx += e.movementX * 0.006; mouse.dy += e.movementY * 0.004; } });

  function resetCar() {
    const r = map.nearestRoad(car.x, car.z, 300, e => e.cls <= 4);
    if (!r) return;
    const off = map.laneOffset(r.e, 0);
    let dx = r.dx, dz = r.dz;
    if (!r.e.ow && Math.sin(car.h) * dx + Math.cos(car.h) * dz < 0) { dx = -dx; dz = -dz; }
    car.place(r.x - dz * off, r.z + dx * off, Math.atan2(dx, dz));
    hud.toast('Car reset', 1);
  }
  function teleport(x, z) {
    const r = map.nearestRoad(x, z, 400, e => e.cls <= 4);
    if (!r) return;
    const off = map.laneOffset(r.e, 0);
    car.place(r.x - r.dz * off, r.z + r.dx * off, Math.atan2(r.dx, r.dz));
    traffic.clear(); for (const t in traffic.models) traffic.models[t].n = 0;
    police.clear();
    for (const e of [...fx.emitters]) if (e.ai) fx.removeEmitter(e);
    peds.list = peds.list.filter(p => p.fixed); for (const z2 of peds.extraZones) z2.count = 0;
    rig.snap(car);
    for (let i = 0; i < 6; i++) world.update({ x: car.x, z: car.z }, 0, true);
  }

  // ---------------------------------------------------------------- on foot / car theft
  const CAR_OF = { trolley: 'bus', taxi: 'sedan', sedan: 'sedan', hatch: 'hatch', suv: 'suv', oldsedan: 'oldsedan', van: 'van', bus: 'bus', truck: 'truck' };
  function toggleFoot() {
    if (S.mode !== 'drive' || races.active) return;
    if (!S.onFoot) {
      if (car.speed > 3) { hud.toast('Slow down to get out', 1); return; }
      if (jobs.active && (jobs.active.type === 'bus' || jobs.active.type === 'marshrutka')) { hud.toast('Finish your route first', 1.2); return; }
      foot.exit(car); S.onFoot = true; audio.blip(300, 0.05, 0.08);
      return;
    }
    const n = foot.nearestCar(car, traffic);
    if (!n) { hud.toast('No car nearby', 1); return; }
    if (!n.own) {
      // pull the driver out and take the car
      const c = n.c;
      const i = traffic.cars.indexOf(c); if (i >= 0) traffic._remove(i);
      const ped = { mode: 'cross', x: c.x + Math.cos(c.h) * 1.6, z: c.z - Math.sin(c.h) * 1.6, h: 0, ex: 0, ez: 0, dodge: 0, wait: 0, shirt: 0x6a1a1a, pants: 0x22283a, skin: 0xd8b090, hairC: 0x1a1410, scale: 1, speed: 5, phase: 0 };
      ped.tx = ped.x + Math.cos(c.h) * 25; ped.tz = ped.z - Math.sin(c.h) * 25; ped.h = Math.atan2(ped.tx - ped.x, ped.tz - ped.z);
      peds.list.push(ped);
      car.setType(CAR_OF[c.type] || 'sedan', c.color); car.place(c.x, c.z, c.h); car.stolen = true;
      if (S.engineSmoke) { fx.removeEmitter(S.engineSmoke); S.engineSmoke = null; }
      police.crime(1.3, 'Car theft');
      audio.horn(0.2, 0.6, 0.9);
      hud.toast('🚗 Car stolen! (your own car is waiting in the Garage)', 2.5);
    }
    foot.enter(); S.onFoot = false; rig.snap(car); audio.blip(420, 0.05, 0.08);
  }

  // ---------------------------------------------------------------- crashes, damage, police
  function onCrash(v, what, other, px, pz, nx, nz, wreck) {
    if (settings.shake) rig.shake = Math.min(0.7, v * 0.05);
    audio.crash(v);
    if (v > 3) drift.crash();
    if (px !== undefined && v > 3) {
      fx.crash(px, 0.6, pz, nx ?? 0, nz ?? 0, v, what === 'car' && other ? other.color : car.color);
      if (v > 4) car.dent(px, pz, Math.min(0.32, v * 0.022));
    }
    if (what === 'car' && other && v > 4 && !races.active) game.accident(v, requestPhoto);
    if (what === 'car' && other) {
      if (wreck) {
        other.emitter = fx.emitter(other, [0, 1.0, other.spec.L * 0.32], true); other.emitter.ai = true;
        hud.toast('💥 Car wrecked!', 1.5);
        police.crime(1.6, 'You wrecked a car');
      } else if (v > 7) police.crime(1.0, 'Hit-and-run');
      else if (v > 4) police.crime(0.4, 'Reckless driving');
    }
    if (what === 'player' && v > 6) police.crime(0.6, 'Rammed another driver');
    updateEngineSmoke();
  }
  function updateEngineSmoke() {
    if (car.damage > 55 && !S.engineSmoke) S.engineSmoke = fx.emitter(car, [0, 1.05, car.spec.L * 0.36], false);
    if (S.engineSmoke) S.engineSmoke.dark = car.damage >= 90;
    if (car.damage <= 55 && S.engineSmoke) { fx.removeEmitter(S.engineSmoke); S.engineSmoke = null; }
  }
  police.onRam = () => updateEngineSmoke();
  game.peds = peds;
  game.onWarn = () => audio.whistle && audio.whistle();
  game.onFine = (f) => {
    if (f.heat) police.crime(f.heat, f.kind);
    if (f.kind === 'Speeding' && f.amount >= 500) police.crime(1, 'Extreme speeding');
    else if (f.kind === 'Runway incursion') police.crime(2, 'Runway incursion');
    else if (f.kind === 'Red light') police.crime(0.35, 'Ran a red light');
  };

  // ---------------------------------------------------------------- chat
  const chatLines = [];
  function addChat(name, text, mine) {
    const el = document.createElement('div');
    el.innerHTML = `<b>${esc(name)}</b> ${esc(text)}`;
    if (mine) el.style.opacity = '0.85';
    $('chat').appendChild(el); chatLines.push(el);
    while (chatLines.length > 6) chatLines.shift().remove();
    setTimeout(() => { el.style.opacity = '0'; }, 9000);
    setTimeout(() => el.remove(), 10500);
    if (!mine) audio.blip(700, 0.04, 0.06);
  }
  net.onChat = addChat;
  net.onJoin = (n) => addChat('●', `${n} is driving in Bishkek`, true);
  function openChat() {
    if (!net.enabled) return;
    S.chatOpen = true; S.keys = {};
    const i = $('chatInput'); i.classList.remove('hidden'); i.value = ''; i.focus();
  }
  $('chatInput').addEventListener('keydown', (e) => {
    e.stopPropagation();
    if (e.key === 'Enter') { net.chat(e.target.value); closeChat(); }
    if (e.key === 'Escape') closeChat();
  });
  function closeChat() { S.chatOpen = false; $('chatInput').classList.add('hidden'); $('chatInput').blur(); }

  // ---------------------------------------------------------------- menus
  document.querySelectorAll('.tab').forEach(t => t.onclick = () => openTab(t.dataset.p));
  function openTab(id) {
    document.querySelectorAll('.tab').forEach(t => t.classList.toggle('on', t.dataset.p === id));
    document.querySelectorAll('.page').forEach(p => p.classList.toggle('on', p.id === id));
    if (id === 'pJobs') renderJobs(); if (id === 'pGarage') renderGarage(); if (id === 'pOnline') renderOnline(); if (id === 'pPlaces') renderPlaces(); if (id === 'pSettings') renderSettings();
  }
  function togglePause(force, tab) {
    S.paused = force !== undefined ? force : !S.paused;
    $('pause').classList.toggle('hidden', !S.paused);
    if (S.paused) openTab(tab || 'pJobs');
    S.keys = {};
  }
  $('resume').onclick = () => togglePause(false);
  function toggleMap(force) {
    S.mapOpen = force !== undefined ? force : !S.mapOpen;
    $('mapPanel').classList.toggle('hidden', !S.mapOpen);
    S.keys = {};
    if (S.mapOpen) { hud._resize(); hud.centerMap(car.x, car.z, 0.12); setTimeout(() => $('searchInput').focus(), 50); }
    else { $('searchInput').blur(); }
  }
  // ---- place search
  let results = [], sel = 0, picked = null;
  function showResults() {
    $('searchRes').innerHTML = results.map((r, i) => `<button class="${i === sel ? 'on' : ''}" data-i="${i}"><span class="ic">${search.icon(r.kind)}</span><span>${esc(r.name)}<small>${r.kind}${r.alt ? ' · ' + esc(r.alt) : ''} · ${fmtDist(Math.hypot(r.x - car.x, r.z - car.z))}</small></span></button>`).join('');
    $('searchRes').querySelectorAll('button').forEach(b => b.onclick = () => pick(results[+b.dataset.i]));
  }
  function pick(r) {
    if (!r) return;
    picked = r; hud.searchMark = r;
    hud.centerMap(r.x, r.z, 0.6);
    $('pcName').textContent = r.name; $('pcSub').textContent = `${r.kind}${r.alt ? ' · ' + r.alt : ''} · ${fmtDist(Math.hypot(r.x - car.x, r.z - car.z))} away`;
    $('placeCard').classList.remove('hidden');
    results = []; showResults(); $('searchInput').blur();
  }
  $('searchInput').addEventListener('input', (e) => { sel = 0; results = search.find(e.target.value, 10, car); showResults(); });
  $('searchInput').addEventListener('keydown', (e) => {
    e.stopPropagation();
    if (e.key === 'ArrowDown') { sel = Math.min(results.length - 1, sel + 1); showResults(); e.preventDefault(); }
    if (e.key === 'ArrowUp') { sel = Math.max(0, sel - 1); showResults(); e.preventDefault(); }
    if (e.key === 'Enter') pick(results[sel]);
    if (e.key === 'Escape') { if (e.target.value) { e.target.value = ''; results = []; showResults(); } else toggleMap(false); }
  });
  $('pcRoute').onclick = () => { if (!picked) return; game.setRoute(picked.x, picked.z, picked.name); hud.toast(`🧭 Route to ${esc(picked.name)}`, 2); toggleMap(false); };
  $('pcGo').onclick = () => { if (!picked) return; teleport(picked.x, picked.z); hud.toast(`⚡ ${esc(picked.name)}`, 2); toggleMap(false); };
  hud.onMapClick = (x, z, shift) => {
    $('placeCard').classList.add('hidden'); hud.searchMark = null;
    if (shift) { teleport(x, z); toggleMap(false); return; }
    game.setRoute(x, z, 'Waypoint'); hud.toast('GPS route set', 1.2);
  };
  $('mapClose').onclick = () => toggleMap(false);
  $('zIn').onclick = () => hud.zoomMap(1.5); $('zOut').onclick = () => hud.zoomMap(1 / 1.5); $('zMe').onclick = () => hud.centerMap(me0().x, me0().z);
  $('mzIn').onclick = () => hud.zoomMini(1.4); $('mzOut').onclick = () => hud.zoomMini(1 / 1.4);
  const me0 = () => S.onFoot ? foot : car;

  function renderJobs() {
    $('jobCards').innerHTML = Object.entries(JOBS).map(([id, j]) => `<button class="card ${jobs.active?.type === id ? 'sel' : ''}" data-id="${id}"><div class="ic">${j.icon}</div><b>${j.name}</b><small>${j.desc}</small></button>`).join('');
    $('jobCards').querySelectorAll('button').forEach(b => b.onclick = () => {
      if (S.mode !== 'drive') return;
      togglePause(false);
      if (jobs.active?.type === b.dataset.id) { jobs.stop(car, setCar); return; }
      jobs.start(b.dataset.id, car, scene, setCar);
    });
    $('raceCards').innerHTML = RACES.map(R => `<button class="card" data-r="${R.id}"><div class="ic">🏁</div><b>${R.name}</b><small>${R.desc}</small><div class="price">${races.best[R.id] ? '🏆 Best ' + fmtT(races.best[R.id]) : 'Prize up to 1 500 coins'}</div></button>`).join('');
    $('raceCards').querySelectorAll('button').forEach(b => b.onclick = () => {
      if (S.mode !== 'drive') return;
      if (S.onFoot) { foot.enter(); S.onFoot = false; }
      jobs.stop(car, setCar, true); police.clear();
      togglePause(false);
      if (!races.start(RACES.find(r => r.id === b.dataset.r), car, teleport)) hud.toast('Could not build the race route', 1.5);
      else { rig.snap(car); hud.toast('Beat the gold & silver rivals! Speed cameras are off on the race route.', 3); }
    });
    $('kalpakTxt').textContent = `🎩 Golden kalpaks found: ${kalpaks.count}/${kalpaks.list.length} – hidden all over Bishkek (+250 coins each)`;
    $('jobNow').innerHTML = jobs.active ? `On shift: <b>${jobs.status(car)}</b> · <a href="#" id="endShift" style="color:#3fc8ff">end shift</a>` : `${jobs.completed} jobs done · balance <b>${fmt(game.money)} coins</b>`;
    const es = $('endShift'); if (es) es.onclick = (e) => { e.preventDefault(); jobs.stop(car, setCar); renderJobs(); };
  }
  function renderGarage() {
    $('garage').innerHTML = CARS.map(c => {
      const own = game.owned.includes(c.id);
      return `<button class="card ${car.type === c.id ? 'sel' : ''} ${own ? '' : 'locked'}" data-id="${c.id}"><b>${c.name}</b><small>${c.desc}</small><div class="price">${own ? (car.type === c.id ? 'Driving' : 'Owned') : '🪙 ' + fmt(c.price)}</div></button>`;
    }).join('');
    $('garage').querySelectorAll('button').forEach(b => b.onclick = () => {
      const c = CARS.find(q => q.id === b.dataset.id);
      if (jobs.active && (jobs.active.type === 'bus' || jobs.active.type === 'marshrutka')) { hud.toast('Finish your route first', 1.5); return; }
      if (!game.owned.includes(c.id)) {
        if (game.money < c.price) { hud.toast(`Not enough coins (${fmt(c.price)} needed)`, 1.6); return; }
        game.money -= c.price; game.owned.push(c.id); audio.cash();
      }
      setCar(c.id, car.color, true); game.save(car); renderGarage();
    });
    const cost = Math.round(car.damage * 3 + car.dents * 5);
    $('dmgTxt').textContent = car.damage > 1 || car.dents ? `Damage ${Math.round(car.damage)}% · ${cost} coins` : 'Your car is in perfect shape';
    $('repairBtn').onclick = () => {
      if (!(car.damage > 1 || car.dents)) return;
      if (game.money < cost) { hud.toast('Not enough coins', 1.2); return; }
      game.money -= cost; car.repair(); updateEngineSmoke(); audio.cash(); renderGarage();
    };
    const C = car.custom || (car.custom = {});
    const NEON = [[null, 'Off'], [0x2080ff, 'Blue'], [0xff2060, 'Pink'], [0x30ff80, 'Green'], [0xffa020, 'Orange'], [0xb040ff, 'Purple'], [0xffffff, 'White']];
    const RIMS = [[null, 'Chrome'], [0x222222, 'Black'], [0xd4a020, 'Gold'], [0xd02020, 'Red'], [0x2a60d0, 'Blue']];
    const owned = game.upgrades || (game.upgrades = {});
    const buy = (key, price, apply) => { if (!owned[key]) { if (game.money < price) { hud.toast(`Need ${price} coins`, 1.2); return; } game.money -= price; owned[key] = true; audio.cash(); } apply(); car._applyCustom(); game.custom = { ...C }; game.save(car); renderGarage(); };
    $('custom').innerHTML = `<h4>Neon underglow ${owned.neon ? '' : '· 1 500 coins'}</h4><div class="sws">${NEON.map(([c, n]) => `<button class="btn ${C.neon === c ? 'pri' : ''}" data-neon="${c}">${n}</button>`).join(' ')}</div>
      <h4>Rims ${owned.rims ? '' : '· 600 coins'}</h4><div class="sws">${RIMS.map(([c, n]) => `<button class="btn ${(C.rims ?? null) === c ? 'pri' : ''}" data-rims="${c}">${n}</button>`).join(' ')}</div>
      <h4>Rear spoiler ${owned.spoiler ? '' : '· 1 000 coins'}</h4><button class="btn ${C.spoiler ? 'pri' : ''}" id="spBtn">${C.spoiler ? 'Remove spoiler' : 'Add spoiler'}</button>
      <h4>Number plate</h4><input type="text" id="plateIn" maxlength="12" value="${esc(car.plateText || '')}" style="background:#1b2430;color:#fff;border:1px solid #2c3a4a;border-radius:8px;padding:8px;text-transform:uppercase">`;
    $('custom').querySelectorAll('[data-neon]').forEach(b => b.onclick = () => buy('neon', 1500, () => { C.neon = b.dataset.neon === 'null' ? null : +b.dataset.neon; }));
    $('custom').querySelectorAll('[data-rims]').forEach(b => b.onclick = () => buy('rims', 600, () => { C.rims = b.dataset.rims === 'null' ? null : +b.dataset.rims; }));
    $('spBtn').onclick = () => buy('spoiler', 1000, () => { C.spoiler = !C.spoiler; });
    $('plateIn').onchange = (e) => { car.setPlate(e.target.value || '01KG 777 BSK'); C.plate = car.plateText; game.custom = { ...C }; game.save(car); };
    $('colors').innerHTML = COLORS.map(c => `<button class="sw" style="background:#${c.toString(16).padStart(6, '0')}" data-c="${c}"></button>`).join('');
    $('colors').querySelectorAll('button').forEach(b => b.onclick = () => { car.setColor(+b.dataset.c); game.homeColor = +b.dataset.c; game.save(car); });
  }
  function renderOnline() {
    $('netStatus').innerHTML = !settings.mp ? 'Multiplayer is off (Settings → Online).' : net.status === 'online' ? `<span class="dot on"></span> Connected · ${net.players.size + 1} drivers in Bishkek right now` : `Connecting… (${net.status})`;
    const rows = [{ name: net.name || settings.name || 'You', money: game.money, job: jobs.active ? JOBS[jobs.active.type].icon : '', car: car.type, me: true }].concat(net.list());
    rows.sort((a, b) => b.money - a.money);
    $('lb').innerHTML = '<tr><th>#</th><th>Driver</th><th>Coins</th><th>Now</th></tr>' + rows.map((r, i) => `<tr class="${r.me ? 'me' : ''}"><td>${i + 1}</td><td>${esc(r.name)}</td><td>${fmt(r.money)}</td><td>${r.job || (CARS.find(c => c.id === r.car)?.name || '')}</td></tr>`).join('');
  }
  function showOnline(on) {
    S.tabOnline = on;
    if (on) { renderOnline(); $('pause').classList.remove('hidden'); openTab('pOnline'); }
    else if (!S.paused) $('pause').classList.add('hidden');
  }
  function renderPlaces() {
    $('placeCount').textContent = `${game.visited.size}/${PLACES.length} landmarks discovered · click to travel`;
    $('placeList').innerHTML = PLACES.map(p => `<button class="place ${game.visited.has(p.id) ? 'done' : ''}" data-id="${p.id}"><span>${game.visited.has(p.id) ? '✔' : '○'} ${p.name}</span><small>${p.local || ''}</small></button>`).join('');
    $('placeList').querySelectorAll('button').forEach(b => b.onclick = () => { const p = PLACES.find(q => q.id === b.dataset.id); teleport(p.x, p.z); togglePause(false); });
    $('fineList').innerHTML = game.fines.length ? game.fines.slice(-10).reverse().map(f => `<div class="row"><span>${f.kind}<br><small class="muted">${f.time} · ${esc(f.detail)}</small></span><b style="color:#ff8a80">−${fmt(f.amount)}</b></div>`).join('') : '<p class="muted">No fines. Keep it under 150 km/h!</p>';
  }

  // settings page
  function renderSettings() {
    const tog = (k, label) => `<div class="row"><label>${label}</label><button class="tog ${settings[k] ? 'on' : ''}" data-k="${k}"></button></div>`;
    const rng = (k, label, min, max, step, fmtv = (v) => v) => `<div class="row"><label>${label} <small class="muted" id="v_${k}">${fmtv(settings[k])}</small></label><input type="range" data-k="${k}" min="${min}" max="${max}" step="${step}" value="${settings[k]}"></div>`;
    const sel = (k, label, opts) => `<div class="row"><label>${label}</label><select data-k="${k}">${opts.map(([v, t]) => `<option value="${v}" ${String(settings[k]) === String(v) ? 'selected' : ''}>${t}</option>`).join('')}</select></div>`;
    $('settingsBox').innerHTML = `<div class="set"><div>
      <h4>Graphics</h4>
      ${sel('preset', 'Quality preset', [['low', 'Low'], ['medium', 'Medium'], ['high', 'High'], ['ultra', 'Ultra'], ['custom', 'Custom']])}
      ${rng('scale', 'Resolution', 0.5, 2, 0.05, v => Math.round(v * 100) + '%')}
      ${rng('view', 'Detail distance', 600, 2600, 100, v => v + ' m')}
      ${rng('far', 'City skyline distance', 0, 10000, 500, v => v ? (v / 1000) + ' km' : 'off')}
      ${tog('shadows', 'Shadows')}${tog('bloom', 'Bloom & colour grading')}${tog('msaa', 'Anti-aliasing')}
      ${rng('fov', 'Field of view', 50, 85, 1, v => v + '°')}
      <h4>World</h4>
      ${rng('traffic', 'Traffic density', 0.2, 2, 0.1, v => Math.round(v * 100) + '%')}
      ${rng('peds', 'Pedestrians', 0, 2, 0.1, v => Math.round(v * 100) + '%')}
      ${rng('timeSpeed', 'Day speed', 0, 6, 0.5, v => v ? v + '×' : 'paused')}
      ${sel('weather', 'Weather', [['auto', 'Changing'], ['clear', 'Clear'], ['rain', 'Rain'], ['snow', 'Snow (winter)']])}
    </div><div>
      <h4>Driving</h4>
      ${rng('sens', 'Steering sensitivity', 0.4, 1.6, 0.05, v => Math.round(v * 100) + '%')}
      ${sel('manual', 'Gearbox', [['false', 'Automatic'], ['true', 'Manual (Shift / Ctrl)']])}
      ${tog('abs', 'ABS')}${tog('tcs', 'Traction control')}${tog('esc', 'Stability control')}${tog('steerAssist', 'Counter-steer assist')}
      <h4>Interface &amp; sound</h4>
      ${tog('minimap', 'Minimap')}${tog('shake', 'Camera shake')}${tog('autoRes', 'Auto resolution (smooth FPS)')}${tog('showFps', 'Show FPS')}
      ${rng('vol', 'Volume', 0, 1, 0.05, v => Math.round(v * 100) + '%')}
      <h4>Online</h4>
      ${tog('mp', 'Multiplayer')}
      <div class="row"><label>Driver name</label><input type="text" maxlength="18" data-k="name" value="${esc(settings.name || '')}"></div>
      <div class="row"><label>Progress</label><button class="btn" id="resetProg">Reset progress</button></div>
    </div></div>`;
    const box = $('settingsBox');
    box.querySelectorAll('.tog').forEach(b => b.onclick = () => { const k = b.dataset.k; settings[k] = !settings[k]; b.classList.toggle('on', settings[k]); changed(k); });
    box.querySelectorAll('input[type=range]').forEach(r => r.oninput = () => { const k = r.dataset.k; settings[k] = +r.value; const v = $('v_' + k); if (v) v.textContent = r.parentElement.querySelector('small').textContent = (k === 'view' ? r.value + ' m' : k === 'far' ? (+r.value ? r.value / 1000 + ' km' : 'off') : k === 'fov' ? r.value + '°' : k === 'timeSpeed' ? (+r.value ? r.value + '×' : 'paused') : Math.round(r.value * 100) + '%'); changed(k); });
    box.querySelectorAll('select').forEach(s => s.onchange = () => { const k = s.dataset.k; settings[k] = k === 'manual' ? s.value === 'true' : s.value; changed(k); if (k === 'weather' && s.value !== 'auto') weather.set(s.value); });
    box.querySelector('input[type=text]').onchange = (e) => { settings.name = e.target.value.trim().slice(0, 18) || 'Driver'; changed('name'); };
    $('resetProg').onclick = () => { if (confirm('Reset coins, cars and landmarks?')) { localStorage.removeItem('bishkekDrive'); location.reload(); } };
  }
  function changed(k) {
    if (k === 'preset' && PRESETS[settings.preset]) { Object.assign(settings, PRESETS[settings.preset]); renderSettings(); }
    else if (['scale', 'view', 'far', 'shadows', 'bloom', 'msaa'].includes(k)) settings.preset = 'custom';
    if (['scale', 'preset'].includes(k)) { applyScale(); renderer.setSize(window.innerWidth, window.innerHeight); }
    if (['shadows', 'preset'].includes(k)) { renderer.shadowMap.enabled = settings.shadows; scene.traverse(o => { if (o.material) (Array.isArray(o.material) ? o.material : [o.material]).forEach(m => m.needsUpdate = true); }); }
    if (['bloom', 'msaa', 'preset', 'scale'].includes(k)) buildPost();
    if (k === 'mp') { if (settings.mp) net.connect(settings.name || 'Driver'); else net.disconnect(); }
    if (k === 'name' && net.enabled) { net.name = settings.name; }
    applySettings();
    camera.updateProjectionMatrix();
  }

  // ---------------------------------------------------------------- title screen
  $('nameInput').value = settings.name || '';
  $('mpToggle').classList.toggle('on', settings.mp);
  $('mpToggle').onclick = () => { settings.mp = !settings.mp; $('mpToggle').classList.toggle('on', settings.mp); };
  $('startBtn').onclick = () => {
    audio.start();
    settings.name = ($('nameInput').value.trim() || settings.name || ('Driver' + Math.floor(Math.random() * 900 + 100))).slice(0, 18);
    saveSettings(settings);
    $('menu').classList.add('hidden');
    if (document.activeElement && document.activeElement.blur) document.activeElement.blur();
    S.mode = 'drive'; S.paused = false; rig.snap(car);
    if (settings.mp) net.connect(settings.name);
    let seenIntro = false; try { seenIntro = !!localStorage.getItem('bd_intro'); } catch (e) { /* ignore */ }
    if (!seenIntro) { S.paused = true; $('intro').classList.remove('hidden'); }
    else hud.toast(`Salam, <b>${esc(settings.name)}</b>! <b>J</b> jobs · <b>M</b> map · <b>Esc</b> menu`, 4);
  };

  $('introGo').onclick = () => { $('intro').classList.add('hidden'); S.paused = false; try { localStorage.setItem('bd_intro', '1'); } catch (e) { /* ignore */ } hud.toast(`Salam, <b>${esc(settings.name)}</b>! Press <b>J</b> to start working`, 4); };

  // ---------------------------------------------------------------- airport
  function interact() {
    if (S.mode !== 'drive') return;
    const dz = Math.hypot(car.x - airport.dropoff.x, car.z - airport.dropoff.y);
    const ds = Math.hypot(car.x - airport.spotter.x, car.z - airport.spotter.y);
    if (dz < 14) {
      if (car.speed > 3) { hud.toast('Stop the car first', 1.2); return; }
      hud.renderBoard(airport.board, $('fids'));
      $('airportMenu').classList.remove('hidden'); audio.pa();
    } else if (ds < 14) startSpot();
  }
  $('apFlight').onclick = () => {
    if (game.money < 500) { hud.toast('Not enough coins for a ticket (500)', 1.6); return; }
    game.money -= 500; audio.cash();
    $('airportMenu').classList.add('hidden'); startFlight();
  };
  $('apSpot').onclick = () => { $('airportMenu').classList.add('hidden'); startSpot(); };
  $('apTaxi').onclick = () => {
    $('airportMenu').classList.add('hidden');
    if (!jobs.start('taxi', car, scene, setCar)) return;
    const J = jobs.active;
    J.x = airport.dropoff.x + airport.n.x * 6; J.z = airport.dropoff.y + airport.n.y * 6;
    if (J.ped) { J.ped.x = J.ped.tx = J.x; J.ped.z = J.ped.tz = J.z; }
    J.dest = PLACES.filter(p => !p.airport)[Math.floor(Math.random() * (PLACES.length - 1))];
    game.setRoute(J.x, J.z, 'Passenger');
    hud.toast(`🚕 <b>${J.passenger}</b> just landed and needs a ride to ${J.dest.name}`, 3.5);
  };
  $('apClose').onclick = () => $('airportMenu').classList.add('hidden');
  const fade = (on) => $('fade').classList.toggle('on', on);
  async function startFlight() {
    fade(true); await sleep(700);
    S.flight = airport.createScenicFlight();
    S.mode = 'flight'; S.flightCam = 0;
    airport.scenicCamera(S.flight, 0, camTarget, camLook); camera.position.copy(camTarget); lookSm.copy(camLook);
    world.radius = Math.max(settings.view, 2400);
    camera.far = 12000; camera.updateProjectionMatrix();
    $('boarding').classList.add('show'); setTimeout(() => $('boarding').classList.remove('show'), 4000);
    audio.pa(); fade(false);
  }
  async function endFlight(skipped) {
    if (!S.flight || S.ending) return;
    S.ending = true; const F = S.flight;
    fade(true); await sleep(700);
    airport.endScenic(F); S.flight = null; S.ending = false;
    S.mode = 'drive'; world.radius = settings.view; camera.far = Math.max(4200, (settings.far || 0) + 800); camera.updateProjectionMatrix();
    hud.setFlightInfo(null); rig.snap(car); fade(false);
    hud.toast(skipped ? 'Back at Manas airport' : 'Welcome back to Bishkek!', 2.5);
  }
  function startSpot() {
    S.mode = 'spot';
    let pl = airport.planes.find(p => p.state === 'approach' || p.state === 'flare');
    if (!pl) { pl = airport._newPlane(); airport._startApproach(pl, 0.45); }
    S.spot = { pl, cam: new THREE.Vector3(airport.spotter.x, 2.2, airport.spotter.y) };
    lookSm.set(pl.x, pl.y, pl.z);
    hud.toast('Plane spotting · Esc to exit', 2.5);
  }
  function endSpot() { S.mode = 'drive'; S.spot = null; }

  // ---------------------------------------------------------------- touch
  if ('ontouchstart' in window) {
    $('touch').classList.remove('hidden');
    const bind = (id, on, off) => { const el = $(id); el.addEventListener('touchstart', (e) => { e.preventDefault(); audio.start(); on(); }); el.addEventListener('touchend', (e) => { e.preventDefault(); off(); }); };
    bind('tLeft', () => touch.steer = -1, () => touch.steer = 0);
    bind('tRight', () => touch.steer = 1, () => touch.steer = 0);
    bind('tGas', () => touch.gas = 1, () => touch.gas = 0);
    bind('tBrake', () => touch.brake = 1, () => touch.brake = 0);
    bind('tHand', () => touch.hand = true, () => touch.hand = false);
    bind('tNitro', () => touch.nitro = true, () => touch.nitro = false);
    bind('tCam', () => onKey('KeyC'), () => { });
    bind('tAct', () => onKey('KeyE'), () => { });
    bind('tMenu', () => onKey('Escape'), () => { });
  }
  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight; camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    if (post) post.setSize(window.innerWidth, window.innerHeight);
  });

  // ---------------------------------------------------------------- loop
  const clock = new THREE.Clock();
  const focusObj = { x: 0, z: 0, h: 0, speed: 0, spec: car.spec, vx: 0, vz: 0, radius: 1 };
  const info = {};
  const camTarget = new THREE.Vector3(), camLook = new THREE.Vector3(), lookSm = new THREE.Vector3();
  const photoCanvas = document.createElement('canvas'); photoCanvas.width = 320; photoCanvas.height = 180;
  const requestPhoto = (cb) => S.photoCbs.push(cb);
  $('loading').classList.add('hidden');
  $('menu').classList.remove('hidden');
  if (!localStorage.getItem('bd_seen')) { try { localStorage.setItem('bd_seen', '1'); } catch (e) { /* ignore */ } }

  function districtOf(x, z) {
    if (airport.rel(new THREE.Vector2(x, z)).x > -2500 && z < -15500) return 'Manas International Airport';
    if (z < -3600) return 'Bishkek – Manas road';
    if (z < 300) return x < 500 ? 'Pervomaisky district' : 'Sverdlovsky district';
    return x < 0 ? 'Leninsky district' : 'Oktyabrsky district';
  }

  let frames = 0;
  const perf = { ema: 1 / 60, t: 0 };
  renderer.shadowMap.autoUpdate = false;
  function loop() {
    requestAnimationFrame(loop);
    const rawDt = clock.getDelta();
    let dt = Math.min(0.05, rawDt);
    // ---- performance governor: adaptive resolution + chunk-build budget
    perf.ema = perf.ema * 0.95 + rawDt * 0.05;
    perf.t += rawDt;
    if (perf.t > 1.5) {
      perf.t = 0;
      const fps = 1 / Math.max(1e-3, perf.ema);
      if (settings.showFps) { $('fps').textContent = Math.round(fps) + ' fps'; $('fps').style.display = 'block'; } else $('fps').style.display = 'none';
      if (settings.autoRes && S.mode !== 'menu') {
        const old = dynScale;
        if (fps < 40) dynScale = Math.max(0.5, dynScale - (fps < 25 ? 0.15 : 0.08));
        else if (fps > 57 && dynScale < 1) dynScale = Math.min(1, dynScale + 0.05);
        if (old !== dynScale) { applyScale(); renderer.setSize(window.innerWidth, window.innerHeight); if (post) post.setSize(window.innerWidth, window.innerHeight); }
      }
      world.buildBudget = fps < 35 ? 4 : 8;
    }
    const running = !S.paused && S.mode !== 'menu';
    const simDt = running ? dt : 0;
    S.time += simDt;
    U.uTime.value += dt;
    S.hour = (S.hour + simDt / 60 * settings.timeSpeed) % 24;
    env.setHour(S.hour);
    const h = S.hour;
    traffic.rush = (h > 7.5 && h < 10) || (h > 17 && h < 20) ? 1.65 : (h > 23 || h < 6) ? 0.45 : 1;

    // ---- input (keyboard ramps so steering & throttle feel analogue)
    const k = S.keys;
    let steerIn = (k.KeyD || k.ArrowRight ? 1 : 0) - (k.KeyA || k.ArrowLeft ? 1 : 0) + touch.steer;
    let thrIn = (k.KeyW || k.ArrowUp ? 1 : 0) + touch.gas, brk = (k.KeyS || k.ArrowDown ? 1 : 0) + touch.brake;
    let analog = false;
    const gp = navigator.getGamepads ? [...navigator.getGamepads()].find(g => g) : null;
    if (gp) {
      if (Math.abs(gp.axes[0]) > 0.08) { steerIn = Math.sign(gp.axes[0]) * Math.pow(Math.abs(gp.axes[0]), 1.5); analog = true; }
      if (gp.buttons[7]?.value > 0.02) thrIn = gp.buttons[7].value;
      if (gp.buttons[6]?.value > 0.02) brk = gp.buttons[6].value;
    }
    S.steer = analog ? steerIn : S.steer + (THREE.MathUtils.clamp(steerIn, -1, 1) - S.steer) * Math.min(1, dt * (steerIn === 0 ? 12 : 8));
    S.thr += (Math.min(1, thrIn) - S.thr) * Math.min(1, dt * (thrIn ? 5 : 12));
    const input = { steer: S.steer, throttle: S.thr < 0.02 ? 0 : S.thr, brake: Math.min(1, brk), hand: !!(k.Space || touch.hand || gp?.buttons[0]?.pressed), nitro: !!(k.ShiftLeft || k.ShiftRight || touch.nitro || gp?.buttons[1]?.pressed) };
    car.throttleOn = input.throttle > 0;
    const me = S.onFoot ? foot : car;
    const night = env.night;
    car.night = night > 0.45;

    if (running) {
      if (S.mode === 'drive' || S.mode === 'spot') {
        // surface: off-road is slippery and slow
        const road = map.nearestRoad(car.x, car.z, 25);
        const onRoad = road && road.dist < road.e.w / 2 + 3.5;
        car.surface = (onRoad || airport.runwayIncursion(car.x, car.z) ? 1 : 0.72) * (weather.grip ?? 1);
        info.road = road && road.dist < road.e.w / 2 + 4 ? road : null;
        const inp = S.mode === 'spot' || S.onFoot ? { steer: 0, throttle: 0, brake: 1, hand: true } : input;
        car.update(dt, inp, world, traffic, onCrash);
        if (S.onFoot) {
          foot.update(dt, { fwd: (k.KeyW || k.ArrowUp ? 1 : 0) - (k.KeyS || k.ArrowDown ? 1 : 0), side: (k.KeyD || k.ArrowRight ? 1 : 0) - (k.KeyA || k.ArrowLeft ? 1 : 0), run: !!(k.ShiftLeft || k.ShiftRight), jump: !!k.Space }, traffic.cars.concat([car]), peds);
        }
        drift.update(dt, car, S.onFoot);
        const rr = races.update(dt, car);
        if (rr && rr.target && (!game.routeTarget || game.routeTarget.x !== rr.target.x)) game.setRoute(rr.target.x, rr.target.z, 'Checkpoint');
        if (rr && rr.done) game.clearRoute();
      }
      const focus = S.mode === 'flight' ? Object.assign(focusObj, { x: S.flight.plane.x, z: S.flight.plane.z, h: S.flight.plane.h, speed: 0 }) : me;
      traffic.night = night;
      traffic.update(dt, focus, settings.peds > 0 ? peds : null);
      peds.update(dt, focus, settings.peds > 0);
      for (const c of traffic.honks) { const d = Math.hypot(c.x - car.x, c.z - car.z); audio.horn(Math.min(0.3, 6 / (d + 8)), 0.35 + Math.random() * 0.4, 0.8 + Math.random() * 0.5); }
      airport.update(dt, night, car, S.flight ? S.flight.plane : null);
      landmarks.update(dt, S.time, night);
      if (S.mode === 'drive' || S.mode === 'cutscene') {
        const pr = police.update(dt, S.onFoot ? foot : car, () => { S.mode = 'cutscene'; document.body.classList.add('cinemode'); jobs.active && jobs.stop(car, setCar, true); });
        if (pr && pr.cam) { S.cutCam = pr; }
        if (pr && pr.done) {
          S.mode = 'drive'; document.body.classList.remove('cinemode'); S.cutCam = null;
          game.money -= pr.fine;
          game.fines.push({ kind: 'Arrest', amount: pr.fine, detail: 'Caught by the patrol police', time: hud.clockText() });
          rig.snap(car); game.save(car);
          hud.toast(`Released after paying ${pr.fine} coins`, 3);
        }
      }
      fx.update(dt);
      kalpaks.update(dt, me.x, me.z);
      weather.update(dt, camera);
      renderer.toneMappingExposure = 0.95 * (weather.exposure ?? 1);
      if (settings.weather === 'auto') { S.wT = (S.wT ?? 300) - dt; if (S.wT <= 0) { S.wT = 300 + Math.random() * 400; const r = Math.random(); weather.set(r < 0.6 ? 'clear' : r < 0.85 ? 'rain' : 'snow'); } }
      if (frames % 60 === 0) for (const e of [...fx.emitters]) if (e.ai && !traffic.cars.includes(e.obj)) fx.removeEmitter(e);
      if (S.mode === 'drive') {
        const nm = info.road ? map.roadName(info.road.e.name) : null;
        info.street = nm ? nm.en : null;
        game.trafficTime = traffic.time;
        if (!races.active && !S.onFoot) game.checkRules(dt, car, info, null, airport, requestPhoto);
        game.checkLandmarks(car);
        const res = jobs.update(dt, car, scene, setCar);
        if (res && res.done) { game.jobsDone = jobs.completed; game.save(car); }
        if (!jobs.active && jobs.nextIn !== undefined) {
          jobs.nextIn -= dt;
          if (jobs.nextIn <= 0) { const t = jobs.nextType; jobs.nextIn = undefined; jobs.start(t, car, scene, setCar); }
        }
        hud.setStreet(nm ? (nm.en !== nm.local ? `${nm.en}` : nm.local) : (info.runway ? 'Runway 07/25' : ''), nm && nm.en !== nm.local ? nm.local : districtOf(car.x, car.z));
        hud.setLimit(car.speed * 3.6, info.wrongWay, info.runway, S.onFoot || races.active ? '' : info.warn);
        const dzn = Math.hypot(car.x - airport.dropoff.x, car.z - airport.dropoff.y);
        const dsp = Math.hypot(car.x - airport.spotter.x, car.z - airport.spotter.y);
        let hintTxt = dzn < 14 ? '<b>E</b> · Manas Airport' : dsp < 14 ? '<b>E</b> · watch planes land' : '';
        if (S.onFoot) { const n = foot.nearestCar(car, traffic); hintTxt = n ? (n.own ? '<b>F</b> · get in your car' : '<b>F</b> · steal this car 🚨') : 'Walking · <b>Shift</b> run · <b>Space</b> jump'; }
        if (hintTxt !== S.hintTxt) { S.hintTxt = hintTxt; $('hint').innerHTML = hintTxt; $('hint').classList.toggle('show', !!hintTxt); }
      } else if (S.hintTxt) { S.hintTxt = ''; $('hint').classList.remove('show'); }
      if (S.mode === 'flight') {
        const fdt = ['pushback', 'taxi', 'taxiIn'].includes(S.flight.stage) ? dt * 3 : dt;
        const done = !S.ending && airport.updateScenic(S.flight, fdt);
        if (done) endFlight(false);
      }
      game.updateRoute(S.mode === 'flight' ? focusObj : car, scene);
      if (game.routeMat) game.routeMat.uniforms.uTime.value = S.time;
      const js = jobs.status(car);
      const dist = game.routeTarget ? Math.hypot(car.x - game.routeTarget.x, car.z - game.routeTarget.z) : 0;
      hud.setMission(js ? `${js} · ${fmtDist(dist)}` : game.routeTarget ? `📍 ${game.routeTarget.label} · ${fmtDist(dist)}` : '');
      S.lastSave += dt;
      if (S.lastSave > 10) { S.lastSave = 0; game.save(car); }
    }
    net.update(dt, car, { money: game.money, job: jobs.active ? JOBS[jobs.active.type].icon : '', jobs: jobs.completed }, night);

    // ---- camera
    if (S.mode === 'flight' && S.flight) {
      airport.scenicCamera(S.flight, S.flightCam, camTarget, camLook);
      camera.position.lerp(camTarget, S.flightCam === 0 ? 1 - Math.exp(-dt * 4) : 1);
      lookSm.lerp(camLook, S.flightCam === 0 ? 1 - Math.exp(-dt * 6) : 1);
      camera.lookAt(lookSm);
      camera.fov = S.flightCam === 2 ? 70 : 55; camera.updateProjectionMatrix();
      const pl = S.flight.plane;
      const hdg = (Math.atan2(Math.sin(pl.h), -Math.cos(pl.h)) * 180 / Math.PI + 360) % 360;
      hud.setFlightInfo({ alt: (pl.y - pl.a.groundY) + 627, spd: pl.v, hdg, stage: { pushback: 'Pushback', taxi: 'Taxi to runway 07', roll: 'Take-off', air: 'Over Bishkek', final: 'Final approach', taxiIn: 'Taxi to gate', done: 'Arrived' }[S.flight.stage], cam: ['Chase', 'Window', 'Cockpit', 'Spotter'][S.flightCam] });
    } else if (S.mode === 'spot' && S.spot) {
      const pl = S.spot.pl;
      camera.position.copy(S.spot.cam);
      lookSm.lerp(new THREE.Vector3(pl.x, pl.y, pl.z), 1 - Math.exp(-dt * 5));
      camera.lookAt(lookSm);
      camera.fov = THREE.MathUtils.clamp(Math.hypot(pl.x - S.spot.cam.x, pl.z - S.spot.cam.z) / 40, 12, 60); camera.updateProjectionMatrix();
      if (!airport.planes.includes(pl) || pl.state === 'taxiIn' || pl.state === 'climb' || (pl.state === 'goaround' && pl.y > 300)) endSpot();
    } else if (S.mode === 'cutscene' && S.cutCam) {
      camera.position.lerp(S.cutCam.cam, 1 - Math.exp(-dt * 3));
      lookSm.lerp(S.cutCam.look, 1 - Math.exp(-dt * 4));
      camera.lookAt(lookSm); camera.fov = 50; camera.updateProjectionMatrix();
    } else if (S.onFoot && S.mode === 'drive') {
      mouse.active = rmb; foot.camera(camera, dt, mouse); mouse.dx = mouse.dy = 0;
    } else if (S.mode !== 'free') {
      if (!rmb) S.mouseYaw *= Math.exp(-dt * 2);
      if (car.boosting) rig.shake = Math.max(rig.shake, 0.06);
      rig.baseFov = settings.fov;
      rig.update(Math.max(dt, 0.001), car, S.mouseYaw);
      if (S.mode === 'menu') {
        const a = performance.now() * 0.00004;
        camera.position.set(car.x + Math.sin(a) * 26, 6 + Math.sin(a * 3) * 2, car.z + Math.cos(a) * 26);
        camera.lookAt(car.x, 2, car.z);
      }
    }

    // ---- world & environment
    const fp = S.mode === 'flight' || S.mode === 'free' ? { x: camera.position.x, z: camera.position.z } : { x: car.x, z: car.z };
    world.update(fp, dt);
    const lit = env.update(camera, S.mode === 'flight' && S.flight ? { x: S.flight.plane.x, z: S.flight.plane.z } : car);
    const sc = env.sun.shadow.camera, want = S.mode === 'flight' ? 160 : 110;
    if (sc.right !== want) { sc.left = sc.bottom = -want; sc.right = sc.top = want; sc.updateProjectionMatrix(); }
    world.setNight(lit.night);
    if (post) post.setNight(lit.night);
    if (S.mode !== 'flight') { scene.fog.near = 450; scene.fog.far = Math.max(world.radius + 700, (settings.far || 0) * 1.15); }
    const jet = airport.noiseAt(camera.position.x, camera.position.z, camera.position.y);
    audio.update(dt, car, { throttle: input.throttle, inFlight: S.mode === 'flight', cityLevel: Math.min(1, traffic.cars.length / 200) * (Math.abs(car.z) < 6000 ? 1 : 0.2), jet: S.mode === 'flight' ? 0.35 : jet });

    // ---- render (shadow map refreshed every other frame – halves shadow cost)
    if (settings.shadows && (frames % 2 === 0 || car.speed > 25)) renderer.shadowMap.needsUpdate = true;
    if (post) post.render(dt);
    else { renderer.setRenderTarget(null); renderer.clear(); env.render(renderer); renderer.clearDepth(); renderer.render(scene, camera); }
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
      frames++;
      if (frames % 2 === 0) hud.drawSpeedo(car);
      if (settings.minimap && frames % 3 === 0) hud.drawMini(S.onFoot ? Object.assign(focusObj, { x: foot.x, z: foot.z, h: foot.camYaw, speed: 0 }) : car, traffic, game, airport, net, (c, s) => {
        c.fillStyle = '#ffc83a';
        for (const kp of kalpaks.near(me.x, me.z, 180)) { c.beginPath(); c.arc(kp.x, kp.z, 7 / s * hud.dpr, 0, 7); c.fill(); }
        if (races.active) { c.fillStyle = '#ffd23a'; for (const cp of races.active.cps.slice(races.active.i, races.active.i + 3)) { c.beginPath(); c.arc(cp.x, cp.z, 9 / s * hud.dpr, 0, 7); c.fill(); } }
        for (const pc of police.cars) { c.fillStyle = (performance.now() % 500) < 250 ? '#ff3030' : '#3060ff'; c.beginPath(); c.arc(pc.x, pc.z, 7 / s * hud.dpr, 0, 7); c.fill(); }
      });
      const nb = $('nitroBar'); if (nb) { nb.style.width = Math.round((car.nitro ?? 1) * 100) + '%'; nb.parentElement.classList.toggle('boost', !!car.boosting); }
      hud.setMoney(game.money);
      hud.setClock(S.hour, settings.mp ? (net.status === 'online' ? net.players.size : null) : null);
      if (S.mapOpen) hud.drawBigMap(car, game, airport, net);
      if (S.tabOnline && frames % 20 === 0) renderOnline();
      $('hudRoot').classList.toggle('flightmode', S.mode === 'flight' || S.mode === 'spot');
    }
  }
  loop();
  window.addEventListener('beforeunload', () => { game.save(car); net.disconnect(); });
}

function esc(s) { return String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c])); }
function fmtDist(d) { return d > 1000 ? (d / 1000).toFixed(1) + ' km' : Math.round(d / 10) * 10 + ' m'; }

boot().catch(e => { console.error(e); const el = document.getElementById('loadText'); if (el) el.textContent = 'Error: ' + e.message; });
