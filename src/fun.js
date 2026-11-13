// Gameplay toys: drift scoring with combos, 40 hidden golden kalpaks, checkpoint street races
// with rival cars on real streets, and dynamic weather (rain / Bishkek winter snow).
import * as THREE from 'three';
import { mulberry } from './data.js';
import { PLACES } from './game.js';
import { buildVehicle } from './carModels.js';
import { U } from './materials.js';

const $ = (id) => document.getElementById(id);

// ------------------------------------------------------------------ drift scoring
export class Drift {
  constructor(hud, audio, game) { this.hud = hud; this.audio = audio; this.game = game; this.points = 0; this.mult = 1; this.active = false; this.off = 0; this.chain = 0; this.best = 0; }
  update(dt, car, onFoot) {
    const angle = Math.abs(car.rearSlip || 0);
    const drifting = !onFoot && car.speed > 8 && angle > 0.22 && angle < 1.4;
    const el = $('drift');
    if (drifting) {
      this.active = true; this.off = 0; this.chain += dt;
      this.mult = Math.min(8, 1 + Math.floor(this.chain / 2));
      this.points += car.speed * angle * dt * 12 * this.mult;
      car.nitro = Math.min(1, (car.nitro ?? 0) + dt * 0.06); // drifting refills nitro
    } else if (this.active) {
      this.off += dt;
      if (this.off > 1.1) this._bank(true);
    }
    if (el) {
      el.classList.toggle('show', this.active);
      if (this.active) el.innerHTML = `DRIFT <b>${Math.round(this.points).toLocaleString()}</b>${this.mult > 1 ? ` <i>×${this.mult}</i>` : ''}`;
    }
  }
  crash() { if (this.active && this.points > 50) { this.hud.toast('💥 Drift lost!', 1); } this.points = 0; this._bank(false); }
  _bank(ok) {
    if (ok && this.points > 150) {
      const coins = Math.round(this.points / 40);
      this.game.money += coins; this.audio.cash();
      this.best = Math.max(this.best, this.points);
      this.hud.toast(`🌀 Drift ${Math.round(this.points).toLocaleString()} pts · +${coins} coins`, 2);
    }
    this.active = false; this.points = 0; this.mult = 1; this.chain = 0; this.off = 0;
  }
}

