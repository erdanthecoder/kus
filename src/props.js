// Procedural low-poly prop geometries: trees, street lamps, traffic lights, benches...
import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { mulberry } from './data.js';

export function colorize(g, hex, mul = 1) {
  g = g.index ? g.toNonIndexed() : g;
  const c = new THREE.Color(hex);
  const n = g.attributes.position.count, arr = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) { arr[i * 3] = c.r * mul; arr[i * 3 + 1] = c.g * mul; arr[i * 3 + 2] = c.b * mul; }
  g.setAttribute('color', new THREE.BufferAttribute(arr, 3));
  if (g.attributes.uv) g.deleteAttribute('uv');
  return g;
}
export function merge(list) {
  const g = mergeGeometries(list.map(x => {
    const y = x.index ? x.toNonIndexed() : x;
    if (y.attributes.uv) y.deleteAttribute('uv');
    if (y.attributes.uv1) y.deleteAttribute('uv1');
    return y;
  }), false);
  g.computeBoundingSphere();
  return g;
}

function blob(r, detail, rnd, sx = 1, sy = 1, sz = 1) {
  const g = new THREE.IcosahedronGeometry(r, detail);
  const p = g.attributes.position;
  for (let i = 0; i < p.count; i++) {
    const x = p.getX(i), y = p.getY(i), z = p.getZ(i);
    const k = 1 + (Math.sin(x * 3.1 + y * 1.7) * 0.5 + Math.sin(z * 2.3 - y * 2.9) * 0.5) * 0.12 + (rnd() - 0.5) * 0.08;
    p.setXYZ(i, x * k * sx, y * k * sy, z * k * sz);
  }
  g.computeVertexNormals();
  return g;
}

// soft "foliage" normals: point away from crown centre for nicer light
function softNormals(g, cx, cy, cz) {
  const p = g.attributes.position, n = g.attributes.normal;
  for (let i = 0; i < p.count; i++) {
    const v = new THREE.Vector3(p.getX(i) - cx, (p.getY(i) - cy) * 0.8, p.getZ(i) - cz).normalize();
    const m = new THREE.Vector3(n.getX(i), n.getY(i), n.getZ(i));
    v.lerp(m, 0.08).normalize();
    n.setXYZ(i, v.x, v.y, v.z);
  }
}

// colour variation by height inside crown (darker underneath)
function shadeCrown(g, base, y0, y1) {
  const c = new THREE.Color(base);
  const p = g.attributes.position, arr = new Float32Array(p.count * 3);
  for (let i = 0; i < p.count; i++) {
    const t = Math.max(0, Math.min(1, (p.getY(i) - y0) / (y1 - y0)));
    const k = 0.55 + 0.6 * t;
    arr[i * 3] = c.r * k; arr[i * 3 + 1] = c.g * k; arr[i * 3 + 2] = c.b * k;
  }
  g.setAttribute('color', new THREE.BufferAttribute(arr, 3));
}

