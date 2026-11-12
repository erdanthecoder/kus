// Small helpers for building merged BufferGeometries quickly.
import * as THREE from 'three';

export class GB {
  constructor(extra = {}) {
    this.p = []; this.n = []; this.c = []; this.i = [];
    this.extra = {}; // name -> {size, data}
    for (const k in extra) this.extra[k] = { size: extra[k], data: [] };
    this.vc = 0;
  }
  v(x, y, z, nx, ny, nz, r, g, b, ex) {
    this.p.push(x, y, z); this.n.push(nx, ny, nz); this.c.push(r, g, b);
    if (ex) for (const k in ex) { const a = ex[k]; const d = this.extra[k].data; for (let j = 0; j < a.length; j++) d.push(a[j]); }
    return this.vc++;
  }
  tri(a, b, c) { this.i.push(a, b, c); }
  quad(a, b, c, d) { this.i.push(a, b, c, a, c, d); }
  get empty() { return this.vc === 0; }
  build() {
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(this.p, 3));
    g.setAttribute('normal', new THREE.Float32BufferAttribute(this.n, 3));
    g.setAttribute('color', new THREE.Float32BufferAttribute(this.c, 3));
    for (const k in this.extra) g.setAttribute(k, new THREE.Float32BufferAttribute(this.extra[k].data, this.extra[k].size));
    g.setIndex(this.vc > 65535 ? new THREE.Uint32BufferAttribute(this.i, 1) : new THREE.Uint16BufferAttribute(this.i, 1));
    g.computeBoundingSphere(); g.computeBoundingBox();
    return g;
  }
}

// miter offsets for a polyline (flat array x,z). Returns array of [nx,nz,scale] per point
export function polyNormals(pts) {
  const n = pts.length / 2, out = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) {
    let dx0 = 0, dz0 = 0, dx1 = 0, dz1 = 0;
    if (i > 0) { dx0 = pts[i * 2] - pts[i * 2 - 2]; dz0 = pts[i * 2 + 1] - pts[i * 2 - 1]; const l = Math.hypot(dx0, dz0) || 1; dx0 /= l; dz0 /= l; }
    if (i < n - 1) { dx1 = pts[i * 2 + 2] - pts[i * 2]; dz1 = pts[i * 2 + 3] - pts[i * 2 + 1]; const l = Math.hypot(dx1, dz1) || 1; dx1 /= l; dz1 /= l; }
    if (i === 0) { dx0 = dx1; dz0 = dz1; }
    if (i === n - 1) { dx1 = dx0; dz1 = dz0; }
    let tx = dx0 + dx1, tz = dz0 + dz1; const tl = Math.hypot(tx, tz);
    if (tl < 1e-4) { tx = dx1; tz = dz1; } else { tx /= tl; tz /= tl; }
    // right normal of tangent
    const nx = -tz, nz = tx;
    const cos = nx * -dz1 + nz * dx1;
    const s = Math.min(3, 1 / Math.max(0.33, cos));
    out[i * 3] = nx; out[i * 3 + 1] = nz; out[i * 3 + 2] = s;
  }
  return out;
}

// sub-polyline between distances [s0, s1]
export function subPolyline(pts, cum, s0, s1) {
  const out = [];
  const n = pts.length / 2;
  const at = (s) => {
    let i = 0; while (i < n - 2 && cum[i + 1] < s) i++;
    const L = cum[i + 1] - cum[i] || 1e-6; const f = Math.max(0, Math.min(1, (s - cum[i]) / L));
    return [pts[i * 2] + (pts[i * 2 + 2] - pts[i * 2]) * f, pts[i * 2 + 1] + (pts[i * 2 + 3] - pts[i * 2 + 1]) * f];
  };
  const a = at(s0); out.push(a[0], a[1]);
  for (let i = 1; i < n - 1; i++) if (cum[i] > s0 && cum[i] < s1) out.push(pts[i * 2], pts[i * 2 + 1]);
  const b = at(s1); out.push(b[0], b[1]);
  return out;
}

export function cumLen(pts) {
  const n = pts.length / 2, c = new Float32Array(n);
  for (let i = 1; i < n; i++) c[i] = c[i - 1] + Math.hypot(pts[i * 2] - pts[i * 2 - 2], pts[i * 2 + 1] - pts[i * 2 - 1]);
  return c;
}

// ribbon between lateral offsets o0..o1 (right positive), at height y. extra attr callback(dist, side)
export function ribbon(gb, pts, o0, o1, y, col, exFn) {
  const n = pts.length / 2;
  if (n < 2) return;
  const N = polyNormals(pts);
  let d = 0, prevA = -1, prevB = -1;
  for (let i = 0; i < n; i++) {
    if (i > 0) d += Math.hypot(pts[i * 2] - pts[i * 2 - 2], pts[i * 2 + 1] - pts[i * 2 - 1]);
    const nx = N[i * 3], nz = N[i * 3 + 1], s = N[i * 3 + 2];
    const x = pts[i * 2], z = pts[i * 2 + 1];
    const a = gb.v(x + nx * o0 * s, y, z + nz * o0 * s, 0, 1, 0, col[0], col[1], col[2], exFn && { aDash: exFn(d, 0) });
    const b = gb.v(x + nx * o1 * s, y, z + nz * o1 * s, 0, 1, 0, col[0], col[1], col[2], exFn && { aDash: exFn(d, 1) });
    if (prevA >= 0) {
      // facing up: (prevA, a, b) order depends on direction; use winding so normal +y
      gb.quad(prevA, prevB, b, a);
    }
    prevA = a; prevB = b;
  }
}

export function disc(gb, x, z, r, y, col, seg = 14) {
  const c = gb.v(x, y, z, 0, 1, 0, col[0], col[1], col[2]);
  let first = -1, prev = -1;
  for (let i = 0; i < seg; i++) {
    const a = -i / seg * Math.PI * 2;
    const v = gb.v(x + Math.cos(a) * r, y, z + Math.sin(a) * r, 0, 1, 0, col[0], col[1], col[2]);
    if (prev >= 0) gb.tri(c, prev, v);
    else first = v;
    prev = v;
  }
  gb.tri(c, prev, first);
}

export function hexColor(h) { return [((h >> 16) & 255) / 255, ((h >> 8) & 255) / 255, (h & 255) / 255].map(v => Math.pow(v, 2.2)); }
