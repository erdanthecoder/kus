// Pedestrians: sidewalk walkers, zebra-crossing crossers, people waiting at bus stops,
// crowds on Ala-Too Square, Osh Bazaar and the airport. Animated with instanced body parts.
import * as THREE from 'three';
import { CHUNK, ck } from './data.js';
import { colorize, merge } from './props.js';

const SHIRTS = [0x1c1c1e, 0x2a2f3a, 0xe8e8e8, 0x6a1a1a, 0x24476b, 0x3b5d3a, 0x7a6a5a, 0xc0c0c0, 0x8a2a4a, 0xd8b04a, 0x1e3a5a, 0x5a5a5a, 0xa04030];
const PANTS = [0x1a1a1c, 0x22283a, 0x2c3e5a, 0x3a3a3a, 0x5a4a3a, 0x1a1a1c, 0x6a6a72];
const SKIN = [0xd8b090, 0xc89a78, 0xe0bea0, 0xb88a68, 0xd0a482];
const HAIR = [0x1a1410, 0x2a2018, 0x0e0c0a, 0x4a3828, 0x6a6a6a];

export const PLAZAS = [
  { name: 'Ala-Too Square', x: 30, z: -10, r: 95, n: 55 },
  { name: 'Victory Square', x: 1032, z: -325, r: 45, n: 14 },
  { name: 'Osh Bazaar', x: -2760, z: 300, r: 90, n: 50 },
  { name: 'Erkindik Boulevard', x: 230, z: 320, r: 60, n: 18 },
  { name: 'TSUM', x: 905, z: 0, r: 50, n: 22 },
];

