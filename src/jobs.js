// Jobs that earn coins: taxi driver, city bus / marshrutka driver on routes between real bus
// stops, and courier deliveries from real shops & cafés. GPS guides every job.
import * as THREE from 'three';
import { PLACES } from './game.js';

const NAMES = ['Aibek', 'Nurlan', 'Aigerim', 'Bakyt', 'Cholpon', 'Azamat', 'Elnura', 'Timur', 'Gulnara', 'Ermek', 'Aizada', 'Kanat', 'Meerim', 'Daniyar', 'Saltanat', 'Ulan', 'Aidana', 'Bekzat', 'Kymbat', 'Marat'];
const pick = (a) => a[Math.floor(Math.random() * a.length)];

export const JOBS = {
  taxi: { name: 'Taxi driver', icon: '🚕', desc: 'Pick up passengers anywhere in the city' },
  bus: { name: 'Bus driver', icon: '🚌', desc: 'Drive a city bus route, stop at every bus stop', car: 'bus' },
  marshrutka: { name: 'Marshrutka driver', icon: '🚐', desc: 'Minibus route – faster, fewer passengers', car: 'van' },
  courier: { name: 'Courier', icon: '📦', desc: 'Deliver food & parcels from real shops' },
};

export class Jobs {
  constructor(map, game, hud, audio, peds) {
    this.map = map; this.game = game; this.hud = hud; this.audio = audio; this.peds = peds;
    this.active = null; // { type, stage, ... }
    this.marker = null;
    this.completed = 0;
    this.shops = [];
    for (const c of map.chunks.values()) for (const s of c.signs) if (['cafe', 'restaurant', 'fast_food', 'supermarket', 'convenience', 'pharmacy', 'bakery', 'clothes'].includes(s.kind)) this.shops.push(s);
  }

