// Decodes the pre-baked OpenStreetMap extract of Bishkek (see tools/convert.py)
// and builds the road graph + spatial indices used by every other system.
//
// Coordinate system: metres, origin = Ala-Too Square, +x = east, +z = south, y = up.

export const CHUNK = 400;           // render chunk size (m)
export const LANE_W = 3.3;

export const ROAD_CLASS_NAMES = ['Highway', 'Avenue', 'Main street', 'Street', 'Street', 'Living street', 'Service road'];
// typical free-flow speed for AI by class (m/s) – real Bishkek city limit is 60 km/h
export const CLASS_SPEED = [80 / 3.6, 60 / 3.6, 55 / 3.6, 48 / 3.6, 38 / 3.6, 22 / 3.6, 18 / 3.6];

export function ck(cx, cz) { return cx * 100000 + cz; }

export class MapData {
  constructor(D) {
    this.raw = D;
    this.origin = D.origin;
    this.names = D.names;
    const P = this.P = new Float32Array(D.pts.length);
    for (let i = 0; i < D.pts.length; i++) P[i] = D.pts[i] * 0.1;
    this._buildGraph(D.roads);
    this._buildRoadGrid();
    this._indexChunks(D);
    this._buildSignals(D.signals);
    this.pois = D.pois.map(p => ({ name: p[0], en: p[1], x: p[2] * 0.1, z: p[3] * 0.1, kind: p[4] }));
  }

  roadName(id) {
    if (id < 0) return null;
    const n = this.names[id];
    return { local: n[0], en: n[1] || n[0] };
  }

  // ---------------------------------------------------------------- graph
  _buildGraph(roads) {
    const use = new Map();
    for (const r of roads) {
      const ids = r[5];
      for (let i = 0; i < ids.length; i++) {
        const k = ids[i];
        use.set(k, (use.get(k) || 0) + ((i === 0 || i === ids.length - 1) ? 2 : 1));
      }
    }
    const nodes = this.nodes = new Map();
    const getNode = (pi) => {
      let n = nodes.get(pi);
      if (!n) {
        n = { id: pi, x: this.P[pi * 2], z: this.P[pi * 2 + 1], out: [], inc: [], deg: 0, signal: null, maxW: 0, top: 0 };
        nodes.set(pi, n);
      }
      return n;
    };
    const edges = this.edges = [];
    for (const r of roads) {
      const [cls, w, lanes, ow, nm, ids, bridge] = r;
      let start = 0;
      for (let i = 1; i < ids.length; i++) {
        if (use.get(ids[i]) > 1 || i === ids.length - 1) {
          const seg = ids.slice(start, i + 1);
          if (seg.length >= 2) this._addEdge(seg, cls, w, lanes, ow, nm, getNode);
          start = i;
        }
      }
    }
    // node properties
    for (const e of edges) {
      for (const n of [e.na, e.nb]) {
        n.deg++;
        if (e.w > n.maxW) n.maxW = e.w;
        n.top = Math.max(n.top, 6 - e.cls);
      }
    }
    // directed edges: id = e*2 (+0 forward a->b, +1 backward b->a)
    for (const e of edges) {
      e.na.out.push(e.id * 2); e.nb.inc.push(e.id * 2);
      if (!e.ow) { e.nb.out.push(e.id * 2 + 1); e.na.inc.push(e.id * 2 + 1); }
    }
  }

  _addEdge(ids, cls, w, lanes, ow, nm, getNode) {
    const n = ids.length;
    const pts = new Float32Array(n * 2);
    const cum = new Float32Array(n);
    let L = 0;
    for (let i = 0; i < n; i++) {
      pts[i * 2] = this.P[ids[i] * 2]; pts[i * 2 + 1] = this.P[ids[i] * 2 + 1];
      if (i > 0) L += Math.hypot(pts[i * 2] - pts[i * 2 - 2], pts[i * 2 + 1] - pts[i * 2 - 1]);
      cum[i] = L;
    }
    if (L < 0.5) return;
    const e = {
      id: this.edges.length, ids, pts, cum, len: L, cls, w, lanes, ow, name: nm,
      na: getNode(ids[0]), nb: getNode(ids[n - 1]), signals: []
    };
    this.edges.push(e);
  }