// ------------------------------------------------------------------ golden kalpaks (collectibles)
export class Kalpaks {
  constructor(scene, map, game, hud, audio) {
    this.scene = scene; this.map = map; this.game = game; this.hud = hud; this.audio = audio;
    const r = mulberry(2026);
    this.list = [];
    // a few at landmarks, the rest hidden on random streets all over the city
    for (const p of PLACES) if (!p.airport && p.x !== undefined && this.list.length < 8) this.list.push({ x: p.x + 14, z: p.z + 6 });
    let tries = 0;
    while (this.list.length < 40 && tries++ < 5000) {
      const x = -6500 + r() * 12000, z = -6000 + r() * 9500;
      const rd = map.nearestRoad(x, z, 60, e => e.cls >= 1 && e.cls <= 5);
      if (!rd) continue;
      const side = r() < 0.5 ? 1 : -1, off = rd.e.w / 2 + 1.2;
      const px = rd.x - rd.dz * off * side, pz = rd.z + rd.dx * off * side;
      if (map.insideBuilding(px, pz, 1)) continue;
      if (this.list.some(k => Math.hypot(k.x - px, k.z - pz) < 600)) continue;
      this.list.push({ x: px, z: pz });
    }
    this.list.forEach((k, i) => k.id = i);
    try { this.got = new Set(JSON.parse(localStorage.getItem('bd_kalpaks') || '[]')); } catch (e) { this.got = new Set(); }
    // model: golden ak-kalpak
    const gold = new THREE.MeshStandardMaterial({ color: 0xffc83a, metalness: 1, roughness: 0.22, emissive: 0x553300, emissiveIntensity: 0.6 });
    const g = new THREE.Group();
    const cap = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.5, 0.9, 16, 1, false), gold); cap.position.y = 0.45;
    const brim = new THREE.Mesh(new THREE.CylinderGeometry(0.55, 0.55, 0.08, 20), new THREE.MeshStandardMaterial({ color: 0x1a1208, metalness: 0.4, roughness: 0.5 }));
    const tip = new THREE.Mesh(new THREE.SphereGeometry(0.1, 10, 8), gold); tip.position.y = 0.95;
    g.add(cap, brim, tip);
    const glowTex = (() => { const c = document.createElement('canvas'); c.width = c.height = 64; const x = c.getContext('2d'); const gr = x.createRadialGradient(32, 32, 2, 32, 32, 32); gr.addColorStop(0, 'rgba(255,220,120,0.9)'); gr.addColorStop(1, 'rgba(255,200,80,0)'); x.fillStyle = gr; x.fillRect(0, 0, 64, 64); return new THREE.CanvasTexture(c); })();
    this.proto = g; this.glowMat = new THREE.SpriteMaterial({ map: glowTex, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false });
    this.live = new Map();
    this.t = 0;
  }
  get count() { return this.got.size; }
  update(dt, px, pz) {
    this.t += dt;
    for (const k of this.list) {
      if (this.got.has(k.id)) continue;
      const d = Math.hypot(k.x - px, k.z - pz);
      let m = this.live.get(k.id);
      if (d < 450 && !m) {
        m = this.proto.clone(); const s = new THREE.Sprite(this.glowMat); s.scale.set(4, 4, 1); s.position.y = 0.5; m.add(s);
        m.position.set(k.x, 1, k.z); this.scene.add(m); this.live.set(k.id, m);
      } else if (d > 520 && m) { this.scene.remove(m); this.live.delete(k.id); continue; }
      if (m) {
        m.rotation.y = this.t * 2; m.position.y = 1 + Math.sin(this.t * 3 + k.id) * 0.25;
        if (d < 4) {
          this.got.add(k.id); this.scene.remove(m); this.live.delete(k.id);
          try { localStorage.setItem('bd_kalpaks', JSON.stringify([...this.got])); } catch (e) { /* ignore */ }
          this.game.money += 250; this.audio.chime(); setTimeout(() => this.audio.cash(), 200);
          this.hud.toast(`🎩 Golden kalpak ${this.got.size}/${this.list.length} · +250 coins`, 2.5);
          if (this.got.size === this.list.length) { this.game.money += 5000; this.hud.toast('🏆 All golden kalpaks found! +5000 coins', 5); }
        }
      }
    }
  }
  near(px, pz, r) { return this.list.filter(k => !this.got.has(k.id) && Math.hypot(k.x - px, k.z - pz) < r); }
}

// ------------------------------------------------------------------ street races
export const RACES = [
  { id: 'chuy', name: 'Chuy Avenue Sprint', desc: 'Philharmonic → Victory Square, straight down Bishkek\'s main avenue', via: [[-1307, -120], [0, 40], [1032, -300]] },
  { id: 'center', name: 'Ala-Too Circuit', desc: 'A lap around the centre: Ala-Too, Osh Bazaar, Bishkek Park', via: [[30, 40], [-1300, 100], [-2700, 330], [-1100, 950], [30, 60]] },
  { id: 'south', name: 'South Side Run', desc: 'Asia Mall → Vefa Center → Central Mosque', via: null, places: ['asia', 'vefa', 'mosque'] },
  { id: 'airport', name: 'Manas Airport Rush', desc: '25 km from Ala-Too Square to the airport terminal', via: null, places: ['alatoo', 'airport'] },
];