export class Pedestrians {
  constructor(scene, map) {
    this.scene = scene; this.map = map;
    this.N = 520;
    this.list = [];
    this.crossers = [];
    this.target = 240;
    const mk = (geo, mat) => { const m = new THREE.InstancedMesh(geo, mat, this.N); m.count = 0; m.frustumCulled = false; m.castShadow = true; m.instanceMatrix.setUsage(THREE.DynamicDrawUsage); scene.add(m); return m; };
    const mat = new THREE.MeshStandardMaterial({ roughness: 0.85 });
    const white = 0xffffff;
    this.torso = mk(colorize(new THREE.BoxGeometry(0.42, 0.62, 0.24).translate(0, 1.22, 0), white), mat);
    this.hips = mk(colorize(new THREE.BoxGeometry(0.38, 0.18, 0.22).translate(0, 0.9, 0), white), mat);
    this.head = mk(colorize(new THREE.SphereGeometry(0.115, 10, 8).scale(0.95, 1.1, 1).translate(0, 1.68, 0), white), mat);
    this.hair = mk(colorize(new THREE.SphereGeometry(0.122, 10, 6, 0, Math.PI * 2, 0, Math.PI * 0.55).translate(0, 1.71, -0.01), white), mat);
    // limbs pivot at the top
    this.legL = mk(colorize(new THREE.BoxGeometry(0.15, 0.88, 0.16).translate(0, -0.44, 0), white), mat);
    this.legR = mk(colorize(new THREE.BoxGeometry(0.15, 0.88, 0.16).translate(0, -0.44, 0), white), mat);
    this.armL = mk(colorize(new THREE.BoxGeometry(0.1, 0.62, 0.11).translate(0, -0.31, 0), white), mat);
    this.armR = mk(colorize(new THREE.BoxGeometry(0.1, 0.62, 0.11).translate(0, -0.31, 0), white), mat);
    // Kyrgyz ak-kalpak (white felt hat) worn by some older men
    this.kalpak = mk(merge([
      colorize(new THREE.CylinderGeometry(0.06, 0.13, 0.26, 8).translate(0, 1.88, 0), 0xf2efe6),
      colorize(new THREE.CylinderGeometry(0.135, 0.135, 0.05, 10).translate(0, 1.76, 0), 0x111111),
    ]), new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.9 }));
    // luggage for airport travellers
    this.bag = mk(colorize(new THREE.BoxGeometry(0.38, 0.55, 0.22).translate(0, 0.32, 0), white), mat);
    this.M = new THREE.Matrix4(); this.M2 = new THREE.Matrix4(); this.Q = new THREE.Quaternion(); this.V = new THREE.Vector3(); this.S = new THREE.Vector3(1, 1, 1);
    this.E = new THREE.Euler(); this.C = new THREE.Color();
    this.extraZones = [];
    this._crossT = 0;
  }

  addZone(z) { this.extraZones.push(z); }

  _style(p) {
    const r = Math.random;
    p.shirt = SHIRTS[Math.floor(r() * SHIRTS.length)];
    p.pants = PANTS[Math.floor(r() * PANTS.length)];
    p.skin = SKIN[Math.floor(r() * SKIN.length)];
    p.hairC = HAIR[Math.floor(r() * HAIR.length)];
    p.kalpak = r() < 0.07;
    p.scale = 0.9 + r() * 0.17;
    p.speed = 1.05 + r() * 0.55;
    p.phase = r() * 10;
    if (r() < 0.12) p.pants = p.shirt; // dresses / long coats
  }

  _spawnWalker(px, pz) {
    const C = CHUNK, R = 1;
    const pcx = Math.floor(px / C), pcz = Math.floor(pz / C);
    const cand = [];
    for (let x = pcx - R; x <= pcx + R; x++) for (let z = pcz - R; z <= pcz + R; z++) {
      const c = this.map.chunks.get(ck(x, z)); if (!c) continue;
      for (const e of c.edges) if (e.cls >= 1 && e.cls <= 4 && e.w >= 5) cand.push(e);
    }
    if (!cand.length) return null;
    for (let t = 0; t < 5; t++) {
      const e = cand[Math.floor(Math.random() * cand.length)];
      const side = Math.random() < 0.5 ? -1 : 1;
      const dir = Math.random() < 0.5 ? 0 : 1;
      const s = Math.random() * e.len;
      const o = {}; this.map.sample(e, dir, s, (e.w / 2 + 1.4) * side, o);
      const d = Math.hypot(o.x - px, o.z - pz);
      if (d < 30 || d > 330) continue;
      if (this.map.insideBuilding(o.x, o.z, 0.3)) continue;
      const p = { mode: 'walk', e, dir, s, side, x: o.x, z: o.z, h: Math.atan2(o.dx, o.dz), ex: 0, ez: 0, dodge: 0 };
      this._style(p);
      return p;
    }
    return null;
  }

  _spawnPlaza(Z) {
    for (let t = 0; t < 8; t++) {
      const a = Math.random() * 6.28, r = Math.sqrt(Math.random()) * Z.r;
      const x = Z.x + Math.cos(a) * r, z = Z.z + Math.sin(a) * r;
      if (this.map.insideBuilding(x, z, 0.5)) continue;
      const nr = this.map.nearestRoad(x, z, 8);
      if (nr && nr.dist < nr.e.w / 2 + 0.5) continue;
      const p = { mode: 'plaza', zone: Z, x, z, h: Math.random() * 6.28, tx: x, tz: z, idle: Math.random() * 4, ex: 0, ez: 0, dodge: 0, bag: !!Z.bags && Math.random() < 0.6 };
      this._style(p);
      return p;
    }
    return null;
  }

  _spawnCrosser(px, pz) {
    const C = CHUNK;
    const pcx = Math.floor(px / C), pcz = Math.floor(pz / C);
    const cand = [];
    for (let x = pcx - 1; x <= pcx + 1; x++) for (let z = pcz - 1; z <= pcz + 1; z++) {
      const c = this.map.chunks.get(ck(x, z)); if (!c) continue;
      for (const k of c.crossings) { const d = Math.hypot(k[0] - px, k[1] - pz); if (d > 40 && d < 220) cand.push(k); }
    }
    if (!cand.length) return null;
    const k = cand[Math.floor(Math.random() * cand.length)];
    const r = this.map.nearestRoad(k[0], k[1], 4);
    if (!r || r.e.cls > 4 || r.e.w < 5) return null;
    const side = Math.random() < 0.5 ? 1 : -1;
    const half = r.e.w / 2 + 1.2;
    const nx = -r.dz, nz = r.dx;
    const p = { mode: 'cross', x: r.x + nx * half * side, z: r.z + nz * half * side, tx: r.x - nx * half * side, tz: r.z - nz * half * side, h: 0, ex: 0, ez: 0, dodge: 0, wait: 1 + Math.random() * 2 };
    p.h = Math.atan2(p.tx - p.x, p.tz - p.z);
    this._style(p);
    p.speed = 1.4;
    return p;
  }

  update(dt, player, enabled = true) {
    const px = player.x, pz = player.z;
    const L = this.list;
    if (!enabled) { L.length = 0; this.crossers.length = 0; this._render(dt); return; }
    // plazas
    const zones = PLAZAS.concat(this.extraZones);
    for (const Z of zones) {
      const d = Math.hypot(Z.x - px, Z.z - pz);
      Z.active = d < 420;
      if (!Z.active) continue;
      Z.count = Z.count || 0;
      let tries = 3;
      while (Z.count < Z.n && tries-- > 0 && L.length < this.N - 5) { const p = this._spawnPlaza(Z); if (p) { L.push(p); Z.count++; } }
    }
    let walkers = 0;
    for (const p of L) if (p.mode === 'walk') walkers++;
    let tries = walkers < this.target * 0.5 ? 30 : 3;
    while (walkers < this.target && tries-- > 0 && L.length < this.N - 30) { const p = this._spawnWalker(px, pz); if (p) { L.push(p); walkers++; } }
    this._crossT -= dt;
    if (this._crossT <= 0 && L.length < this.N - 2) { this._crossT = 2 + Math.random() * 3; const p = this._spawnCrosser(px, pz); if (p) L.push(p); }
    // ---- simulate
    const pfx = Math.sin(player.h), pfz = Math.cos(player.h), psp = player.speed;
    this.crossers.length = 0;
    const o = {};
    for (let i = L.length - 1; i >= 0; i--) {
      const p = L[i];
      const far = Math.abs(p.x - px) > 380 || Math.abs(p.z - pz) > 380;
      if (far && p.mode !== 'plaza') { L[i] = L[L.length - 1]; L.pop(); continue; }
      if (p.mode === 'plaza' && !p.zone.active) { p.zone.count--; L[i] = L[L.length - 1]; L.pop(); continue; }
      let moving = false;
      if (p.mode === 'walk') {
        p.s += p.speed * dt;
        if (p.s > p.e.len) {
          // continue on a connected street
          const node = p.dir ? p.e.na : p.e.nb;
          const opts = [];
          for (const de of node.out) { const e = this.map.edges[de >> 1]; if (e !== p.e && e.cls >= 1 && e.cls <= 4 && e.w >= 5) opts.push(de); }
          if (!node.out.length || !opts.length) { p.dir ^= 1; p.s = 0; p.side = -p.side; }
          else { const de = opts[Math.floor(Math.random() * opts.length)]; p.e = this.map.edges[de >> 1]; p.dir = de & 1; p.s = 0; p.trans = true; }
        }
        this.map.sample(p.e, p.dir, p.s, (p.e.w / 2 + 1.4) * p.side, o);
        if (p.trans) { p.ex = p.x - o.x - p.ex * 0; p.ez = p.z - o.z; p.trans = false; if (Math.hypot(p.ex, p.ez) > 25) p.ex = p.ez = 0; }
        p.ex *= Math.exp(-dt * 0.8); p.ez *= Math.exp(-dt * 0.8);
        const nx = o.x + p.ex, nz = o.z + p.ez;
        p.h = lerpAngle(p.h, Math.atan2(nx - p.x, nz - p.z), dt * 6);
        p.x = nx; p.z = nz; moving = true;
      } else if (p.mode === 'plaza') {
        if (p.idle > 0) { p.idle -= dt; }
        else {
          const dx = p.tx - p.x, dz = p.tz - p.z, d = Math.hypot(dx, dz);
          if (d < 0.5) {
            p.idle = 1 + Math.random() * 6;
            const Z = p.zone;
            for (let t = 0; t < 6; t++) {
              const a = Math.random() * 6.28, r = Math.sqrt(Math.random()) * Z.r;
              const x = Z.x + Math.cos(a) * r, z = Z.z + Math.sin(a) * r;
              if (!this.map.insideBuilding(x, z, 0.6)) { const nr = this.map.nearestRoad(x, z, 8); if (!nr || nr.dist > nr.e.w / 2 + 0.5) { p.tx = x; p.tz = z; break; } }
            }
          } else {
            const st = Math.min(d, p.speed * 0.85 * dt);
            p.x += dx / d * st; p.z += dz / d * st;
            p.h = lerpAngle(p.h, Math.atan2(dx, dz), dt * 5); moving = true;
          }
        }
      } else if (p.mode === 'cross') {
        if (p.wait > 0) { p.wait -= dt; }
        else {
          const dx = p.tx - p.x, dz = p.tz - p.z, d = Math.hypot(dx, dz);
          if (d < 0.3) { L[i] = L[L.length - 1]; L.pop(); continue; }
          const st = Math.min(d, p.speed * dt);
          p.x += dx / d * st; p.z += dz / d * st; moving = true;
          p.h = lerpAngle(p.h, Math.atan2(dx, dz), dt * 6);
          this.crossers.push(p);
        }
      }
      // ---- dodge the player's car
      const rx = p.x - px, rz = p.z - pz;
      const fwd = rx * pfx + rz * pfz, lat = rx * pfz - rz * pfx;
      if (psp > 2.5 && fwd > -1 && fwd < 4 + psp * 0.45 && Math.abs(lat) < 2.4) {
        if (p.dodge <= 0) { p.dodge = 0.9; p.dside = lat >= 0 ? 1 : -1; p.scream = true; }
      }
      if (p.dodge > 0) {
        p.dodge -= dt;
        const k = 5.5 * dt;
        p.x += pfz * p.dside * k; p.z += -pfx * p.dside * k;
        if (p.mode === 'walk') { p.ex += pfz * p.dside * k; p.ez += -pfx * p.dside * k; }
        moving = true;
      }
      // hard separation: never let the car pass through a person
      const dd = Math.hypot(rx, rz);
      if (dd < 2.2 && dd > 0.01) {
        const push = (2.2 - dd);
        p.x += rx / dd * push; p.z += rz / dd * push;
        if (p.mode === 'walk') { p.ex += rx / dd * push; p.ez += rz / dd * push; }
      }
      p.moving = moving;
      p.phase += dt * (moving ? (p.dodge > 0 ? 14 : p.speed * 5.2) : 0);
    }
    this._render(dt);
  }

  _render() {
    const { M, M2, Q, V, S, E, C } = this;
    const L = this.list;
    const n = Math.min(L.length, this.N);
    let kc = 0, bc = 0;
    for (let i = 0; i < n; i++) {
      const p = L[i];
      const sw = p.moving ? Math.sin(p.phase) : 0;
      const bob = p.moving ? Math.abs(Math.cos(p.phase)) * 0.04 : 0;
      const sc = p.scale;
      Q.setFromAxisAngle(V.set(0, 1, 0), p.h);
      M.compose(V.set(p.x, 0.15 + bob, p.z), Q, S.set(sc, sc, sc));
      this.torso.setMatrixAt(i, M); this.hips.setMatrixAt(i, M); this.head.setMatrixAt(i, M); this.hair.setMatrixAt(i, M);
      this.torso.setColorAt(i, C.setHex(p.shirt)); this.hips.setColorAt(i, C.setHex(p.pants));
      this.head.setColorAt(i, C.setHex(p.skin)); this.hair.setColorAt(i, C.setHex(p.hairC));
      const legA = sw * 0.55, armA = -sw * 0.5;
      const dodgeArms = p.dodge > 0 ? 2.6 : 0;
      limb(this.legL, i, M, M2, E, 0.1, 0.92, 0, legA, C.setHex(p.pants));
      limb(this.legR, i, M, M2, E, -0.1, 0.92, 0, -legA, C);
      limb(this.armL, i, M, M2, E, 0.26, 1.5, 0, armA - dodgeArms, C.setHex(p.shirt));
      limb(this.armR, i, M, M2, E, -0.26, 1.5, 0, p.wave ? -2.7 + Math.sin(performance.now() * 0.008) * 0.35 : -armA - dodgeArms, C);
      if (p.kalpak) { this.kalpak.setMatrixAt(kc++, M); }
      if (p.bag) {
        M2.makeTranslation(-0.42, 0, -0.1); M2.premultiply(M);
        this.bag.setMatrixAt(bc, M2); this.bag.setColorAt(bc, C.setHex(p.shirt === 0x1c1c1e ? 0x8a1a1a : 0x1c2c3c)); bc++;
      }
    }
    for (const m of [this.torso, this.hips, this.head, this.hair, this.legL, this.legR, this.armL, this.armR]) {
      m.count = n; m.instanceMatrix.needsUpdate = true; if (m.instanceColor) m.instanceColor.needsUpdate = true;
    }
    this.kalpak.count = kc; this.kalpak.instanceMatrix.needsUpdate = true;
    this.bag.count = bc; this.bag.instanceMatrix.needsUpdate = true; if (this.bag.instanceColor) this.bag.instanceColor.needsUpdate = true;
  }
}

function limb(mesh, i, M, M2, E, x, y, z, ang, col) {
  M2.makeRotationX(ang); M2.setPosition(x, y, z);
  M2.premultiply(M);
  mesh.setMatrixAt(i, M2);
  mesh.setColorAt(i, col);
}

export function lerpAngle(a, b, t) {
  let d = b - a; d = Math.atan2(Math.sin(d), Math.cos(d));
  return a + d * Math.min(1, t);
}