  // position along an edge. dir: 0 forward, 1 backward. offset: lateral (+ = right side of travel)
  sample(e, dir, s, offset, out) {
    const L = e.len;
    let t = dir ? L - s : s;
    if (t < 0) t = 0; else if (t > L) t = L;
    const cum = e.cum, pts = e.pts;
    // binary search segment
    let lo = 0, hi = cum.length - 1;
    while (hi - lo > 1) { const m = (lo + hi) >> 1; if (cum[m] <= t) lo = m; else hi = m; }
    const segL = cum[hi] - cum[lo] || 1e-6;
    const f = (t - cum[lo]) / segL;
    const ax = pts[lo * 2], az = pts[lo * 2 + 1], bx = pts[hi * 2], bz = pts[hi * 2 + 1];
    let dx = (bx - ax) / segL, dz = (bz - az) / segL;
    if (dir) { dx = -dx; dz = -dz; }
    out.x = ax + (bx - ax) * f - dz * offset;
    out.z = az + (bz - az) * f + dx * offset;
    out.dx = dx; out.dz = dz;
    return out;
  }

  // lateral offset of lane centre (right-hand traffic)
  laneOffset(e, lane) {
    if (e.ow) return -e.w / 2 + LANE_W * (lane + 0.5);
    return LANE_W * (lane + 0.5) - 0.15;
  }

  // ---------------------------------------------------------------- spatial grid of road segments
  _buildRoadGrid() {
    const G = this.GRID = 40;
    const grid = this.roadGrid = new Map();
    for (const e of this.edges) {
      const p = e.pts;
      for (let i = 0; i < p.length / 2 - 1; i++) {
        const x0 = Math.min(p[i * 2], p[i * 2 + 2]) - e.w / 2, x1 = Math.max(p[i * 2], p[i * 2 + 2]) + e.w / 2;
        const z0 = Math.min(p[i * 2 + 1], p[i * 2 + 3]) - e.w / 2, z1 = Math.max(p[i * 2 + 1], p[i * 2 + 3]) + e.w / 2;
        for (let gx = Math.floor(x0 / G); gx <= Math.floor(x1 / G); gx++)
          for (let gz = Math.floor(z0 / G); gz <= Math.floor(z1 / G); gz++) {
            const k = ck(gx, gz);
            let a = grid.get(k); if (!a) grid.set(k, a = []);
            a.push(e.id, i);
          }
      }
    }
  }

  // nearest road segment to (x,z). Returns null if none within maxD.
  nearestRoad(x, z, maxD = 40, filter = null) {
    const G = this.GRID;
    const r = Math.ceil(maxD / G);
    const gx0 = Math.floor(x / G), gz0 = Math.floor(z / G);
    let best = null, bd = maxD * maxD;
    for (let gx = gx0 - r; gx <= gx0 + r; gx++)
      for (let gz = gz0 - r; gz <= gz0 + r; gz++) {
        const a = this.roadGrid.get(ck(gx, gz));
        if (!a) continue;
        for (let j = 0; j < a.length; j += 2) {
          const e = this.edges[a[j]], i = a[j + 1];
          if (filter && !filter(e)) continue;
          const p = e.pts;
          const ax = p[i * 2], az = p[i * 2 + 1], bx = p[i * 2 + 2], bz = p[i * 2 + 3];
          const vx = bx - ax, vz = bz - az;
          const l2 = vx * vx + vz * vz || 1e-6;
          let t = ((x - ax) * vx + (z - az) * vz) / l2;
          t = t < 0 ? 0 : t > 1 ? 1 : t;
          const px = ax + vx * t, pz = az + vz * t;
          const d = (x - px) ** 2 + (z - pz) ** 2;
          if (d < bd) {
            bd = d;
            const l = Math.sqrt(l2);
            best = { e, i, t, x: px, z: pz, dist: Math.sqrt(d), s: e.cum[i] + t * l, dx: vx / l, dz: vz / l };
          }
        }
      }
    if (best) {
      // signed lateral: + means right of forward direction
      best.lat = (x - best.x) * -best.dz + (z - best.z) * best.dx;
    }
    return best;
  }