// ------------------------------------------------------------------ realistic leaf-card trees
// One atlas texture: left half = bark, right half = leaf clusters with alpha.
export function treeAtlas() {
  const W = 512, c = document.createElement('canvas'); c.width = W * 2; c.height = W;
  const x = c.getContext('2d');
  const r = mulberry(77);
  // bark
  x.fillStyle = '#5a4634'; x.fillRect(0, 0, W, W);
  for (let i = 0; i < 900; i++) { const g = 50 + r() * 60; x.fillStyle = `rgba(${g + 20},${g},${g * 0.7},0.6)`; x.fillRect(r() * W, r() * W, 2 + r() * 4, 20 + r() * 60); }
  // leaves: many small leaf ellipses forming clusters
  x.clearRect(W, 0, W, W);
  const leaf = (lx, ly, s, a, shade) => {
    x.save(); x.translate(lx, ly); x.rotate(a);
    const g = 90 + shade * 110;
    x.fillStyle = `rgb(${Math.round(g * 0.55)},${Math.round(g)},${Math.round(g * 0.35)})`;
    x.beginPath(); x.ellipse(0, 0, s, s * 0.45, 0, 0, Math.PI * 2); x.fill();
    x.strokeStyle = `rgba(30,50,20,0.35)`; x.lineWidth = 1; x.beginPath(); x.moveTo(-s, 0); x.lineTo(s, 0); x.stroke();
    x.restore();
  };
  for (let k = 0; k < 3800; k++) {
    // circular cluster mask
    const a = r() * Math.PI * 2, d = Math.sqrt(r()) * W * 0.47;
    const lx = W + W / 2 + Math.cos(a) * d, ly = W / 2 + Math.sin(a) * d;
    leaf(lx, ly, 7 + r() * 9, r() * 6.28, 0.25 + 0.75 * r() * (1 - d / W * 0.9));
  }
  // small twigs
  x.strokeStyle = 'rgba(70,55,40,0.9)'; x.lineWidth = 3;
  for (let i = 0; i < 6; i++) { x.beginPath(); x.moveTo(W + W / 2, W / 2); x.lineTo(W + W / 2 + (r() - 0.5) * W * 0.8, W / 2 + (r() - 0.5) * W * 0.8); x.stroke(); }
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4;
  t.generateMipmaps = true;
  return t;
}

function mergeUV(list) {
  const g = mergeGeometries(list.map(x => x.index ? x.toNonIndexed() : x), false);
  g.computeBoundingSphere();
  return g;
}

function trunkGeo(r0, r1, h, seg = 7, lean = 0) {
  const g = new THREE.CylinderGeometry(r0, r1, h, seg, 3, true).translate(0, h / 2, 0);
  const p = g.attributes.position, uv = g.attributes.uv;
  for (let i = 0; i < p.count; i++) { p.setX(i, p.getX(i) + lean * p.getY(i) / h); uv.setXY(i, uv.getX(i) * 0.45, uv.getY(i) * 2 % 1); }
  return colorBy(g, 0xffffff);
}
function branchGeo(from, to, r) {
  const d = new THREE.Vector3().subVectors(to, from), L = d.length();
  const g = new THREE.CylinderGeometry(r * 0.6, r, L, 5, 1, true);
  const uv = g.attributes.uv; for (let i = 0; i < uv.count; i++) uv.setXY(i, uv.getX(i) * 0.45, uv.getY(i));
  g.translate(0, L / 2, 0);
  g.applyQuaternion(new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), d.normalize()));
  g.translate(from.x, from.y, from.z);
  return colorBy(g, 0xffffff);
}
function colorBy(g, hex, k = 1) {
  const c = new THREE.Color(hex); const n = g.attributes.position.count, a = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) { a[i * 3] = c.r * k; a[i * 3 + 1] = c.g * k; a[i * 3 + 2] = c.b * k; }
  g.setAttribute('color', new THREE.BufferAttribute(a, 3)); return g;
}