  // ------------------------------------------------------------------ markers
  _marker(scene, x, z, color = 0xffc020) {
    if (!this.markerMesh) {
      const g = new THREE.Group();
      const ring = new THREE.Mesh(new THREE.RingGeometry(3.2, 3.8, 48).rotateX(-Math.PI / 2), new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.9, depthWrite: false }));
      ring.position.y = 0.25;
      const beam = new THREE.Mesh(new THREE.CylinderGeometry(3.5, 3.5, 40, 32, 1, true), new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.1, side: THREE.DoubleSide, depthWrite: false, blending: THREE.AdditiveBlending }));
      beam.position.y = 20;
      g.add(ring, beam);
      this.markerMesh = g; this.ring = ring; this.beam = beam;
    }
    this.ring.material.color.setHex(color); this.beam.material.color.setHex(color);
    this.markerMesh.position.set(x, 0, z);
    if (!this.markerMesh.parent) scene.add(this.markerMesh);
    this.markerMesh.visible = true;
  }
  _hideMarker() { if (this.markerMesh) this.markerMesh.visible = false; }

  _curbPoint(x, z, maxD = 120) {
    const r = this.map.nearestRoad(x, z, maxD, e => e.cls >= 1 && e.cls <= 5);
    if (!r) return null;
    const side = r.lat >= 0 ? 1 : -1;
    const off = r.e.w / 2 + 1.3;
    return { x: r.x - r.dz * off * side, z: r.z + r.dx * off * side, roadX: r.x - r.dz * (r.e.w / 2 - 1.5) * side, roadZ: r.z + r.dx * (r.e.w / 2 - 1.5) * side };
  }

  _spawnPed(x, z, wave = false, shirt) {
    const p = { mode: 'plaza', zone: { x, z, r: 0.1, active: true, count: 0 }, x, z, h: 0, tx: x, tz: z, idle: 1e9, ex: 0, ez: 0, dodge: 0, wave, fixed: true };
    p.shirt = shirt ?? pick([0xf2c200, 0x1e3a5a, 0x8a2a4a, 0xe8e8e8, 0x3b5d3a]); p.pants = 0x22283a; p.skin = pick([0xd8b090, 0xc89a78, 0xe0bea0]); p.hairC = 0x1a1410; p.scale = 0.95 + Math.random() * 0.1; p.speed = 1.3; p.phase = 0;
    this.peds.list.push(p);
    return p;
  }
  _removePed(p) { const i = this.peds.list.indexOf(p); if (i >= 0) this.peds.list.splice(i, 1); }

  // ------------------------------------------------------------------ start / stop
  start(type, car, scene, setCar) {
    this.stop(car, setCar, true);
    if (type === 'taxi') return this._startTaxi(car, scene);
    if (type === 'courier') return this._startCourier(car, scene);
    if (type === 'bus' || type === 'marshrutka') return this._startBus(type, car, scene, setCar);
  }

  stop(car, setCar, silent) {
    const J = this.active;
    if (!J) return;
    if (J.ped) this._removePed(J.ped);
    if ((J.type === 'bus' || J.type === 'marshrutka') && J.earned > 0) this.game.credit(J.earned, `Зарплата: маршрут ${J.num} (неполный)`, true);
    if (J.boarders) J.boarders.forEach(p => this._removePed(p));
    if (J.prevCar && setCar) setCar(J.prevCar.type, J.prevCar.color, true);
    this.active = null;
    this._hideMarker();
    this.game.clearRoute();
    if (!silent) this.hud.toast('Shift ended', 1.5);
  }

  _startTaxi(car, scene) {
    for (let k = 0; k < 40; k++) {
      const a = Math.random() * Math.PI * 2, d = 150 + Math.random() * 450;
      const P = this._curbPoint(car.x + Math.cos(a) * d, car.z + Math.sin(a) * d, 80);
      if (!P || this.map.insideBuilding(P.x, P.z, 0.5)) continue;
      const dests = PLACES.filter(p => p.x !== undefined && Math.hypot(p.x - P.x, p.z - P.z) > 700 && (!p.airport || Math.random() < 0.35));
      // also real addresses: random shop/café as destination
      let dest = pick(dests);
      if (Math.random() < 0.5 && this.shops.length) { const s = pick(this.shops); if (Math.hypot(s.x - P.x, s.z - P.z) > 600) dest = { name: s.name, x: s.x, z: s.z }; }
      this.active = { type: 'taxi', stage: 'pickup', x: P.x, z: P.z, dest, passenger: pick(NAMES), t: 0, damage0: car.damage };
      this.active.ped = this._spawnPed(P.x, P.z, true, 0xf2c200);
      this.game.setRoute(P.x, P.z, 'Passenger');
      this._marker(scene, P.x, P.z, 0xffc020);
      this.audio.chime();
      this.hud.toast(`🚕 <b>${this.active.passenger}</b> is waiting for a taxi`, 3);
      return true;
    }
    return false;
  }

  _startCourier(car, scene) {
    const near = this.shops.filter(s => { const d = Math.hypot(s.x - car.x, s.z - car.z); return d > 120 && d < 900; });
    if (!near.length) return false;
    const shop = pick(near);
    const P = this._curbPoint(shop.x, shop.z, 60) || { x: shop.x, z: shop.z };
    // destination: a real building 1-3 km away
    let B = null;
    for (let k = 0; k < 60 && !B; k++) {
      const b = this.map.buildings[Math.floor(Math.random() * this.map.buildings.length)];
      const d = Math.hypot(b.cx - P.x, b.cz - P.z);
      if (d > 900 && d < 3200 && b.h > 3) B = b;
    }
    if (!B) return false;
    const D = this._curbPoint(B.cx, B.cz, 80) || { x: B.cx, z: B.cz };
    const item = { cafe: 'coffee & samsa', restaurant: 'plov & lagman', fast_food: 'shawarma', supermarket: 'groceries', convenience: 'a parcel', pharmacy: 'medicine', bakery: 'fresh nan', clothes: 'a clothes parcel' }[shop.kind] || 'a parcel';
    this.active = { type: 'courier', stage: 'pickup', x: P.x, z: P.z, shop, item, dest: { name: 'Customer', x: D.x, z: D.z }, t: 0, damage0: car.damage };
    this.game.setRoute(P.x, P.z, shop.name);
    this._marker(scene, P.x, P.z, 0x40e080);
    this.audio.chime();
    this.hud.toast(`📦 Pick up <b>${item}</b> at <b>${shop.name}</b>`, 3);
    return true;
  }

  _startBus(type, car, scene, setCar) {
    const stops = this.map.busStopList;
    // nearest stop to the player on a main road
    const cand = stops.map(s => ({ s, d: Math.hypot(s[0] - car.x, s[1] - car.z) })).filter(o => o.d < 1500).sort((a, b) => a.d - b.d).slice(0, 12);
    if (!cand.length) { this.hud.toast('No bus stops nearby – drive into the city', 2); return false; }
    for (let attempt = 0; attempt < 12; attempt++) {
      const st = pick(cand).s;
      const far = stops.filter(s => { const d = Math.hypot(s[0] - st[0], s[1] - st[1]); return d > 2500 && d < 5500; });
      if (!far.length) continue;
      const en = pick(far);
      const path = this.map.route(st[0], st[1], en[0], en[1]);
      if (!path || path.length < 8) continue;
      // real bus stops lying along the computed route
      const along = [];
      let acc = 0;
      for (let i = 0; i < path.length - 2; i += 2) {
        const ax = path[i], az = path[i + 1], bx = path[i + 2], bz = path[i + 3];
        const vx = bx - ax, vz = bz - az, l = Math.hypot(vx, vz) || 1;
        for (const s of stops) {
          if (Math.abs(s[0] - ax) > l + 25 || Math.abs(s[1] - az) > l + 25) continue;
          let t = ((s[0] - ax) * vx + (s[1] - az) * vz) / (l * l); if (t < 0 || t > 1) continue;
          const px = ax + vx * t, pz = az + vz * t;
          const lat = ((s[0] - ax) * -vz + (s[1] - az) * vx) / l; // + = right side
          if (Math.abs(lat) < 22 && lat > -4) along.push({ x: s[0], z: s[1], d: acc + t * l, px, pz });
        }
        acc += l;
      }
      along.sort((a, b) => a.d - b.d);
      const route = [];
      for (const s of along) if (!route.length || s.d - route[route.length - 1].d > 220) route.push(s);
      if (route.length < 4) continue;
      const num = type === 'bus' ? pick(['7', '20', '31', '35', '38', '42', '48', '52', '62', '64']) : pick(['107', '110', '126', '144', '150', '174', '192', '206', '212', '238', '246', '265']);
      this.active = { type, stage: 'drive', stops: route.slice(0, 12), i: 0, num, t: 0, pax: 0, earned: 0, boarders: [], prevCar: { type: car.type, color: car.color } };
      // start at the first stop in the right vehicle
      setCar(JOBS[type].car, type === 'bus' ? 0x2a7a3a : 0xf4f4f4, false);
      const s0 = this.active.stops[0];
      const r = this.map.nearestRoad(s0.px, s0.pz, 40, e => e.cls <= 4);
      if (r) {
        const off = this.map.laneOffset(r.e, r.e.ow ? r.e.lanes - 1 : r.e.lanes - 1);
        const nx = path[2] - path[0], nz = path[3] - path[1];
        let dx = r.dx, dz = r.dz; if (dx * nx + dz * nz < 0) { dx = -dx; dz = -dz; }
        car.place(r.x - dz * off, r.z + dx * off, Math.atan2(dx, dz));
      }
      this.active.i = 1;
      this._nextStop(scene);
      this.audio.chime();
      this.hud.toast(`${JOBS[type].icon} Route <b>${num}</b>: ${route.length} stops. Stop at each bus stop to pick up passengers.`, 4);
      return true;
    }
    this.hud.toast('Could not build a route here – try on a main avenue', 2);
    return false;
  }

  _nextStop(scene) {
    const J = this.active, s = J.stops[J.i];
    this.game.setRoute(s.x, s.z, `Stop ${J.i + 1}/${J.stops.length}`);
    this._marker(scene, s.px, s.pz, 0x40a0ff);
    // waiting passengers at the stop
    J.boarders.forEach(p => this._removePed(p)); J.boarders = [];
    const n = 1 + Math.floor(Math.random() * (J.type === 'bus' ? 6 : 4));
    for (let k = 0; k < n; k++) J.boarders.push(this._spawnPed(s.x + (Math.random() - 0.5) * 4, s.z + (Math.random() - 0.5) * 3, false));
  }

  // ------------------------------------------------------------------ per-frame
  update(dt, car, scene, setCar) {
    const J = this.active; if (!J) return null;
    J.t += dt;
    if (this.markerMesh) { this.ring.rotation.y += dt; this.beam.material.opacity = 0.08 + 0.05 * Math.sin(J.t * 4); }
    if (J.type === 'taxi' || J.type === 'courier') return this._updateAB(dt, car, scene);
    return this._updateBus(dt, car, scene, setCar);
  }

  _updateAB(dt, car, scene) {
    const J = this.active;
    const d = Math.hypot(car.x - J.x, car.z - J.z);
    if (J.ped && J.stage === 'pickup') { J.ped.h = Math.atan2(car.x - J.ped.x, car.z - J.ped.z); J.ped.moving = false; }
    if (J.stage === 'pickup' && d < 10 && car.speed < 1.5) {
      if (J.ped) {
        // passenger walks to the car, then gets in
        J.stage = 'boarding'; J.ped.wave = false; J.ped.tx = car.x; J.ped.tz = car.z; J.ped.idle = 0; J.ped.zone.r = 0.1; J.bt = 0;
      } else this._beginRide(car, scene);
      return null;
    }
    if (J.stage === 'boarding') {
      J.bt += dt;
      const p = J.ped; const dx = car.x - p.x, dz = car.z - p.z, dd = Math.hypot(dx, dz);
      if (dd > 2.0 && J.bt < 5) { p.x += dx / dd * 1.6 * dt; p.z += dz / dd * 1.6 * dt; p.h = Math.atan2(dx, dz); p.moving = true; p.phase += dt * 8; }
      else { this._removePed(p); J.ped = null; this.audio.blip(520, 0.06); this._beginRide(car, scene); }
      return null;
    }
    if (J.stage === 'ride' && d < 14 && car.speed < 1.5) {
      const time = J.t - J.t0;
      const dist = J.dist;
      const base = J.type === 'taxi' ? 120 + dist / 1000 * 55 : 90 + dist / 1000 * 45;
      const par = dist / 1000 * 95 + 35;
      const dmg = Math.max(0, car.damage - J.damage0);
      const speedBonus = time < par ? Math.min(base * 0.4, (par - time) * 1.2) : 0;
      const penalty = dmg * (J.type === 'courier' ? 6 : 3);
      const stars = Math.max(1, Math.min(5, Math.round(5 - dmg / 8 - Math.max(0, time - par) / 40)));
      const total = Math.max(20, Math.round((base + speedBonus - penalty) * (0.6 + stars * 0.1) / 5) * 5);
      this.game.money += total; this.completed++;
      this.audio.cash();
      this.hud.toast(`${J.type === 'taxi' ? '🚕' : '📦'} +${total} сом · ${'★'.repeat(stars)}${'☆'.repeat(5 - stars)}${J.type === 'taxi' ? ` · ${J.passenger}: "Rahmat!"` : ''}`, 4);
      const type = J.type;
      this.active = null; this._hideMarker(); this.game.clearRoute();
      // auto-chain the next order after a short pause
      this.nextIn = 3; this.nextType = type;
      return { done: true, coins: total };
    }
    return null;
  }

  _beginRide(car, scene) {
    const J = this.active;
    J.stage = 'ride'; J.t0 = J.t;
    J.x = J.dest.x; J.z = J.dest.z;
    J.dist = Math.hypot(J.x - car.x, J.z - car.z);
    this.game.setRoute(J.x, J.z, J.dest.name);
    this._marker(scene, J.x, J.z, J.type === 'taxi' ? 0xff4060 : 0x40e080);
    this.audio.chime();
    this.hud.toast(J.type === 'taxi' ? `${J.passenger}: "Salam! To ${J.dest.name}, please."` : `📦 Got ${J.item}. Deliver it carefully!`, 3);
  }

  _updateBus(dt, car, scene, setCar) {
    const J = this.active, s = J.stops[J.i];
    const d = Math.hypot(car.x - s.px, car.z - s.pz);
    if (J.stage === 'drive' && d < 14 && car.speed < 1) { J.stage = 'doors'; J.dt = 0; this.audio.blip(440, 0.1); }
    if (J.stage === 'doors') {
      J.dt += dt;
      // passengers walk to the door and board
      let left = 0;
      for (const p of J.boarders) {
        if (p.gone) continue;
        const dx = car.x - p.x, dz = car.z - p.z, dd = Math.hypot(dx, dz);
        if (dd < 2.8 || J.dt > 7) { p.gone = true; this._removePed(p); J.pax++; J.earned += J.type === 'bus' ? 15 : 20; this.audio.blip(880, 0.03, 0.05); }
        else { p.x += dx / dd * 1.7 * dt; p.z += dz / dd * 1.7 * dt; p.h = Math.atan2(dx, dz); p.moving = true; p.phase += dt * 8; left++; }
      }
      if (car.speed > 2) { J.stage = 'drive'; this.hud.toast('You left before everyone boarded!', 1.5); }
      if (!left && J.dt > 2.5) {
        J.i++;
        if (J.i >= J.stops.length) {
          const bonus = 150 + J.stops.length * 20;
          J.earned += bonus; this.completed++;
          this.game.credit(J.earned, `Зарплата: маршрут ${J.num}`, true);
          this.audio.cash();
          this.hud.toast(`🏁 Route ${J.num} complete! ${J.pax} passengers · +${J.earned} сом`, 5);
          const prev = J.prevCar;
          this.active = null; this._hideMarker(); this.game.clearRoute();
          setCar(prev.type, prev.color, true);
          return { done: true, coins: J.earned };
        }
        J.stage = 'drive';
        this._nextStop(scene);
      }
    }
    return null;
  }

  status(car) {
    const J = this.active; if (!J) return null;
    if (J.type === 'taxi') return J.stage === 'ride' ? `🚕 ${J.passenger} → ${J.dest.name}` : `🚕 Pick up ${J.passenger}`;
    if (J.type === 'courier') return J.stage === 'ride' ? `📦 Deliver ${J.item}` : `📦 Pick up at ${J.shop.name}`;
    return `${JOBS[J.type].icon} Route ${J.num} · stop ${Math.min(J.i + 1, J.stops.length)}/${J.stops.length} · ${J.pax} pax`;
  }
}