  // ---------------------------------------------------------------- chunk index
  _indexChunks(D) {
    const C = CHUNK;
    const chunks = this.chunks = new Map();
    const get = (x, z) => {
      const cx = Math.floor(x / C), cz = Math.floor(z / C), k = ck(cx, cz);
      let c = chunks.get(k);
      if (!c) chunks.set(k, c = { key: k, cx, cz, buildings: [], edges: [], areas: [], lines: [], nodes: [], trees: [], crossings: [], busstops: [] });
      return c;
    };
    this.globalAreas = [];
    // buildings
    this.buildings = D.buildings.map((b, i) => {
      const f = b[3];
      const n = f.length / 2;
      const pts = new Float32Array(f.length);
      let cx = 0, cz = 0, x0 = 1e9, x1 = -1e9, z0 = 1e9, z1 = -1e9;
      for (let j = 0; j < f.length; j++) pts[j] = f[j] * 0.1;
      for (let j = 0; j < n; j++) {
        const x = pts[j * 2], z = pts[j * 2 + 1];
        cx += x; cz += z;
        if (x < x0) x0 = x; if (x > x1) x1 = x; if (z < z0) z0 = z; if (z > z1) z1 = z;
      }
      const B = { i, kind: b[0], h: b[1], minH: b[2], pts, cx: cx / n, cz: cz / n, x0, x1, z0, z1, name: b[4] || null };
      get(B.cx, B.cz).buildings.push(B);
      return B;
    });
    // building grid (for point-in-building + collisions)
    const BG = this.BGRID = 30;
    const bgrid = this.bgrid = new Map();
    for (const B of this.buildings) {
      for (let gx = Math.floor(B.x0 / BG); gx <= Math.floor(B.x1 / BG); gx++)
        for (let gz = Math.floor(B.z0 / BG); gz <= Math.floor(B.z1 / BG); gz++) {
          const k = ck(gx, gz);
          let a = bgrid.get(k); if (!a) bgrid.set(k, a = []);
          a.push(B);
        }
    }
    for (const e of this.edges) {
      const m = Math.floor(e.pts.length / 4) * 2;
      get(e.pts[m], e.pts[m + 1]).edges.push(e);
    }
    for (const n of this.nodes.values()) if (n.deg > 1) get(n.x, n.z).nodes.push(n);
    for (const a of D.areas) {
      const f = a[1], pts = new Float32Array(f.length);
      let cx = 0, cz = 0, x0 = 1e9, x1 = -1e9, z0 = 1e9, z1 = -1e9;
      for (let j = 0; j < f.length; j++) pts[j] = f[j] * 0.1;
      for (let j = 0; j < f.length / 2; j++) {
        const x = pts[j * 2], z = pts[j * 2 + 1]; cx += x; cz += z;
        if (x < x0) x0 = x; if (x > x1) x1 = x; if (z < z0) z0 = z; if (z > z1) z1 = z;
      }
      const A = { type: a[0], pts, x0, x1, z0, z1 };
      if (x1 - x0 > 1500 || z1 - z0 > 1500) this.globalAreas.push(A);
      else get(cx / (f.length / 2), cz / (f.length / 2)).areas.push(A);
    }
    this.areaList = D.areas;
    // lines split into pieces of <= 24 points
    for (const l of D.lines) {
      const [type, w, f] = l;
      const n = f.length / 2;
      for (let s = 0; s < n - 1; s += 23) {
        const e = Math.min(n, s + 24);
        const pts = new Float32Array((e - s) * 2);
        for (let j = 0; j < pts.length; j++) pts[j] = f[s * 2 + j] * 0.1;
        get(pts[0], pts[1]).lines.push({ type, w, pts });
      }
    }
    for (const t of D.trees) get(t[0] * 0.1, t[1] * 0.1).trees.push([t[0] * 0.1, t[1] * 0.1]);
    for (const t of D.crossings) get(t[0] * 0.1, t[1] * 0.1).crossings.push([t[0] * 0.1, t[1] * 0.1]);
    for (const t of D.busstops) get(t[0] * 0.1, t[1] * 0.1).busstops.push([t[0] * 0.1, t[1] * 0.1]);
    this.runways = D.lines.filter(l => l[0] === 3).map(l => l[2].map(v => v * 0.1));
    this.taxiways = D.lines.filter(l => l[0] === 4).map(l => ({ w: l[1], pts: l[2].map(v => v * 0.1) }));
    this.stands = D.stands.map(s => s.map(v => v * 0.1));
    this.jet = D.jet.map(s => s.map(v => v * 0.1));
  }

