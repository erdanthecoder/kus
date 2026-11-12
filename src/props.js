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

export function treeGeometries() {
  const rnd = mulberry(11);
  const out = [];
  // 0: broad elm / karagach (very common on Bishkek streets)
  {
    const trunk = colorize(new THREE.CylinderGeometry(0.16, 0.26, 3.4, 6).translate(0, 1.7, 0), 0x5a4632);
    const parts = [];
    for (const [x, y, z, r] of [[0, 5.2, 0, 2.6], [1.3, 4.6, 0.4, 1.8], [-1.2, 4.8, -0.5, 1.9], [0.3, 6.3, -0.8, 1.7], [-0.4, 4.4, 1.2, 1.6]]) {
      const b = blob(r, 1, rnd).translate(x, y, z); parts.push(b);
    }
    let crown = merge(parts); softNormals(crown, 0, 5, 0); shadeCrown(crown, 0x4c7a2e, 3, 7.5);
    out.push(merge([trunk, crown]));
  }
  // 1: pyramidal poplar (iconic tall Bishkek poplars)
  {
    const trunk = colorize(new THREE.CylinderGeometry(0.15, 0.28, 3, 6).translate(0, 1.5, 0), 0x6a5a48);
    let crown = blob(1, 2, rnd, 1.3, 7.5, 1.3).translate(0, 9.5, 0);
    softNormals(crown, 0, 9.5, 0); shadeCrown(crown, 0x45722c, 3, 16);
    out.push(merge([trunk, crown]));
  }
  // 2: blue spruce / pine (parks, government buildings)
  {
    const trunk = colorize(new THREE.CylinderGeometry(0.12, 0.22, 2, 6).translate(0, 1, 0), 0x4a3828);
    const parts = [];
    for (let i = 0; i < 4; i++) parts.push(new THREE.ConeGeometry(2.4 - i * 0.5, 3, 8).translate(0, 2.6 + i * 1.7, 0));
    let crown = merge(parts); shadeCrown(crown, 0x2f5a3c, 1, 9);
    out.push(merge([trunk, crown]));
  }
  // 3: round oak / chestnut (Oak park, Erkindik boulevard)
  {
    const trunk = colorize(new THREE.CylinderGeometry(0.22, 0.38, 3.2, 7).translate(0, 1.6, 0), 0x4e3c2a);
    const parts = [];
    for (const [x, y, z, r] of [[0, 6, 0, 3.4], [2, 5.2, 1, 2.3], [-2, 5.4, -0.6, 2.4], [0.5, 7.4, 1, 2.2], [-0.8, 5, 2, 2.2], [0.8, 5.0, -2.1, 2.1]]) parts.push(blob(r, 1, rnd).translate(x, y, z));
    let crown = merge(parts); softNormals(crown, 0, 6, 0); shadeCrown(crown, 0x426e2a, 3, 9.5);
    out.push(merge([trunk, crown]));
  }
  return out;
}

// cheap far-LOD trees (same silhouettes, ~10x fewer triangles)
export function treeGeometriesLow() {
  const rnd = mulberry(12);
  const t = (r0, r1, h, c) => colorize(new THREE.CylinderGeometry(r0, r1, h, 4).translate(0, h / 2, 0), c);
  const crown = (g, col, y0, y1) => { softNormals(g, 0, (y0 + y1) / 2, 0); shadeCrown(g, col, y0, y1); return g; };
  return [
    merge([t(0.16, 0.26, 3.4, 0x5a4632), crown(blob(1, 1, rnd, 3.0, 2.3, 3.0).translate(0, 5.2, 0), 0x4c7a2e, 3, 7.5)]),
    merge([t(0.15, 0.28, 3, 0x6a5a48), crown(blob(1, 1, rnd, 1.3, 7.5, 1.3).translate(0, 9.5, 0), 0x45722c, 3, 16)]),
    merge([t(0.12, 0.22, 2, 0x4a3828), (() => { const g = merge([new THREE.ConeGeometry(2.4, 5, 6).translate(0, 3.6, 0), new THREE.ConeGeometry(1.5, 4, 6).translate(0, 6.6, 0)]); shadeCrown(g, 0x2f5a3c, 1, 9); return g; })()]),
    merge([t(0.22, 0.38, 3.2, 0x4e3c2a), crown(blob(1, 1, rnd, 3.8, 2.8, 3.8).translate(0, 6, 0), 0x426e2a, 3, 9.5)]),
  ];
}

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
