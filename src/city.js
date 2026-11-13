// Living city: real petrol stations (refuel), "Safe City" speed cameras on poles,
// and random live events – Kyrgyz wedding motorcades, road works, accident scenes.
import * as THREE from 'three';
import { CHUNK, ck } from './data.js';
import { colorize, merge } from './props.js';
import { fmt } from './game.js';

const PRICE = { petrol: 72, diesel: 78 }; // сом per litre (AI-92 / diesel in Bishkek)

export class City {
  constructor(scene, map, traffic, game, hud, audio) {
    this.scene = scene; this.map = map; this.traffic = traffic; this.game = game; this.hud = hud; this.audio = audio;
    // ---- petrol stations from OSM (amenity=fuel)
    this.stations = [];
    for (const c of map.chunks.values()) for (const s of c.signs) if (s.kind === 'fuel') {
      if (this.stations.some(o => Math.hypot(o.x - s.x, o.z - s.z) < 60)) continue;
      const r = map.nearestRoad(s.x, s.z, 60, e => e.cls <= 5);
      this.stations.push({ name: s.name, x: s.x, z: s.z, rx: r ? r.x : s.x, rz: r ? r.z : s.z });
    }
    this._stationModels();
    // ---- speed cameras at signalised junctions (Safe City)
    this._cameras();
    this.events = []; this.eventT = 25;
    this.flash = new THREE.PointLight(0xffffff, 0, 60, 1.5); scene.add(this.flash);
    this.fueling = null;
  }