export class Races {
  constructor(scene, map, game, hud, audio) {
    this.scene = scene; this.map = map; this.game = game; this.hud = hud; this.audio = audio;
    this.active = null;
    try { this.best = JSON.parse(localStorage.getItem('bd_race_best') || '{}'); } catch (e) { this.best = {}; }
    this.ringMat = new THREE.MeshBasicMaterial({ color: 0xffd23a, transparent: true, opacity: 0.85, side: THREE.DoubleSide, depthWrite: false });
    this.ringMat2 = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.35, side: THREE.DoubleSide, depthWrite: false });
  }

  _waypoints(R) {
    if (R.via) return R.via;
    return R.places.map(id => { const p = PLACES.find(q => q.id === id); return [p.x, p.z]; });
  }

  start(R, car, teleport) {
    this.stop();
    const wp = this._waypoints(R);
    const path = [];
    for (let i = 0; i < wp.length - 1; i++) {
      const seg = this.map.route(wp[i][0], wp[i][1], wp[i + 1][0], wp[i + 1][1]);
      if (!seg) return false;
      path.push(...(path.length ? seg.slice(2) : seg));
    }
    // checkpoints every ~300 m along the route
    const cps = []; let acc = 0;
    for (let i = 2; i < path.length; i += 2) {
      acc += Math.hypot(path[i] - path[i - 2], path[i + 1] - path[i - 1]);
      if (acc > 300 || i >= path.length - 2) { acc = 0; cps.push({ x: path[i], z: path[i + 1], h: Math.atan2(path[i] - path[i - 2], path[i + 1] - path[i - 1]) }); }
    }
    let total = 0; for (let i = 2; i < path.length; i += 2) total += Math.hypot(path[i] - path[i - 2], path[i + 1] - path[i - 1]);
    teleport(path[0], path[1]);
    const h0 = Math.atan2(path[4] - path[0], path[5] - path[1]);
    const r0 = this.map.nearestRoad(path[0], path[1], 30);
    if (r0) { const off = this.map.laneOffset(r0.e, 0); let dx = r0.dx, dz = r0.dz; if (dx * Math.sin(h0) + dz * Math.cos(h0) < 0) { dx = -dx; dz = -dz; } car.place(r0.x - dz * off, r0.z + dx * off, Math.atan2(dx, dz)); }
    const A = { R, path, cps, i: 0, t: -3.5, total, rivals: [], meshes: [] };
    // gold / silver pace rivals
    for (const [pace, col, name] of [[22, 0xffc020, 'Gold rival'], [17, 0xc0c8d0, 'Silver rival']]) {
      const v = buildVehicle(pace > 20 ? 'coupe' : 'hatch', {});
      const g = new THREE.Group();
      g.add(new THREE.Mesh(v.paint, new THREE.MeshStandardMaterial({ color: col, vertexColors: true, metalness: 0.6, roughness: 0.3, transparent: true, opacity: 0.75 })), new THREE.Mesh(v.detail, new THREE.MeshStandardMaterial({ vertexColors: true, transparent: true, opacity: 0.75 })));
      this.scene.add(g);
      A.rivals.push({ g, s: 0, v: 0, pace, name, side: A.rivals.length ? -1.8 : 1.8 });
    }
    A.gold = total / 22; A.silver = total / 17; A.bronze = total / 13;
    this.active = A;
    this._showCp();
    $('raceHud').classList.add('show');
    return true;
  }

  _showCp() {
    const A = this.active;
    for (const m of A.meshes) this.scene.remove(m);
    A.meshes = [];
    for (let k = 0; k < 2; k++) {
      const c = A.cps[A.i + k]; if (!c) break;
      const g = new THREE.Group();
      const ring = new THREE.Mesh(new THREE.TorusGeometry(7, 0.35, 8, 40), k ? this.ringMat2 : this.ringMat);
      ring.position.y = 4; g.add(ring);
      if (!k) { const beam = new THREE.Mesh(new THREE.CylinderGeometry(0.4, 0.4, 60, 8), this.ringMat2); beam.position.y = 30; g.add(beam); }
      g.position.set(c.x, 0, c.z); g.rotation.y = c.h;
      this.scene.add(g); A.meshes.push(g);
    }
  }

  stop() {
    const A = this.active; if (!A) return;
    for (const m of A.meshes) this.scene.remove(m);
    for (const r of A.rivals) this.scene.remove(r.g);
    this.active = null;
    $('raceHud').classList.remove('show');
    $('countdown').classList.remove('show');
  }

  _rivalPos(r, path, out) {
    // walk along the path polyline to distance r.s
    let s = r.s, i = 2;
    for (; i < path.length; i += 2) {
      const l = Math.hypot(path[i] - path[i - 2], path[i + 1] - path[i - 1]);
      if (s <= l) { const f = s / (l || 1); out.x = path[i - 2] + (path[i] - path[i - 2]) * f; out.z = path[i - 1] + (path[i + 1] - path[i - 1]) * f; out.h = Math.atan2(path[i] - path[i - 2], path[i + 1] - path[i - 1]); out.i = i; return out; }
      s -= l;
    }
    out.x = path[path.length - 2]; out.z = path[path.length - 1]; out.done = true; return out;
  }

  update(dt, car) {
    const A = this.active; if (!A) return null;
    A.t += dt;
    const cd = $('countdown');
    if (A.t < 0) {
      car.vx = car.vz = 0;
      const n = Math.ceil(-A.t);
      const txt = n > 3 ? '' : String(n);
      if (cd.textContent !== txt) { cd.textContent = txt; if (txt) { cd.classList.remove('show'); void cd.offsetWidth; cd.classList.add('show'); this.audio.blip(520, 0.15, 0.15); } }
      return null;
    }
    if (A.t - dt < 0) { cd.textContent = 'GO!'; cd.classList.remove('show'); void cd.offsetWidth; cd.classList.add('show'); this.audio.blip(1040, 0.3, 0.18); }
    // rivals: pace with corner slowdown
    const o = {};
    for (const r of A.rivals) {
      this._rivalPos(r, A.path, o);
      const look = {}; const r2 = { s: r.s + 30 }; this._rivalPos(r2, A.path, look);
      let turn = Math.abs(Math.atan2(Math.sin(look.h - o.h), Math.cos(look.h - o.h)));
      const target = r.pace * (turn > 0.5 ? 0.45 : turn > 0.25 ? 0.7 : 1.15);
      r.v += THREE.MathUtils.clamp(target - r.v, -8 * dt, 4 * dt);
      r.s += r.v * dt;
      r.g.position.set(o.x + Math.cos(o.h) * r.side * 0.5, 0.02, o.z - Math.sin(o.h) * r.side * 0.5);
      let dh = o.h - r.g.rotation.y; dh = Math.atan2(Math.sin(dh), Math.cos(dh)); r.g.rotation.y += dh * Math.min(1, dt * 6);
    }
    // checkpoints
    const c = A.cps[A.i];
    if (Math.hypot(car.x - c.x, car.z - c.z) < 12) {
      A.i++; this.audio.blip(880, 0.08, 0.12);
      if (A.i >= A.cps.length) return this._finish(car);
      this._showCp();
    }
    const tm = A.t;
    const pos = 1 + A.rivals.filter(r => r.s > this._progress(car)).length;
    $('raceHud').innerHTML = `<b>${A.R.name}</b><span>⏱ ${fmtT(tm)}</span><span>CP ${A.i}/${A.cps.length}</span><span>P${pos}/3</span>`;
    return { target: A.cps[A.i] };
  }

  _progress(car) {
    // approximate distance along the path for the player (index of current checkpoint * spacing)
    const A = this.active; let s = 0;
    for (let k = 0; k < A.i; k++) s += k ? Math.hypot(A.cps[k].x - A.cps[k - 1].x, A.cps[k].z - A.cps[k - 1].z) : Math.hypot(A.cps[0].x - A.path[0], A.cps[0].z - A.path[1]);
    const next = A.cps[A.i];
    const prev = A.i ? A.cps[A.i - 1] : { x: A.path[0], z: A.path[1] };
    const seg = Math.hypot(next.x - prev.x, next.z - prev.z) || 1;
    return s + Math.max(0, seg - Math.hypot(next.x - car.x, next.z - car.z));
  }

  _finish() {
    const A = this.active, t = A.t;
    const medal = t <= A.gold ? '🥇 Gold' : t <= A.silver ? '🥈 Silver' : t <= A.bronze ? '🥉 Bronze' : 'Finished';
    const prize = t <= A.gold ? 1500 : t <= A.silver ? 800 : t <= A.bronze ? 400 : 150;
    const best = this.best[A.R.id];
    const nb = !best || t < best;
    if (nb) { this.best[A.R.id] = t; try { localStorage.setItem('bd_race_best', JSON.stringify(this.best)); } catch (e) { /* ignore */ } }
    this.game.money += prize; this.audio.cash();
    this.hud.toast(`🏁 ${A.R.name}: ${fmtT(t)} · ${medal} · +${prize} coins${nb ? ' · NEW RECORD!' : ''}`, 6);
    this.stop();
    return { done: true };
  }
}

