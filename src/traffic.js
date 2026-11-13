// AI traffic on the real Bishkek road graph: Intelligent-Driver-Model car following,
// traffic lights at the real OSM signal locations, marshrutkas stopping at bus stops,
// rush-hour jams on the big avenues.
import * as THREE from 'three';
import { buildVehicle, TRAFFIC_COLORS } from './carModels.js';
import { signalPoleGeometry, signalLampGeometry } from './props.js';
import { CLASS_SPEED, CHUNK, ck } from './data.js';

const TYPES = [
  ['sedan', 0.34], ['hatch', 0.14], ['suv', 0.15], ['oldsedan', 0.08], ['van', 0.13], ['taxi', 0.06], ['bus', 0.04], ['trolley', 0.04], ['truck', 0.04],
];
const CLASS_W = [3, 6, 4, 2.2, 0.6, 0.15, 0.02];
const JAM_NAMES = /Чүй|Чуй|Chuy|Жибек|Jibek|Манас|Manas|Ахунбаев|Akhunbaev|Абдрахманов|Abdrahmanov|Киев|Kyiv|Москва|Moscow|Токтогул|Toktogul|Айтматов|Aytmatov|Шабдан|Shabdan/;

export class Traffic {
  constructor(scene, map, world) {
    this.scene = scene; this.map = map; this.world = world;
    this.cars = [];
    this.target = 260;
    this.max = 520;
    this.rush = 1;
    this.time = 0;
    this.models = {};
    const paintMat = new THREE.MeshStandardMaterial({ vertexColors: true, metalness: 0.5, roughness: 0.35 });
    const detMat = new THREE.MeshStandardMaterial({ vertexColors: true, metalness: 0.3, roughness: 0.3 });
    const lightMat = new THREE.MeshBasicMaterial({ vertexColors: true });
    for (const [t] of TYPES) {
      const v = buildVehicle(t === 'taxi' ? 'sedan' : t === 'trolley' ? 'bus' : t, { taxi: t === 'taxi', trolley: t === 'trolley' });
      const cap = 200;
      const p = new THREE.InstancedMesh(v.paint, paintMat, cap);
      const d = new THREE.InstancedMesh(v.detail, detMat, cap);
      const l = new THREE.InstancedMesh(v.lights, lightMat, cap);
      for (const m of [p, d, l]) { m.count = 0; m.frustumCulled = false; m.instanceMatrix.setUsage(THREE.DynamicDrawUsage); scene.add(m); }
      p.castShadow = true; d.castShadow = true;
      p.setColorAt(0, new THREE.Color()); l.setColorAt(0, new THREE.Color());
      this.models[t] = { p, d, l, spec: v.spec, cap, n: 0 };
    }
    this._busStops();
    this._signals();
    this.M = new THREE.Matrix4(); this.Q = new THREE.Quaternion(); this.V = new THREE.Vector3(); this.S = new THREE.Vector3(1, 1, 1); this.Y = new THREE.Vector3(0, 1, 0);
    this.C = new THREE.Color();
    this.honks = [];
    this.night = 0;
  }

  _busStops() {
    this.stopsOn = new Map();
    for (const c of this.map.chunks.values()) for (const [x, z] of c.busstops) {
      const r = this.map.nearestRoad(x, z, 25, e => e.cls <= 4);
      if (!r) continue;
      const dir = r.lat >= 0 ? 0 : 1;
      const s = dir ? r.e.len - r.s : r.s;
      let a = this.stopsOn.get(r.e.id * 2 + dir); if (!a) this.stopsOn.set(r.e.id * 2 + dir, a = []);
      a.push(s);
    }
  }