  // canopy + pumps model, instanced per nearby station
  _stationModels() {
    const parts = [];
    parts.push(colorize(new THREE.BoxGeometry(14, 0.6, 9).translate(0, 5.2, 0), 0xf2f2f2));
    parts.push(colorize(new THREE.BoxGeometry(14.1, 0.25, 9.1).translate(0, 4.85, 0), 0xd8261c));
    for (const x of [-4.5, 4.5]) for (const z of [-2.8, 2.8]) parts.push(colorize(new THREE.BoxGeometry(0.35, 4.9, 0.35).translate(x, 2.45, z), 0xdddddd));
    for (const x of [-4.5, 4.5]) {
      parts.push(colorize(new THREE.BoxGeometry(0.8, 1.7, 0.5).translate(x, 0.85, 0), 0x1a5aa8));
      parts.push(colorize(new THREE.BoxGeometry(0.6, 0.4, 0.52).translate(x, 1.4, 0), 0x111111));
      parts.push(colorize(new THREE.BoxGeometry(2.5, 0.2, 1.4).translate(x, 0.1, 0), 0x888888));
    }
    parts.push(colorize(new THREE.BoxGeometry(1.2, 7, 0.3).translate(9, 3.5, 4), 0x1a5aa8));
    parts.push(colorize(new THREE.BoxGeometry(1.0, 1.4, 0.32).translate(9, 6.2, 4), 0xffd23a));
    this.stationGeo = merge(parts);
    const im = new THREE.InstancedMesh(this.stationGeo, new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.5 }), this.stations.length);
    const M = new THREE.Matrix4(), Q = new THREE.Quaternion();
    this.stations.forEach((s, i) => {
      // put the canopy beside the road, not on it
      let x = s.x, z = s.z;
      const r = this.map.nearestRoad(x, z, 30);
      if (r && r.dist < r.e.w / 2 + 6) { const side = r.lat >= 0 ? 1 : -1; x = r.x - r.dz * (r.e.w / 2 + 7) * side; z = r.z + r.dx * (r.e.w / 2 + 7) * side; }
      s.px = x; s.pz = z;
      Q.setFromAxisAngle(new THREE.Vector3(0, 1, 0), r ? Math.atan2(r.dx, r.dz) : 0);
      M.compose(new THREE.Vector3(x, 0.02, z), Q, new THREE.Vector3(1, 1, 1)); im.setMatrixAt(i, M);
    });
    im.castShadow = true; im.receiveShadow = true; im.computeBoundingSphere();
    this.scene.add(im);
  }

  _cameras() {
    const parts = [
      colorize(new THREE.CylinderGeometry(0.1, 0.14, 6.5, 6).translate(0, 3.25, 0), 0x6a6e74),
      colorize(new THREE.BoxGeometry(0.1, 0.1, 1.6).translate(0, 6.3, 0.8), 0x6a6e74),
      colorize(new THREE.BoxGeometry(0.34, 0.3, 0.6).translate(0, 6.1, 1.5), 0xf2f2f2),
      colorize(new THREE.BoxGeometry(0.2, 0.2, 0.1).translate(0, 6.1, 1.82), 0x111111),
      colorize(new THREE.BoxGeometry(0.5, 0.35, 0.05).translate(0, 4.4, 0.08), 0x1a5aa8),
    ];
    const geo = merge(parts);
    this.cams = [];
    for (const cl of this.map.signalClusters) {
      const c = cl.controls[0]; if (!c) continue;
      const o = {}; this.map.sample(c.e, c.dir, Math.max(1, c.stop - 25), c.e.w / 2 + 1.2, o);
      this.cams.push({ x: o.x, z: o.z, h: Math.atan2(-o.dx, -o.dz) });
    }
    const im = new THREE.InstancedMesh(geo, new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.5, metalness: 0.3 }), this.cams.length);
    const M = new THREE.Matrix4(), Q = new THREE.Quaternion(), Y = new THREE.Vector3(0, 1, 0);
    this.cams.forEach((c, i) => { Q.setFromAxisAngle(Y, c.h + Math.PI); M.compose(new THREE.Vector3(c.x, 0, c.z), Q, new THREE.Vector3(1, 1, 1)); im.setMatrixAt(i, M); });
    im.castShadow = true; im.computeBoundingSphere();
    this.scene.add(im);
  }

  // white flash from the nearest camera when a violation is photographed
  cameraFlash(x, z) {
    let best = null, bd = 220;
    for (const c of this.cams) { const d = Math.hypot(c.x - x, c.z - z); if (d < bd) { bd = d; best = c; } }
    if (!best) return;
    this.flash.position.set(best.x - Math.sin(best.h) * 1.5, 6.1, best.z - Math.cos(best.h) * 1.5);
    this.flash.intensity = 400; this.flashT = 0.12;
  }

  nearestStation(x, z, r = 18) {
    for (const s of this.stations) if (Math.hypot(s.px - x, s.pz - z) < r) return s;
    return null;
  }
  // start filling the tank (continues over a few seconds, pay per litre)
  refuel(car) {
    const s = this.nearestStation(car.x, car.z); if (!s) return false;
    const need = car.tank - car.fuel; if (need < 0.5) { this.hud.toast('Tank is already full', 1.2); return true; }
    const price = car.diesel ? PRICE.diesel : PRICE.petrol;
    const afford = Math.floor(Math.max(this.game.bank, this.game.money) / price);
    const litres = Math.min(need, afford);
    if (litres < 1) { this.hud.toast('Not enough money for fuel', 1.5); return true; }
    this.fueling = { car, left: litres, price, total: 0, s };
    this.hud.toast(`⛽ ${s.name}: filling ${Math.round(litres)} L of ${car.diesel ? 'diesel' : 'AI-92'} · ${price} сом/L`, 2);
    return true;
  }

  update(dt, me, car, night) {
    if (this.flashT > 0) { this.flashT -= dt; if (this.flashT <= 0) this.flash.intensity = 0; }
    // refuelling progress
    const F = this.fueling;
    if (F) {
      const l = Math.min(F.left, dt * 12);
      F.left -= l; F.car.fuel = Math.min(F.car.tank, F.car.fuel + l); F.total += l;
      if (F.left <= 0.01 || car.speed > 1) {
        const cost = Math.round(F.total * F.price);
        this.game.spend(cost, `АЗС ${F.s.name}: ${F.total.toFixed(1)} L`);
        this.audio.cash();
        this.hud.toast(`⛽ ${F.total.toFixed(1)} L · ${fmt(cost)} сом`, 2);
        this.fueling = null;
      }
    }
    // random live events near the player
    this.eventT -= dt;
    if (this.eventT <= 0) { this.eventT = 70 + Math.random() * 90; this._spawnEvent(me); }
    for (let i = this.events.length - 1; i >= 0; i--) {
      const E = this.events[i];
      E.t += dt;
      if (E.update) E.update(dt, me);
      const far = Math.hypot(E.x - me.x, E.z - me.z) > 1500;
      if (E.t > E.life || far) { E.dispose(); this.events.splice(i, 1); }
    }
    this.traffic.obstacles = this.events.flatMap(E => E.obstacles || []);
  }

  _roadNear(me, minD, maxD, filter) {
    for (let k = 0; k < 30; k++) {
      const a = Math.random() * 6.28, d = minD + Math.random() * (maxD - minD);
      const r = this.map.nearestRoad(me.x + Math.cos(a) * d, me.z + Math.sin(a) * d, 60, filter);
      if (r && r.e.len > 80) return r;
    }
    return null;
  }

  _spawnEvent(me) {
    const r = Math.random();
    if (r < 0.4) this._wedding(me);
    else if (r < 0.7) this._roadworks(me);
    else this._accident(me);
  }

  // Кыргыз той: a convoy of white cars with ribbons, honking through the city
  _wedding(me) {
    const r = this._roadNear(me, 150, 350, e => e.cls <= 3 && !e.ow);
    if (!r) return;
    const list = [['suv', 0xf4f4f4], ['sedan', 0xf4f4f4], ['sedan', 0x111214], ['suv', 0xf4f4f4], ['sedan', 0xf4f4f4], ['suv', 0x111214]];
    const C = this.traffic.spawnConvoy(r.e, 0, list, 'wedding');
    // ribbons + balloons follow each car
    const rib = new THREE.MeshStandardMaterial({ color: 0xff5a8a, roughness: 0.5 });
    const meshes = C.cars.map((c, i) => {
      const g = new THREE.Group();
      const b1 = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.04, c.spec.L * 0.9), rib); b1.position.set(0.3, c.spec.roof[2][1] + 0.02, 0); g.add(b1);
      const b2 = b1.clone(); b2.position.x = -0.3; g.add(b2);
      if (i === 0) { const ring = new THREE.Mesh(new THREE.TorusGeometry(0.35, 0.06, 8, 20), new THREE.MeshStandardMaterial({ color: 0xffd23a, metalness: 1, roughness: 0.2 })); ring.position.set(0, c.spec.roof[2][1] + 0.4, 0); ring.rotation.x = Math.PI / 2; g.add(ring); }
      for (const s of [-1, 1]) { const bl = new THREE.Mesh(new THREE.SphereGeometry(0.22, 10, 8), new THREE.MeshStandardMaterial({ color: [0xff4d6d, 0xffffff, 0x4da6ff][(i + s + 3) % 3] })); bl.position.set(s * 0.6, c.spec.roof[2][1] + 0.9, -c.spec.L * 0.3); g.add(bl); }
      this.scene.add(g); return g;
    });
    let honk = 0;
    const E = {
      kind: 'wedding', t: 0, life: 150, x: r.x, z: r.z,
      update: (dt, me2) => {
        const alive = C.cars.filter(c => this.traffic.cars.includes(c));
        C.cars.forEach((c, i) => { const g = meshes[i]; g.visible = alive.includes(c); g.position.set(c.x, 0.03, c.z); g.rotation.y = c.h; });
        if (alive.length) { E.x = alive[0].x; E.z = alive[0].z; } else E.t = E.life;
        honk -= dt;
        const d = Math.hypot(E.x - me2.x, E.z - me2.z);
        if (honk <= 0 && d < 260) { honk = 2.5 + Math.random() * 2; for (let k = 0; k < 3; k++) setTimeout(() => this.audio.horn(Math.min(0.25, 8 / (d + 10)), 0.25, 0.9 + Math.random() * 0.25), k * 320); }
      },
      dispose: () => meshes.forEach(g => this.scene.remove(g)),
    };
    this.events.push(E);
    this.game.msg('Нурлан (друг)', 'Слышишь гудки? Свадебный кортеж едет по городу! 💍🚗🚗🚗', '💍');
  }

  // Жол оңдоо иштери: cones + barriers closing the right lane
  _roadworks(me) {
    const r = this._roadNear(me, 120, 300, e => e.cls <= 3 && e.lanes >= 2);
    if (!r) return;
    const e = r.e, s0 = Math.max(10, Math.min(e.len - 50, r.s));
    const g = new THREE.Group(), obstacles = [];
    const cone = new THREE.ConeGeometry(0.22, 0.75, 10).translate(0, 0.37, 0);
    const cm = new THREE.MeshStandardMaterial({ color: 0xff6a10, roughness: 0.6 }), wm = new THREE.MeshStandardMaterial({ color: 0xffffff });
    const o = {};
    const dirs = e.ow ? [0] : [0, 1];
    const dir = dirs[Math.floor(Math.random() * dirs.length)];
    const lane = e.lanes - 1, off = this.map.laneOffset(e, lane);
    for (let s = 0; s < 40; s += 3) {
      for (const lo of [-1.6, 1.6]) {
        this.map.sample(e, dir, s0 + s, off + lo, o);
        const m = new THREE.Mesh(cone, cm); m.position.set(o.x, 0.05, o.z); m.castShadow = true; g.add(m);
        const band = new THREE.Mesh(new THREE.CylinderGeometry(0.15, 0.17, 0.1, 10), wm); band.position.set(o.x, 0.45, o.z); g.add(band);
      }
    }
    this.map.sample(e, dir, s0 - 2, off, o);
    const bar = new THREE.Mesh(new THREE.BoxGeometry(3, 0.9, 0.15), new THREE.MeshStandardMaterial({ color: 0xd8261c }));
    bar.position.set(o.x, 0.8, o.z); bar.rotation.y = Math.atan2(o.dx, o.dz) + Math.PI / 2; g.add(bar);
    const c = document.createElement('canvas'); c.width = 256; c.height = 256; const x = c.getContext('2d');
    x.fillStyle = '#fff'; x.beginPath(); x.moveTo(128, 10); x.lineTo(246, 236); x.lineTo(10, 236); x.closePath(); x.fill();
    x.strokeStyle = '#d8261c'; x.lineWidth = 22; x.stroke(); x.fillStyle = '#111'; x.font = 'bold 110px Arial'; x.textAlign = 'center'; x.fillText('⚒', 128, 200);
    const sign = new THREE.Mesh(new THREE.PlaneGeometry(1.2, 1.2), new THREE.MeshStandardMaterial({ map: new THREE.CanvasTexture(c), transparent: true, side: THREE.DoubleSide }));
    sign.position.set(o.x, 2.0, o.z); sign.rotation.y = Math.atan2(-o.dx, -o.dz); g.add(sign);
    // excavator-ish machine & workers
    this.map.sample(e, dir, s0 + 20, off, o);
    const exc = new THREE.Mesh(new THREE.BoxGeometry(2.4, 2.2, 4), new THREE.MeshStandardMaterial({ color: 0xf2c200 })); exc.position.set(o.x, 1.4, o.z); exc.rotation.y = Math.atan2(o.dx, o.dz); exc.castShadow = true; g.add(exc);
    const arm = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.4, 4), new THREE.MeshStandardMaterial({ color: 0xf2c200 })); arm.position.set(o.x + o.dx * 2.5, 2.8, o.z + o.dz * 2.5); arm.rotation.set(-0.5, Math.atan2(o.dx, o.dz), 0); g.add(arm);
    for (let k = 0; k < 6; k++) { this.map.sample(e, dir, s0 + 6 + k * 5, off, o); obstacles.push({ x: o.x, z: o.z, r: 1.8 }); }
    this.scene.add(g);
    this.events.push({ kind: 'roadworks', t: 0, life: 260, x: r.x, z: r.z, obstacles, dispose: () => this.scene.remove(g) });
  }

  // ДТП: two crashed cars, a police car with flashing lights and an officer
  _accident(me) {
    const r = this._roadNear(me, 120, 300, e => e.cls <= 3 && e.lanes >= 2);
    if (!r) return;
    const e = r.e, s0 = Math.max(10, Math.min(e.len - 20, r.s)), o = {};
    const lane = e.lanes - 1, off = this.map.laneOffset(e, lane);
    const g = new THREE.Group(), obstacles = [];
    const mk = (type, color, s, yaw) => {
      this.map.sample(e, 0, s, off, o);
      const m = this.traffic.models[type];
      const body = new THREE.Group();
      body.add(new THREE.Mesh(m.p.geometry, new THREE.MeshStandardMaterial({ color, vertexColors: true, metalness: 0.4, roughness: 0.4 })), new THREE.Mesh(m.d.geometry, new THREE.MeshStandardMaterial({ vertexColors: true })));
      body.position.set(o.x, 0.03, o.z); body.rotation.y = Math.atan2(o.dx, o.dz) + yaw; body.children.forEach(c => c.castShadow = true);
      g.add(body); obstacles.push({ x: o.x, z: o.z, r: 1.9 });
      return body;
    };
    mk('sedan', 0x8c9096, s0, 0.35); mk('suv', 0x111214, s0 + 5, -0.25);
    const pc = mk('sedan', 0xf4f6f8, s0 - 9, 0.15);
    const red = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.14, 0.26), new THREE.MeshStandardMaterial({ color: 0x400000, emissive: 0xff1010, emissiveIntensity: 3 }));
    const blue = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.14, 0.26), new THREE.MeshStandardMaterial({ color: 0x000040, emissive: 0x1040ff, emissiveIntensity: 3 }));
    red.position.set(-0.28, 1.6, -0.2); blue.position.set(0.28, 1.6, -0.2); pc.add(red, blue);
    // debris & triangle
    for (let k = 0; k < 14; k++) { const d = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.04, 0.3), new THREE.MeshStandardMaterial({ color: k % 3 ? 0x222222 : 0xbfd8e8 })); d.position.set(o.x + (Math.random() - 0.5) * 5, 0.06, o.z + (Math.random() - 0.5) * 5); d.rotation.y = Math.random() * 6; g.add(d); }
    this.scene.add(g);
    let t = 0;
    this.events.push({ kind: 'accident', t: 0, life: 200, x: r.x, z: r.z, obstacles, update: (dt) => { t += dt; const on = (t * 4) % 2 < 1; red.material.emissiveIntensity = on ? 4 : 0.2; blue.material.emissiveIntensity = on ? 0.2 : 4; }, dispose: () => this.scene.remove(g) });
  }
}