  insideBuilding(x, z, margin = 0) {
    const a = this.bgrid.get(ck(Math.floor(x / this.BGRID), Math.floor(z / this.BGRID)));
    if (!a) return null;
    for (const B of a) {
      if (x < B.x0 - margin || x > B.x1 + margin || z < B.z0 - margin || z > B.z1 + margin) continue;
      if (pointInPoly(x, z, B.pts)) return B;
    }
    return null;
  }

  // ---------------------------------------------------------------- traffic signals
  _buildSignals(sig) {
    // map point index -> signal; then find edges containing those points
    const pos = new Map();
    for (const s of sig) pos.set(s[0] + ',' + s[1], s);
    const D = this.raw;
    const sigPts = new Set();
    for (let i = 0; i < D.pts.length / 2; i++) if (pos.has(D.pts[i * 2] + ',' + D.pts[i * 2 + 1])) sigPts.add(i);
    // cluster signal points into intersections (within 45 m)
    const list = [...sigPts].map(i => ({ i, x: this.P[i * 2], z: this.P[i * 2 + 1], c: -1 }));
    const clusters = this.signalClusters = [];
    for (const p of list) {
      if (p.c >= 0) continue;
      const c = { id: clusters.length, x: 0, z: 0, n: 0, members: [], axis: null, phase: Math.random() * 60, cycle: 46 + Math.random() * 10, controls: [] };
      const stack = [p]; p.c = c.id;
      while (stack.length) {
        const q = stack.pop(); c.members.push(q); c.x += q.x; c.z += q.z; c.n++;
        for (const o of list) if (o.c < 0 && Math.hypot(o.x - q.x, o.z - q.z) < 45) { o.c = c.id; stack.push(o); }
      }
      c.x /= c.n; c.z /= c.n;
      clusters.push(c);
    }
    const ptCluster = new Map();
    for (const p of list) ptCluster.set(p.i, clusters[p.c]);
    // controls: directed edge + stop position + cluster + group
    this.controls = [];
    for (const e of this.edges) {
      for (let j = 0; j < e.ids.length; j++) {
        const c = ptCluster.get(e.ids[j]);
        if (!c) continue;
        for (const dir of (e.ow ? [0] : [0, 1])) {
          const sAlong = dir ? e.len - e.cum[j] : e.cum[j];
          // signals at an internal point: stop just before; at an end node: stop before junction box
          const atEnd = (dir === 0 && j === e.ids.length - 1) || (dir === 1 && j === 0);
          const atStart = (dir === 0 && j === 0) || (dir === 1 && j === e.ids.length - 1);
          if (atStart) continue; // leaving the intersection
          const stop = Math.max(1, sAlong - (atEnd ? 4 + ((dir ? e.na : e.nb).maxW) * 0.5 : 2.5));
          // approach heading (towards the stop)
          const o = {};
          this.sample(e, dir, Math.max(0, stop - 3), 0, o);
          const ang = Math.atan2(o.dz, o.dx);
          if (c.axis === null) c.axis = ang;
          const da = Math.abs(Math.cos(ang - c.axis));
          const ctrl = { e, dir, de: e.id * 2 + dir, stop, cluster: c, group: da > 0.707 ? 0 : 1, ang, x: 0, z: 0 };
          // avoid duplicates on the same directed edge for the same cluster
          if (e.signals.some(s => s.dir === dir && s.cluster === c)) continue;
          e.signals.push(ctrl);
          c.controls.push(ctrl);
          this.controls.push(ctrl);
        }
      }
    }
  }

