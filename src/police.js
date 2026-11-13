// Patrol police: wanted level, pursuit on the real road network, sirens & light bars, roadblock
// ramming, and the "BUSTED" arrest cutscene when they catch you.
import * as THREE from 'three';
import { buildVehicle } from './carModels.js';
import { colorize, merge } from './props.js';

function doorText() {
  const c = document.createElement('canvas'); c.width = 512; c.height = 96;
  const x = c.getContext('2d');
  x.fillStyle = '#1446a0'; x.fillRect(0, 30, 512, 40);
  x.fillStyle = '#ffffff'; x.font = 'bold 34px Arial'; x.textAlign = 'center'; x.textBaseline = 'middle';
  x.fillText('ПАТРУЛЬНАЯ МИЛИЦИЯ', 256, 51);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4;
  return t;
}

function officer() {
  const g = new THREE.Group();
  const uni = new THREE.MeshStandardMaterial({ color: 0x2c3442, roughness: 0.8 });
  const vest = new THREE.MeshStandardMaterial({ color: 0xc8e020, roughness: 0.6, emissive: 0x303800 });
  const skin = new THREE.MeshStandardMaterial({ color: 0xc89a78 });
  const mk = (geo, mat, x, y, z) => { const m = new THREE.Mesh(geo, mat); m.position.set(x, y, z); m.castShadow = true; g.add(m); return m; };
  mk(new THREE.BoxGeometry(0.46, 0.62, 0.27), vest, 0, 1.25, 0);
  mk(new THREE.BoxGeometry(0.4, 0.2, 0.24), uni, 0, 0.9, 0);
  mk(new THREE.SphereGeometry(0.12, 12, 10), skin, 0, 1.7, 0);
  mk(new THREE.CylinderGeometry(0.15, 0.14, 0.08, 14), uni, 0, 1.84, 0);
  mk(new THREE.BoxGeometry(0.34, 0.03, 0.36), uni, 0, 1.8, 0.04);
  const legs = [], arms = [];
  for (const s of [-1, 1]) {
    const lg = new THREE.Group(); lg.position.set(0.1 * s, 0.9, 0);
    const l = new THREE.Mesh(new THREE.BoxGeometry(0.15, 0.88, 0.16).translate(0, -0.44, 0), uni); l.castShadow = true; lg.add(l); g.add(lg); legs.push(lg);
    const ag = new THREE.Group(); ag.position.set(0.28 * s, 1.52, 0);
    const a = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.62, 0.11).translate(0, -0.31, 0), uni); a.castShadow = true; ag.add(a); g.add(ag); arms.push(ag);
  }
  g.userData = { legs, arms };
  return g;
}

export class Police {
  constructor(scene, map, world, audio, hud, fx) {
    this.scene = scene; this.map = map; this.world = world; this.audio = audio; this.hud = hud; this.fx = fx;
    this.cars = [];
    this.wanted = 0;           // 0..5 stars
    this.heat = 0;             // decays → stars
    this.escapeT = 0;
    this.bustT = 0;
    this.lastSeen = 0;
    this.cutscene = null;
    const v = buildVehicle('sedan', {});
    this.geo = v;
    this.mats = {
      paint: new THREE.MeshPhysicalMaterial({ color: 0xf4f6f8, metalness: 0.4, roughness: 0.3, clearcoat: 1, vertexColors: true }),
      det: new THREE.MeshStandardMaterial({ vertexColors: true, metalness: 0.3, roughness: 0.3 }),
      red: new THREE.MeshStandardMaterial({ color: 0x400000, emissive: 0xff1010, emissiveIntensity: 0 }),
      blue: new THREE.MeshStandardMaterial({ color: 0x000040, emissive: 0x1040ff, emissiveIntensity: 0 }),
      text: new THREE.MeshStandardMaterial({ map: doorText(), transparent: true, roughness: 0.4 }),
      stripe: new THREE.MeshStandardMaterial({ color: 0x1446a0, roughness: 0.4 }),
    };
    this.lights = [new THREE.PointLight(0xff2020, 0, 30, 2), new THREE.PointLight(0x2050ff, 0, 30, 2)];
    for (const l of this.lights) scene.add(l);
  }