// crown made of crossed leaf cards inside an ellipsoid; normals point outward (soft, volumetric lighting)
function crownCards(rnd, cx, cy, cz, rx, ry, rz, n, size, tint, cone = false) {
  const pos = [], nor = [], uv = [], col = [];
  const c = new THREE.Color(tint);
  const Q = new THREE.Quaternion(), E = new THREE.Euler(), V = new THREE.Vector3();
  for (let i = 0; i < n; i++) {
    let px, py, pz;
    for (;;) {
      px = rnd() * 2 - 1; py = rnd() * 2 - 1; pz = rnd() * 2 - 1;
      const d = px * px + py * py + pz * pz;
      if (d <= 1 && d > 0.15) break;
    }
    if (cone) { const k = 1 - (py + 1) / 2; px *= 0.25 + k; pz *= 0.25 + k; }
    const x = cx + px * rx, y = cy + py * ry, z = cz + pz * rz;
    const s = size * (0.75 + rnd() * 0.5);
    E.set(rnd() * Math.PI, rnd() * Math.PI, rnd() * Math.PI); Q.setFromEuler(E);
    const corners = [[-1, -1], [1, -1], [1, 1], [-1, 1]];
    const outN = new THREE.Vector3(px, py * 0.7 + 0.25, pz).normalize();
    const shade = 0.55 + 0.55 * ((py + 1) / 2) * (0.6 + 0.4 * Math.sqrt(px * px + pz * pz));
    const base = pos.length / 3;
    for (const [a, b] of corners) {
      V.set(a * s / 2, b * s / 2, 0).applyQuaternion(Q);
      pos.push(x + V.x, y + V.y, z + V.z);
      nor.push(outN.x, outN.y, outN.z);
      uv.push(0.5 + (a + 1) / 4, (b + 1) / 2);
      const j = 0.9 + rnd() * 0.2;
      col.push(c.r * shade * j, c.g * shade * j, c.b * shade * j);
    }
    void base;
  }
  // two triangles per card (non-indexed)
  const P = [], N = [], UV = [], C = [];
  for (let i = 0; i < n; i++) for (const k of [0, 1, 2, 0, 2, 3]) {
    const j = i * 4 + k;
    P.push(pos[j * 3], pos[j * 3 + 1], pos[j * 3 + 2]); N.push(nor[j * 3], nor[j * 3 + 1], nor[j * 3 + 2]);
    UV.push(uv[j * 2], uv[j * 2 + 1]); C.push(col[j * 3], col[j * 3 + 1], col[j * 3 + 2]);
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(P, 3));
  g.setAttribute('normal', new THREE.Float32BufferAttribute(N, 3));
  g.setAttribute('uv', new THREE.Float32BufferAttribute(UV, 2));
  g.setAttribute('color', new THREE.Float32BufferAttribute(C, 3));
  return g;
}

function stripUV2(g) { if (g.attributes.uv1) g.deleteAttribute('uv1'); return g; }

export function treeGeometries(lod = 0) {
  const rnd = mulberry(11 + lod);
  const k = lod ? 0.28 : 1; // card count factor for far LOD
  const big = lod ? 1.35 : 1; // bigger cards when fewer
  const V = (x, y, z) => new THREE.Vector3(x, y, z);
  const out = [];
  // 0: elm / karagach – the classic Bishkek street tree
  {
    const parts = [trunkGeo(0.16, 0.28, 3.6, 7, 0.15)];
    if (!lod) for (const [a, h] of [[0.4, 3.2], [2.4, 3.4], [4.3, 3.0]]) parts.push(branchGeo(V(0, h, 0), V(Math.cos(a) * 1.8, h + 1.8, Math.sin(a) * 1.8), 0.1));
    parts.push(crownCards(rnd, 0.2, 5.6, 0, 3.0, 2.3, 3.0, Math.round(70 * k), 2.1 * big, 0x5d8a3a));
    out.push(mergeUV(parts.map(stripUV2)));
  }
  // 1: pyramidal poplar – tall Bishkek poplars lining the avenues
  {
    const parts = [trunkGeo(0.15, 0.3, 4, 6)];
    parts.push(crownCards(rnd, 0, 10, 0, 1.5, 7.5, 1.5, Math.round(80 * k), 1.8 * big, 0x557f34));
    out.push(mergeUV(parts.map(stripUV2)));
  }
  // 2: blue spruce (parks, government buildings)
  {
    const parts = [trunkGeo(0.12, 0.24, 7, 6)];
    parts.push(crownCards(rnd, 0, 5, 0, 2.6, 4.8, 2.6, Math.round(70 * k), 1.6 * big, 0x3a6450, true));
    out.push(mergeUV(parts.map(stripUV2)));
  }
  // 3: oak / chestnut – Oak Park, Erkindik boulevard
  {
    const parts = [trunkGeo(0.24, 0.42, 3.4, 8, -0.1)];
    if (!lod) for (const [a, h] of [[0.9, 3.0], [3.1, 3.2], [5.0, 2.9], [2.0, 3.6]]) parts.push(branchGeo(V(0, h, 0), V(Math.cos(a) * 2.4, h + 2.2, Math.sin(a) * 2.4), 0.14));
    parts.push(crownCards(rnd, 0, 6.6, 0, 3.8, 2.9, 3.8, Math.round(95 * k), 2.4 * big, 0x4d7a30));
    out.push(mergeUV(parts.map(stripUV2)));
  }
  return out;
}