  // light state for a group: 'G' | 'Y' | 'R'
  signalState(c, group, time) {
    const t = (time + c.phase) % c.cycle;
    const half = c.cycle / 2;
    const g = t < half ? 0 : 1;
    const tt = t - g * half;
    if (g !== group) return 'R';
    if (tt < half - 5) return 'G';
    if (tt < half - 2) return 'Y';
    return 'R'; // all-red clearance
  }

  // A* shortest path on the directed road graph between node ids
  route(fromX, fromZ, toX, toZ) {
    const a = this.nearestRoad(fromX, fromZ, 300, e => e.cls <= 5);
    const b = this.nearestRoad(toX, toZ, 400, e => e.cls <= 5);
    if (!a || !b) return null;
    const starts = [a.e.nb]; if (!a.e.ow) starts.push(a.e.na);
    const goalNodes = new Set([b.e.na.id, b.e.nb.id]);
    const open = new Heap();
    const g = new Map(), prev = new Map();
    for (const s of starts) {
      const d = Math.hypot(s.x - fromX, s.z - fromZ);
      g.set(s.id, d); open.push(d + Math.hypot(s.x - toX, s.z - toZ), s);
    }
    let found = null, it = 0;
    while (open.size && it++ < 200000) {
      const n = open.pop();
      if (goalNodes.has(n.id)) { found = n; break; }
      const gn = g.get(n.id);
      for (const de of n.out) {
        const e = this.edges[de >> 1];
        if (e.cls > 5) continue;
        const m = (de & 1) ? e.na : e.nb;
        const cost = e.len * (1 + e.cls * 0.08);
        const ng = gn + cost;
        if (ng < (g.get(m.id) ?? 1e18)) {
          g.set(m.id, ng); prev.set(m.id, { n, de });
          open.push(ng + Math.hypot(m.x - toX, m.z - toZ), m);
        }
      }
    }
    if (!found) return null;
    const pts = [b.x, b.z];
    let cur = found;
    const seq = [];
    while (prev.has(cur.id)) { const p = prev.get(cur.id); seq.push(p.de); cur = p.n; }
    seq.reverse();
    const out = [fromX, fromZ, a.x, a.z];
    for (const de of seq) {
      const e = this.edges[de >> 1];
      const p = e.pts, n = p.length / 2;
      if (de & 1) for (let i = n - 1; i >= 0; i--) out.push(p[i * 2], p[i * 2 + 1]);
      else for (let i = 0; i < n; i++) out.push(p[i * 2], p[i * 2 + 1]);
    }
    out.push(...pts);
    return out;
  }
}

export function pointInPoly(x, z, p) {
  let inside = false;
  const n = p.length / 2;
  for (let i = 0, j = n - 1; i < n; j = i++) {
    const xi = p[i * 2], zi = p[i * 2 + 1], xj = p[j * 2], zj = p[j * 2 + 1];
    if (((zi > z) !== (zj > z)) && (x < (xj - xi) * (z - zi) / (zj - zi) + xi)) inside = !inside;
  }
  return inside;
}

class Heap {
  constructor() { this.k = []; this.v = []; }
  get size() { return this.k.length; }
  push(k, v) {
    const K = this.k, V = this.v; let i = K.length; K.push(k); V.push(v);
    while (i > 0) { const p = (i - 1) >> 1; if (K[p] <= k) break; K[i] = K[p]; V[i] = V[p]; i = p; }
    K[i] = k; V[i] = v;
  }
  pop() {
    const K = this.k, V = this.v; const top = V[0];
    const lk = K.pop(), lv = V.pop();
    if (K.length) {
      let i = 0; const n = K.length;
      while (true) {
        let l = i * 2 + 1, r = l + 1, m = i;
        let mk = lk;
        if (l < n && K[l] < mk) { m = l; mk = K[l]; }
        if (r < n && K[r] < mk) { m = r; }
        if (m === i) break;
        K[i] = K[m]; V[i] = V[m]; i = m;
      }
      K[i] = lk; V[i] = lv;
    }
    return top;
  }
}

// deterministic random
export function mulberry(seed) {
  let a = seed >>> 0;
  return function () {
    a |= 0; a = a + 0x6D2B79F5 | 0;
    let t = Math.imul(a ^ a >>> 15, 1 | a);
    t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
}