export function fmtT(t) { t = Math.max(0, t); const m = Math.floor(t / 60), s = t - m * 60; return `${m}:${s < 10 ? '0' : ''}${s.toFixed(2)}`; }

// ------------------------------------------------------------------ weather
export class Weather {
  constructor(scene, world, env) {
    this.scene = scene; this.world = world; this.env = env;
    this.kind = 'clear'; this.amount = 0; // 0..1 blend
    const N = 9000;
    const pos = new Float32Array(N * 6);
    for (let i = 0; i < N; i++) {
      const x = (Math.random() - 0.5) * 80, y = Math.random() * 40, z = (Math.random() - 0.5) * 80;
      pos.set([x, y, z, x, y - 0.6, z], i * 6);
    }
    const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    this.rainMat = new THREE.ShaderMaterial({
      uniforms: { uTime: { value: 0 }, uCam: { value: new THREE.Vector3() }, uSnow: { value: 0 }, uAmt: { value: 0 } },
      vertexShader: `uniform float uTime; uniform vec3 uCam; uniform float uSnow; varying float vA;
        void main(){ vec3 p = position;
          float sp = mix(26.0, 2.2, uSnow);
          p.y = mod(p.y - uTime*sp, 40.0);
          if (uSnow > 0.5) { p.x += sin(uTime*0.8 + position.z)*0.8; p.z += cos(uTime*0.6 + position.x)*0.8; if (mod(float(gl_VertexID),2.0) > 0.5) p.y += 0.6 - 0.08; }
          p.xz = mod(p.xz - uCam.xz + 40.0, 80.0) - 40.0 + uCam.xz;
          p.y += uCam.y - 15.0;
          vA = 1.0;
          gl_Position = projectionMatrix * viewMatrix * vec4(p, 1.0); }`,
      fragmentShader: `uniform float uSnow; uniform float uAmt; void main(){ gl_FragColor = vec4(mix(vec3(0.6,0.65,0.75), vec3(0.95), uSnow), mix(0.3, 0.6, uSnow) * uAmt); }`,
      transparent: true, depthWrite: false,
    });
    this.rain = new THREE.LineSegments(g, this.rainMat);
    this.rain.frustumCulled = false; this.rain.visible = false;
    scene.add(this.rain);
    this.base = null;
  }