  // ------------------------------------------------------------------ wanted level
  crime(amount, reason) {
    const before = this.wanted;
    this.heat = Math.min(5.99, this.heat + amount);
    this.wanted = Math.max(this.wanted, Math.floor(this.heat));
    this.escapeT = 0;
    if (this.wanted > before) {
      this.hud.toast(`🚨 ${reason} – the police are after you!`, 2.5);
      this._updateStars();
    }
  }
  _updateStars() {
    const el = document.getElementById('wanted');
    if (!el) return;
    el.innerHTML = this.wanted ? '★'.repeat(this.wanted) + '<span>' + '★'.repeat(5 - this.wanted) + '</span>' : '';
    el.classList.toggle('show', this.wanted > 0);
  }

  _makeCar(x, z, h) {
    const g = new THREE.Group();
    const T = this.geo.spec;
    const p = new THREE.Mesh(this.geo.paint, this.mats.paint), d = new THREE.Mesh(this.geo.detail, this.mats.det);
    p.castShadow = d.castShadow = true;
    g.add(p, d);
    const roofY = T.roof[2][1];
    const bar = new THREE.Mesh(new THREE.BoxGeometry(1.1, 0.12, 0.3), new THREE.MeshStandardMaterial({ color: 0x222222 }));
    bar.position.set(0, roofY + 0.06, -0.2); g.add(bar);
    const r = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.14, 0.26), this.mats.red); r.position.set(-0.28, roofY + 0.12, -0.2);
    const b = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.14, 0.26), this.mats.blue); b.position.set(0.28, roofY + 0.12, -0.2);
    g.add(r, b);
    for (const s of [-1, 1]) {
      const st = new THREE.Mesh(new THREE.PlaneGeometry(T.L * 0.8, 0.22), this.mats.stripe);
      st.position.set(s * (T.W / 2 + 0.012), 0.72, 0); st.rotation.y = s * Math.PI / 2; g.add(st);
      const tx = new THREE.Mesh(new THREE.PlaneGeometry(2.4, 0.45), this.mats.text);
      tx.position.set(s * (T.W / 2 + 0.02), 0.72, -0.1); tx.rotation.y = s * Math.PI / 2; g.add(tx);
    }
    this.scene.add(g);
    const c = { g, x, z, h, v: 0, path: null, pi: 0, repath: 0, stuck: 0, spec: T, radius: T.W / 2 + 0.05 };
    this.cars.push(c);
    return c;
  }

  _spawn(px, pz, ph) {
    // on a road 180–300 m away, preferably behind the player and out of sight
    for (let k = 0; k < 30; k++) {
      const a = ph + Math.PI + (Math.random() - 0.5) * 2.2 * (k > 15 ? 2 : 1);
      const d = 180 + Math.random() * 120;
      const r = this.map.nearestRoad(px + Math.sin(a) * d, pz + Math.cos(a) * d, 80, e => e.cls <= 4);
      if (!r || this.map.insideBuilding(r.x, r.z, 1)) continue;
      const toP = Math.atan2(px - r.x, pz - r.z);
      return this._makeCar(r.x, r.z, toP);
    }
    return null;
  }

  clear() {
    for (const c of this.cars) { this.scene.remove(c.g); }
    this.cars.length = 0;
    this.wanted = 0; this.heat = 0; this.escapeT = 0; this.bustT = 0;
    this._updateStars();
    this.audio.siren(false);
    for (const l of this.lights) l.intensity = 0;
  }

  // ------------------------------------------------------------------ per frame
  update(dt, car, onBusted) {
    if (this.cutscene) return this._updateCutscene(dt, car);
    const t = performance.now() / 1000;
    // light bars
    const ph = (t * 4) % 2 < 1;
    this.mats.red.emissiveIntensity = this.wanted ? (ph ? 4 : 0.2) : 0;
    this.mats.blue.emissiveIntensity = this.wanted ? (ph ? 0.2 : 4) : 0;
    if (!this.wanted) {
      if (this.cars.length) this.clear();
      this.heat = Math.max(0, this.heat - dt * 0.05);
      return;
    }
    const want = Math.min(4, this.wanted);
    if (this.cars.length < want && Math.random() < dt * 0.8) this._spawn(car.x, car.z, car.h);
    let nearest = 1e9, nc = null;
    for (const c of this.cars) {
      this._drive(c, dt, car);
      const d = Math.hypot(c.x - car.x, c.z - car.z);
      if (d < nearest) { nearest = d; nc = c; }
      c.g.position.set(c.x, 0.02, c.z); c.g.rotation.y = c.h;
    }
    // light pools from the nearest car
    if (nc) {
      for (let i = 0; i < 2; i++) { this.lights[i].position.set(nc.x + (i ? 0.4 : -0.4), 2, nc.z); this.lights[i].intensity = (i ? !ph : ph) ? 25 : 2; }
    }
    this.audio.siren(nearest < 450);
    // catch: police right next to you and you're (almost) stopped
    if (nearest < 9 && car.speed < 2.2) this.bustT += dt; else this.bustT = Math.max(0, this.bustT - dt * 0.5);
    if (car.damage >= 100 && nearest < 20) this.bustT += dt;
    const bustEl = document.getElementById('bust');
    if (bustEl) { bustEl.style.width = Math.min(100, this.bustT / 2.5 * 100) + '%'; bustEl.parentElement.classList.toggle('show', this.bustT > 0.05); }
    if (this.bustT > 2.5) { this._startCutscene(nc, car); onBusted && onBusted(); return; }
    // escape: lose them for a while
    if (nearest > 260) this.escapeT += dt; else this.escapeT = 0;
    const need = 8 + this.wanted * 4;
    if (this.escapeT > need) {
      this.hud.toast(`😎 You lost the police! (${this.wanted}★ escape)`, 3);
      this.onEscape && this.onEscape(this.wanted);
      this.clear();
    }
  }

  _drive(c, dt, car) {
    const d = Math.hypot(car.x - c.x, car.z - c.z);
    // target: predicted player position (direct when close, road route when far)
    let tx = car.x + car.vx * Math.min(1.2, d / 40), tz = car.z + car.vz * Math.min(1.2, d / 40);
    c.repath -= dt;
    if (d > 70) {
      if (c.repath <= 0 || !c.path) { c.path = this.map.route(c.x, c.z, car.x, car.z); c.pi = 2; c.repath = 2.5; }
      if (c.path) {
        while (c.pi < c.path.length - 2 && Math.hypot(c.path[c.pi] - c.x, c.path[c.pi + 1] - c.z) < 14) c.pi += 2;
        tx = c.path[c.pi]; tz = c.path[c.pi + 1];
      }
    }
    const want = Math.atan2(tx - c.x, tz - c.z);
    let dh = want - c.h; dh = Math.atan2(Math.sin(dh), Math.cos(dh));
    const maxTurn = Math.min(2.2, 9 / Math.max(4, c.v)) * dt;
    c.h += THREE.MathUtils.clamp(dh, -maxTurn, maxTurn);
    let vmax = d > 70 ? 44 : Math.max(6, car.speed + 6);
    if (Math.abs(dh) > 0.6) vmax = Math.min(vmax, 12);
    if (d < 12) vmax = Math.max(2, car.speed);
    c.v += THREE.MathUtils.clamp(vmax - c.v, -12 * dt, 7 * dt);
    c.x += Math.sin(c.h) * c.v * dt; c.z += Math.cos(c.h) * c.v * dt;
    // buildings
    const res = {};
    for (const off of [1.5, -1.5]) {
      if (this.world.collide(c.x + Math.sin(c.h) * off, c.z + Math.cos(c.h) * off, c.radius, res)) { c.x += res.x; c.z += res.z; c.v *= 0.85; }
    }
    // unstick
    if (c.v < 1.5 && d > 40) c.stuck += dt; else c.stuck = 0;
    if (c.stuck > 4 && d > 120) { this.scene.remove(c.g); this.cars.splice(this.cars.indexOf(c), 1); }
    // contact with the player: ram & push
    for (const o of [car.spec.L * 0.3, 0, -car.spec.L * 0.3]) {
      const x = car.x + Math.sin(car.h) * o, z = car.z + Math.cos(car.h) * o;
      for (const po of [1.3, -1.3]) {
        const cx = c.x + Math.sin(c.h) * po, cz = c.z + Math.cos(c.h) * po;
        const dx = x - cx, dz = z - cz, dd = Math.hypot(dx, dz), R = car.radius + c.radius;
        if (dd < R && dd > 1e-4) {
          const nx = dx / dd, nz = dz / dd;
          car.x += nx * (R - dd) * 0.6; car.z += nz * (R - dd) * 0.6; c.x -= nx * (R - dd) * 0.4; c.z -= nz * (R - dd) * 0.4;
          const vn = (car.vx - Math.sin(c.h) * c.v) * nx + (car.vz - Math.cos(c.h) * c.v) * nz;
          if (vn < 0) {
            car.vx -= nx * vn; car.vz -= nz * vn; c.v *= 0.6;
            if (-vn > 4) { this.fx && this.fx.crash(cx + nx * c.radius, 0.6, cz + nz * c.radius, nx, nz, -vn, 0xf4f6f8); this.audio.crash(-vn); car.damage = Math.min(100, car.damage + -vn * 0.4); if (this.onRam) this.onRam(-vn); }
          }
        }
      }
    }
  }

  // ------------------------------------------------------------------ BUSTED cutscene
  _startCutscene(pc, car) {
    this.audio.siren(true);
    const off = officer();
    this.scene.add(off);
    // park the police car diagonally in front of the player
    const fx = Math.sin(car.h), fz = Math.cos(car.h), rx = -fz, rz = fx;
    if (!pc) pc = this._makeCar(car.x + fx * 7, car.z + fz * 7, car.h + Math.PI);
    const tx = car.x + fx * 6.5 - rx * 2.2, tz = car.z + fz * 6.5 - rz * 2.2;
    this.cutscene = { t: 0, pc, off, from: { x: pc.x, z: pc.z, h: pc.h }, to: { x: tx, z: tz, h: car.h + Math.PI * 0.8 }, fine: 250 + this.wanted * 250, stars: this.wanted };
    document.getElementById('cine').classList.add('on');
    document.getElementById('bustBox').classList.remove('show');
  }

  _updateCutscene(dt, car) {
    const C = this.cutscene, pc = C.pc;
    C.t += dt;
    const t = C.t;
    car.vx = car.vz = 0; car.r = 0;
    const ph = (performance.now() / 250) % 2 < 1;
    this.mats.red.emissiveIntensity = ph ? 4 : 0.2; this.mats.blue.emissiveIntensity = ph ? 0.2 : 4;
    // 0–1.5 s: police car swings in and stops
    const k = Math.min(1, t / 1.5), e = 1 - Math.pow(1 - k, 3);
    pc.x = C.from.x + (C.to.x - C.from.x) * e; pc.z = C.from.z + (C.to.z - C.from.z) * e;
    let dh = C.to.h - C.from.h; dh = Math.atan2(Math.sin(dh), Math.cos(dh));
    pc.h = C.from.h + dh * e;
    pc.g.position.set(pc.x, 0.02, pc.z); pc.g.rotation.y = pc.h;
    for (let i = 0; i < 2; i++) { this.lights[i].position.set(pc.x + (i ? 0.4 : -0.4), 2.2, pc.z); this.lights[i].intensity = (i ? !ph : ph) ? 30 : 3; }
    // 1.5–5 s: officer gets out and walks to the driver's window
    const O = C.off, U = O.userData;
    const sx = pc.x + Math.cos(pc.h) * 1.4, sz = pc.z - Math.sin(pc.h) * 1.4;      // police driver door
    const wx = car.x + Math.cos(car.h) * 1.6 + Math.sin(car.h) * 0.4, wz = car.z - Math.sin(car.h) * 1.6 + Math.cos(car.h) * 0.4; // player's window
    let ox = sx, oz = sz, walking = false;
    if (t > 1.5) {
      const w = Math.min(1, (t - 1.5) / 3);
      ox = sx + (wx - sx) * w; oz = sz + (wz - sz) * w; walking = w < 1;
    }
    O.visible = t > 1.4;
    O.position.set(ox, 0.02, oz);
    O.rotation.y = walking ? Math.atan2(wx - sx, wz - sz) : Math.atan2(car.x - ox, car.z - oz);
    const sw = walking ? Math.sin(t * 9) : 0;
    U.legs[0].rotation.x = sw * 0.5; U.legs[1].rotation.x = -sw * 0.5;
    U.arms[0].rotation.x = -sw * 0.45; U.arms[1].rotation.x = t > 4.6 ? -1.4 - Math.sin(t * 3) * 0.1 : sw * 0.45; // raises hand at the window
    // subtitles
    const sub = document.getElementById('cineSub');
    const lines = [[1.6, ''], [4.6, '👮 «Здравствуйте! Патрульная милиция. Документы, пожалуйста.»'], [6.6, '👮 «Превышение скорости, ДТП, неподчинение… Оформляем.»'], [8.6, `Fine: −${C.fine} coins · ${'★'.repeat(C.stars)} cleared`]];
    let txt = ''; for (const [tt, s] of lines) if (t > tt) txt = s;
    if (sub.textContent !== txt) sub.textContent = txt;
    document.getElementById('busted').classList.toggle('show', t > 7.6);
    // camera path (returned to main loop)
    const cam = new THREE.Vector3(), look = new THREE.Vector3();
    if (t < 2.5) { // low dramatic orbit
      const a = car.h + 2.2 + t * 0.35;
      cam.set(car.x + Math.sin(a) * 9, 1.1, car.z + Math.cos(a) * 9); look.set((car.x + pc.x) / 2, 1, (car.z + pc.z) / 2);
    } else if (t < 4.6) { // follow the officer from behind
      cam.set(ox - Math.sin(O.rotation.y) * 4 + 1.2, 1.8, oz - Math.cos(O.rotation.y) * 4); look.set(ox, 1.4, oz);
    } else if (t < 7.6) { // over the officer's shoulder into the car
      cam.set(ox + Math.cos(car.h) * 1.4 - Math.sin(car.h) * 1.2, 1.75, oz - Math.sin(car.h) * 1.4 - Math.cos(car.h) * 1.2); look.set(car.x, 1.1, car.z);
    } else { // wide shot
      cam.set(car.x + Math.cos(car.h) * 12 + Math.sin(car.h) * 6, 4, car.z - Math.sin(car.h) * 12 + Math.cos(car.h) * 6); look.set(car.x, 0.8, car.z);
    }
    if (t > 10.5) {
      this.scene.remove(O);
      document.getElementById('cine').classList.remove('on');
      document.getElementById('busted').classList.remove('show');
      sub.textContent = '';
      const fine = C.fine;
      this.cutscene = null;
      this.clear();
      return { done: true, fine, cam, look };
    }
    return { cam, look };
  }
}