  _signals() {
    const ctrls = this.map.controls;
    const n = ctrls.length;
    const pole = new THREE.InstancedMesh(signalPoleGeometry(), new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.6 }), n);
    const lampMat = new THREE.MeshBasicMaterial({ vertexColors: true });
    this.lamps = [0, 1, 2].map(i => new THREE.InstancedMesh(signalLampGeometry(i), lampMat, n));
    const o = {};
    const M = new THREE.Matrix4(), Q = new THREE.Quaternion(), V = new THREE.Vector3(), S = new THREE.Vector3(1, 1, 1), Y = new THREE.Vector3(0, 1, 0);
    ctrls.forEach((c, i) => {
      const e = c.e;
      const side = e.w / 2 + 0.9;
      this.map.sample(e, c.dir, c.stop, side, o);
      c.x = o.x; c.z = o.z;
      Q.setFromAxisAngle(Y, Math.atan2(-o.dx, -o.dz));
      M.compose(V.set(o.x, 0.12, o.z), Q, S);
      pole.setMatrixAt(i, M);
      for (const l of this.lamps) { l.setMatrixAt(i, M); l.setColorAt(i, new THREE.Color(0.1, 0.1, 0.1)); }
    });
    pole.castShadow = true;
    pole.computeBoundingSphere();
    this.scene.add(pole, ...this.lamps);
    for (const l of this.lamps) l.computeBoundingSphere();
    this.signalPole = pole;
    this._sigT = 0;
  }

  _updateSignalLamps() {
    const C = this.C, t = this.time;
    const ctrls = this.map.controls;
    const R = [new THREE.Color(3, 0.15, 0.08), new THREE.Color(0.18, 0.03, 0.02)];
    const Yc = [new THREE.Color(3, 1.6, 0.1), new THREE.Color(0.18, 0.12, 0.02)];
    const G = [new THREE.Color(0.1, 3, 0.8), new THREE.Color(0.02, 0.15, 0.06)];
    for (let i = 0; i < ctrls.length; i++) {
      const c = ctrls[i];
      const st = this.map.signalState(c.cluster, c.group, t);
      this.lamps[0].setColorAt(i, st === 'R' ? R[0] : R[1]);
      this.lamps[1].setColorAt(i, st === 'Y' ? Yc[0] : Yc[1]);
      this.lamps[2].setColorAt(i, st === 'G' ? G[0] : G[1]);
    }
    for (const l of this.lamps) l.instanceColor.needsUpdate = true;
    void C;
  }

  clear() { this.cars.length = 0; }

  _pickType() {
    let r = Math.random(), acc = 0;
    for (const [t, w] of TYPES) { acc += w; if (r < acc) return t; }
    return 'sedan';
  }

  _edgeWeight(e) {
    let w = CLASS_W[e.cls] * Math.min(e.len, 300);
    if (this.rush > 1 && e.name >= 0) {
      const n = this.map.names[e.name];
      if (JAM_NAMES.test(n[0]) || JAM_NAMES.test(n[1] || '')) w *= 1 + (this.rush - 1) * 2.5;
    }
    return w;
  }

  _spawn(px, pz, minD, maxD) {
    const C = CHUNK, R = Math.ceil(maxD / C);
    const pcx = Math.floor(px / C), pcz = Math.floor(pz / C);
    const cand = []; let tot = 0;
    for (let x = pcx - R; x <= pcx + R; x++) for (let z = pcz - R; z <= pcz + R; z++) {
      const c = this.map.chunks.get(ck(x, z)); if (!c) continue;
      for (const e of c.edges) {
        if (e.cls > 5) continue;
        const w = this._edgeWeight(e);
        if (w <= 0) continue;
        cand.push(e, w); tot += w;
      }
    }
    if (!tot) return false;
    for (let attempt = 0; attempt < 6; attempt++) {
      let r = Math.random() * tot, e = null;
      for (let i = 0; i < cand.length; i += 2) { r -= cand[i + 1]; if (r <= 0) { e = cand[i]; break; } }
      if (!e) e = cand[0];
      const dir = e.ow ? 0 : (Math.random() < 0.5 ? 0 : 1);
      const s = Math.random() * e.len;
      const o = {}; this.map.sample(e, dir, s, 0, o);
      const d = Math.hypot(o.x - px, o.z - pz);
      if (d < minD || d > maxD) continue;
      const lane = Math.floor(Math.random() * e.lanes);
      const de = e.id * 2 + dir;
      if (this.cars.some(c => c.de === de && Math.abs(c.s - s) < 12)) continue;
      const type = this._pickType();
      const m = this.models[type];
      if (m.n >= m.cap) continue;
      m.n++;
      const v0 = CLASS_SPEED[e.cls] * (0.85 + Math.random() * 0.3) * (type === 'bus' || type === 'trolley' || type === 'truck' ? 0.85 : 1);
      const car = {
        type, spec: m.spec, e, dir, de, s, lane: type === 'van' || type === 'bus' || type === 'trolley' ? e.lanes - 1 : lane, v: v0 * 0.7, v0,
        color: type === 'van' ? (Math.random() < 0.8 ? 0xf4f4f4 : 0xf2d020) : type === 'trolley' ? (Math.random() < 0.5 ? 0x2a6ab8 : 0xd8dce0) : type === 'bus' ? (Math.random() < 0.5 ? 0x2a7a3a : 0xe8e0d0) : type === 'taxi' ? (Math.random() < 0.5 ? 0xf2f2f2 : 0xf2c200) : TRAFFIC_COLORS[Math.floor(Math.random() * TRAFFIC_COLORS.length)],
        x: o.x, z: o.z, h: Math.atan2(o.dx, o.dz), ex: 0, ez: 0, next: -1, wait: 0, bump: 0, brake: false, stopT: 0, servedStop: -1,
        aggr: 0.8 + Math.random() * 0.5,
      };
      car.next = this._chooseNext(car);
      const o2 = {}; this.map.sample(e, dir, s, this.map.laneOffset(e, car.lane), o2);
      car.x = o2.x; car.z = o2.z;
      this.cars.push(car);
      return true;
    }
    return false;
  }

  _endNode(de) { const e = this.map.edges[de >> 1]; return (de & 1) ? e.na : e.nb; }

  _chooseNext(car) {
    const node = this._endNode(car.de);
    const o = {}; this.map.sample(car.e, car.dir, car.e.len - 0.5, 0, o);
    let tot = 0; const opts = [];
    for (const de of node.out) {
      if ((de >> 1) === car.e.id) continue;
      const e = this.map.edges[de >> 1];
      if (e.cls > 5) continue;
      const o2 = {}; this.map.sample(e, de & 1, 0.5, 0, o2);
      const cos = o.dx * o2.dx + o.dz * o2.dz;
      let w = (cos > 0.7 ? 4 : cos > -0.3 ? 1 : 0.15) * (CLASS_W[e.cls] + 0.2);
      if (e.cls === 5) w *= 0.2;
      if (car.type === 'bus' || car.type === 'trolley' || car.type === 'truck') w *= e.cls <= 2 ? 3 : 0.2;
      opts.push(de, w); tot += w;
    }
    if (!tot) return car.e.ow ? -1 : (car.de ^ 1);
    let r = Math.random() * tot;
    for (let i = 0; i < opts.length; i += 2) { r -= opts[i + 1]; if (r <= 0) return opts[i]; }
    return opts[0];
  }

  _remove(i) {
    const c = this.cars[i];
    this.models[c.type].n--;
    this.cars[i] = this.cars[this.cars.length - 1];
    this.cars.pop();
  }

  update(dt, player, peds, extraObstacles) {
    this.time += dt;
    const px = player.x, pz = player.z;
    const target = Math.min(this.max, Math.round(this.target * this.rush));
    // spawn / despawn
    let spawned = 0;
    while (this.cars.length < target && spawned < (this.cars.length < target * 0.5 ? 40 : 3)) {
      if (!this._spawn(px, pz, this.cars.length < 20 ? 25 : 140, 640)) break;
      spawned++;
    }
    for (let i = this.cars.length - 1; i >= 0; i--) {
      const c = this.cars[i];
      if (Math.abs(c.x - px) > 760 || Math.abs(c.z - pz) > 760) this._remove(i);
    }
    // bucket by directed edge
    const buckets = new Map();
    for (const c of this.cars) { let a = buckets.get(c.de); if (!a) buckets.set(c.de, a = []); a.push(c); }
    for (const a of buckets.values()) a.sort((p, q) => p.s - q.s);
    const pfx = Math.sin(player.h), pfz = Math.cos(player.h);
    const pv = player.speed;
    const pL = player.spec.L;
    this.honks.length = 0;
    const map = this.map;
    for (const c of this.cars) {
      const e = c.e, L = e.len, myL = c.spec.L;
      // ---- leader search
      let gap = 1e9, lv = 0;
      const arr = buckets.get(c.de);
      for (let k = 0; k < arr.length; k++) {
        const o = arr[k];
        if (o === c || o.s <= c.s || o.lane !== c.lane) continue;
        const g = o.s - c.s - (o.spec.L + myL) / 2;
        if (g < gap) { gap = g; lv = o.v; }
        break;
      }
      if (gap > 200 && c.next >= 0) {
        const a2 = buckets.get(c.next);
        if (a2 && a2.length) {
          // nearest car on next edge (any lane, conservative)
          const o = a2[0];
          const g = (L - c.s) + o.s - (o.spec.L + myL) / 2;
          if (g < gap) { gap = g; lv = o.v; }
        }
      }
      // ---- traffic lights
      c.redAhead = false;
      for (const sg of e.signals) {
        if (sg.dir !== c.dir) continue;
        const dist = sg.stop - c.s;
        if (dist < -0.5 || dist > 120) continue;
        const st = map.signalState(sg.cluster, sg.group, this.time);
        if (st === 'R' || (st === 'Y' && dist > c.v * c.v / 7 + 2)) {
          const g = dist - myL / 2;
          if (g < gap) { gap = Math.max(0.01, g); lv = 0; c.redAhead = true; }
        }
      }
      // ---- marshrutka / bus stops
      if ((c.type === 'van' || c.type === 'bus' || c.type === 'trolley') && c.stopT <= 0) {
        const st = this.stopsOn.get(c.de);
        if (st) for (const s of st) {
          const dist = s - c.s;
          if (dist > 0 && dist < 60 && c.servedStop !== c.de * 10000 + Math.round(s)) {
            const g = dist - myL / 2 + 1.5;
            if (g < gap) { gap = Math.max(0.01, g); lv = 0; }
            if (dist < myL / 2 + 1.5 && c.v < 0.5) { c.stopT = 6 + Math.random() * 8; c.servedStop = c.de * 10000 + Math.round(s); }
          }
        }
      }
      if (c.stopT > 0) { c.stopT -= dt; gap = 0.01; lv = 0; }
      // ---- player & pedestrians as obstacles
      const hx = Math.sin(c.h), hz = Math.cos(c.h);
      {
        const rx = px - c.x, rz = pz - c.z;
        const fwd = rx * hx + rz * hz, lat = Math.abs(rx * hz - rz * hx);
        if (fwd > 0 && fwd < 45 && lat < 2.2) {
          const g = fwd - (pL + myL) / 2;
          if (g < gap) { gap = Math.max(0.01, g); lv = Math.max(0, pv * (pfx * hx + pfz * hz)); c.playerBlock = true; }
        } else c.playerBlock = false;
      }
      if (peds) {
        for (const p of peds.crossers) {
          const rx = p.x - c.x, rz = p.z - c.z;
          const fwd = rx * hx + rz * hz, lat = Math.abs(rx * hz - rz * hx);
          if (fwd > 0 && fwd < 30 && lat < 2.6) { const g = fwd - myL / 2 - 1.5; if (g < gap) { gap = Math.max(0.01, g); lv = 0; } }
        }
      }
      if (extraObstacles) for (const ob of extraObstacles) {
        const rx = ob.x - c.x, rz = ob.z - c.z;
        const fwd = rx * hx + rz * hz, lat = Math.abs(rx * hz - rz * hx);
        if (fwd > 0 && fwd < 40 && lat < ob.r) { const g = fwd - myL / 2 - ob.r; if (g < gap) { gap = Math.max(0.01, g); lv = 0; } }
      }
      // ---- IDM
      let v0 = c.v0;
      // slow down for sharp turn at the end of the edge
      const toEnd = L - c.s;
      if (toEnd < 25 && c.next >= 0) {
        const ne = map.edges[c.next >> 1];
        const o1 = {}, o2 = {};
        map.sample(e, c.dir, L - 0.5, 0, o1); map.sample(ne, c.next & 1, 0.5, 0, o2);
        const cos = o1.dx * o2.dx + o1.dz * o2.dz;
        if (cos < 0.8) v0 = Math.min(v0, 4 + 8 * Math.max(0, cos + 0.2));
      }
      if (c.bump > 0) { c.bump -= dt; v0 = 0; }
      if (c.wrecked) { c.v = 0; c.brake = false; continue; }
      const amax = 1.6 * c.aggr, bcomf = 2.5, s0 = 2.2, T = 1.3 / c.aggr;
      const dv = c.v - lv;
      const sStar = s0 + Math.max(0, c.v * T + c.v * dv / (2 * Math.sqrt(amax * bcomf)));
      let acc = amax * (1 - Math.pow(c.v / Math.max(0.1, v0), 4) - (gap < 1e8 ? Math.pow(sStar / Math.max(0.1, gap), 2) : 0));
      acc = Math.max(-9, acc);
      c.brake = acc < -0.6 || c.v < 0.3;
      c.v = Math.max(0, c.v + acc * dt);
      if (gap < 0.3 && c.v > 0) c.v = Math.min(c.v, 0.2);
      c.s += c.v * dt;
      // stuck behind player -> honk
      if (c.playerBlock && c.v < 0.3 && player.speed < 1) { c.wait += dt; if (c.wait > 3.5 && Math.random() < dt * 0.6) this.honks.push(c); }
      else c.wait = Math.max(0, c.wait - dt);
      // ---- edge transitions
      while (c.s >= c.e.len) {
        if (c.next < 0) { c.dead = true; break; }
        c.s -= c.e.len;
        c.de = c.next; c.e = map.edges[c.de >> 1]; c.dir = c.de & 1;
        c.lane = c.type === 'van' || c.type === 'bus' || c.type === 'trolley' ? c.e.lanes - 1 : Math.min(c.e.lanes - 1, Math.floor(Math.random() * c.e.lanes));
        c.v0 = CLASS_SPEED[c.e.cls] * (0.85 + Math.random() * 0.3) * (c.type === 'bus' || c.type === 'trolley' || c.type === 'truck' ? 0.85 : 1);
        c.next = this._chooseNext(c);
        c.transit = true;
      }
      // ---- visual position (with smoothed error so turns look curved)
      const o = this._o || (this._o = {});
      map.sample(c.e, c.dir, Math.min(c.s, c.e.len), map.laneOffset(c.e, c.lane), o);
      if (c.transit) { c.ex = c.x - o.x; c.ez = c.z - o.z; c.transit = false; if (Math.hypot(c.ex, c.ez) > 12) { c.ex = c.ez = 0; } }
      const k = Math.exp(-dt * 2.5);
      c.ex *= k; c.ez *= k;
      const nx = o.x + c.ex, nz = o.z + c.ez;
      const mdx = nx - c.x, mdz = nz - c.z;
      if (mdx * mdx + mdz * mdz > 1e-4) {
        const th = Math.atan2(mdx, mdz);
        let d = th - c.h; d = Math.atan2(Math.sin(d), Math.cos(d));
        c.h += d * Math.min(1, dt * 10);
      }
      c.x = nx; c.z = nz;
    }
    for (let i = this.cars.length - 1; i >= 0; i--) if (this.cars[i].dead) this._remove(i);
    // signals lamps
    this._sigT -= dt;
    if (this._sigT <= 0) { this._sigT = 0.25; this._updateSignalLamps(); }
    this._render();
  }

  _render() {
    const { M, Q, V, S, Y, C } = this;
    for (const t in this.models) this.models[t]._i = 0;
    const lb = this.night > 0.5 ? 1.6 : 0.45;
    for (const c of this.cars) {
      const m = this.models[c.type];
      const i = m._i++;
      if (c.wrecked) { this._E = this._E || new THREE.Euler(); this._E.set(0, c.h + c.wreckYaw, c.wreckRoll, 'YXZ'); Q.setFromEuler(this._E); }
      else Q.setFromAxisAngle(Y, c.h);
      M.compose(V.set(c.x, 0.03, c.z), Q, S);
      m.p.setMatrixAt(i, M); m.d.setMatrixAt(i, M); m.l.setMatrixAt(i, M);
      m.p.setColorAt(i, C.setHex(c.color));
      if (c.wrecked) C.multiplyScalar(0.45); else if (c.hp < 100) C.multiplyScalar(0.75 + 0.25 * c.hp / 100);
      if (c.wrecked || c.hp < 100) m.p.setColorAt(i, C);
      const hz = c.wrecked && (performance.now() % 1000) < 500;
      const b = c.wrecked ? (hz ? 1.6 : 0.1) : c.brake ? Math.max(lb, 1.4) : lb;
      m.l.setColorAt(i, C.setRGB(b, b, b));
    }
    for (const t in this.models) {
      const m = this.models[t];
      m.p.count = m.d.count = m.l.count = m._i;
      m.p.instanceMatrix.needsUpdate = m.d.instanceMatrix.needsUpdate = m.l.instanceMatrix.needsUpdate = true;
      if (m.p.instanceColor) m.p.instanceColor.needsUpdate = true;
      if (m.l.instanceColor) m.l.instanceColor.needsUpdate = true;
    }
  }

  // player <-> AI car collisions
  collidePlayer(pl, onCrash) {
    const L = pl.spec.L;
    const pc = [L * 0.3, 0, -L * 0.3].map(o => [pl.x + Math.sin(pl.h) * o, pl.z + Math.cos(pl.h) * o]);
    const pr = pl.radius;
    for (const c of this.cars) {
      const dx0 = c.x - pl.x, dz0 = c.z - pl.z;
      if (dx0 * dx0 + dz0 * dz0 > 120) continue;
      const cl = c.spec.L, cr = c.spec.W / 2;
      const n = Math.max(2, Math.round(cl / 2.2));
      for (let k = 0; k < n; k++) {
        const off = (k / (n - 1) - 0.5) * (cl - cr * 2);
        const cx = c.x + Math.sin(c.h) * off, cz = c.z + Math.cos(c.h) * off;
        for (const [x, z] of pc) {
          const dx = x - cx, dz = z - cz, d = Math.hypot(dx, dz), R = pr + cr;
          if (d < R && d > 1e-4) {
            const nx = dx / d, nz = dz / d, push = R - d;
            pl.x += nx * push; pl.z += nz * push;
            const relx = pl.vx - Math.sin(c.h) * c.v, relz = pl.vz - Math.cos(c.h) * c.v;
            const vn = relx * nx + relz * nz;
            if (vn < 0) {
              pl.vx -= nx * vn * 1.25; pl.vz -= nz * vn * 1.25;
              if (-vn > 1.5) {
                c.hp = (c.hp ?? 100) - (-vn) * 9;
                const wreck = c.hp <= 0 && !c.wrecked;
                if (wreck) { c.wrecked = true; c.wreckRoll = (Math.random() - 0.5) * 0.12; c.wreckYaw = (Math.random() - 0.5) * 0.6; }
                onCrash && onCrash(-vn, 'car', c, cx + nx * cr, cz + nz * cr, -nx, -nz, wreck);
                pl.damage = Math.min(100, pl.damage + (-vn) * 0.6);
              }
              c.bump = c.wrecked ? 1e9 : 2.5 + Math.random() * 2; c.v *= 0.3;
              c.wait = 4;
            }
          }
        }
      }
    }
  }

  // queue statistic for the HUD (cars nearly stopped near the player)
  jamLevel(px, pz) {
    let n = 0, s = 0;
    for (const c of this.cars) {
      if (Math.abs(c.x - px) > 250 || Math.abs(c.z - pz) > 250) continue;
      n++; if (c.v < 2) s++;
    }
    return n ? s / n : 0;
  }
}