  set(kind) { this.kind = kind; }

  update(dt, camera, mode) {
    const want = this.kind === 'clear' ? 0 : 1;
    this.amount += THREE.MathUtils.clamp(want - this.amount, -dt * 0.25, dt * 0.25);
    if (this.kind !== 'clear') this.cur = this.kind;
    const snow = this.cur === 'snow' ? 1 : 0;
    const a = this.amount;
    this.rain.visible = a > 0.01;
    this.rainMat.uniforms.uTime.value += dt;
    this.rainMat.uniforms.uCam.value.copy(camera.position);
    this.rainMat.uniforms.uSnow.value = snow;
    this.rainMat.uniforms.uAmt.value = a;
    this.rain.geometry.setDrawRange(0, Math.floor(9000 * 2 * (snow ? 0.35 : 0.8) * a));
    // world response: wet roads / snowy ground, heavier clouds, closer fog
    const M = this.world.mat;
    if (!this.base) this.base = { road: M.road.roughness, ground: this.world.ground.material.color.clone(), grass: M.grass.color.clone(), tree: M.tree.color.clone() };
    M.road.roughness = this.base.road - (snow ? 0 : 0.6 * a);
    M.road.metalness = snow ? 0 : 0.25 * a;
    U.uSnow.value = snow * a;
    this.world.ground.material.color.copy(this.base.ground).lerp(new THREE.Color(0.85, 0.86, 0.88), snow * a * 0.35);
    this.exposure = 1 - snow * a * 0.22;
    if (this.env.cloudMat) this.env.cloudMat.uniforms.cover.value = 0.58 - a * 0.45;
    this.grip = 1 - a * (snow ? 0.3 : 0.12);
    this.fogMul = 1 - a * 0.55;
    this.dark = a * (snow ? 0.15 : 0.35);
  }
}