export function treeGeometriesLow() { return treeGeometries(1); }

export function lampGeometry() {
  const pole = colorize(new THREE.CylinderGeometry(0.07, 0.11, 8.5, 6).translate(0, 4.25, 0), 0x5a5e62);
  const arm = colorize(new THREE.BoxGeometry(0.08, 0.08, 2.2).translate(0, 8.4, -1.05), 0x5a5e62);
  const head = colorize(new THREE.BoxGeometry(0.35, 0.14, 0.7).translate(0, 8.35, -2.1), 0x3c3f42);
  return merge([pole, arm, head]);
}
export function lampGlowGeometry() {
  return colorize(new THREE.BoxGeometry(0.28, 0.04, 0.6).translate(0, 8.27, -2.1), 0xffffff);
}

// Traffic light pole with 3-lamp head (head faces +z, i.e. towards approaching traffic)
export function signalPoleGeometry() {
  const pole = colorize(new THREE.CylinderGeometry(0.08, 0.1, 3.6, 6).translate(0, 1.8, 0), 0x2b2d30);
  const box = colorize(new THREE.BoxGeometry(0.36, 1.05, 0.3).translate(0, 3.5, 0), 0x1a1b1c);
  const visor = [];
  for (let i = 0; i < 3; i++) visor.push(colorize(new THREE.BoxGeometry(0.34, 0.04, 0.18).translate(0, 3.86 - i * 0.33, 0.22), 0x111111));
  const stripe = colorize(new THREE.BoxGeometry(0.44, 1.15, 0.02).translate(0, 3.5, -0.16), 0xdddddd);
  return merge([pole, box, stripe, ...visor]);
}
export function signalLampGeometry(i) {
  return colorize(new THREE.CircleGeometry(0.12, 12).translate(0, 3.83 - i * 0.33, 0.155), 0xffffff);
}

export function benchGeometry() {
  return merge([
    colorize(new THREE.BoxGeometry(1.8, 0.06, 0.45).translate(0, 0.45, 0), 0x7a5634),
    colorize(new THREE.BoxGeometry(1.8, 0.4, 0.05).translate(0, 0.72, -0.2), 0x7a5634),
    colorize(new THREE.BoxGeometry(0.06, 0.45, 0.45).translate(-0.8, 0.22, 0), 0x333333),
    colorize(new THREE.BoxGeometry(0.06, 0.45, 0.45).translate(0.8, 0.22, 0), 0x333333),
  ]);
}

// Bus stop shelter (glass + roof) – used at OSM bus_stop nodes
export function busStopGeometry() {
  return merge([
    colorize(new THREE.BoxGeometry(3.6, 0.08, 1.6).translate(0, 2.5, 0), 0x2d5e8c),
    colorize(new THREE.BoxGeometry(0.08, 2.5, 1.5).translate(-1.75, 1.25, 0), 0x8899aa),
    colorize(new THREE.BoxGeometry(0.08, 2.5, 1.5).translate(1.75, 1.25, 0), 0x8899aa),
    colorize(new THREE.BoxGeometry(3.5, 1.8, 0.05).translate(0, 1.4, -0.72), 0x9fb6c4),
    colorize(new THREE.BoxGeometry(3.0, 0.08, 0.4).translate(0, 0.5, -0.5), 0x555555),
  ]);
}
