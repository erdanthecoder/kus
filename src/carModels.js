// Procedural vehicle models (generic designs typical for Bishkek streets: sedans, hatchbacks,
// SUVs, old boxy sedans, white minibuses "marshrutkas", city buses and trucks).
// Model space: forward = +z, up = +y, centred between axles at ground level.
import * as THREE from 'three';
import { colorize, merge } from './props.js';

// Profile (side view) -> rounded body: corners of the polygon are filleted, the extrusion is
// subdivided across the width, then the body is tapered in plan view and given tumblehome so it
// reads as a car rather than a box.
function filletPoly(points, r) {
  const out = [];
  const n = points.length;
  for (let i = 0; i < n; i++) {
    const p = points[i], a = points[(i - 1 + n) % n], b = points[(i + 1) % n];
    const v1 = [a[0] - p[0], a[1] - p[1]], v2 = [b[0] - p[0], b[1] - p[1]];
    const l1 = Math.hypot(...v1), l2 = Math.hypot(...v2);
    const rr = Math.min(r, l1 * 0.45, l2 * 0.45);
    const flat = p[1] < 0.5 && (a[1] < 0.5 || b[1] < 0.5); // keep the underbody corners sharp
    if (flat || rr < 0.01) { out.push(p); continue; }
    const s0 = [p[0] + v1[0] / l1 * rr, p[1] + v1[1] / l1 * rr], s1 = [p[0] + v2[0] / l2 * rr, p[1] + v2[1] / l2 * rr];
    for (let k = 0; k <= 4; k++) {
      const t = k / 4, it = 1 - t;
      out.push([it * it * s0[0] + 2 * it * t * p[0] + t * t * s1[0], it * it * s0[1] + 2 * it * t * p[1] + t * t * s1[1]]);
    }
  }
  return out;
}
function extrudeProfile(points, width, bevel = 0.05, opts = {}) {
  const pts = opts.fillet ? filletPoly(points, opts.fillet) : points;
  const s = new THREE.Shape();
  s.moveTo(pts[0][0], pts[0][1]);
  for (let i = 1; i < pts.length; i++) s.lineTo(pts[i][0], pts[i][1]);
  s.closePath();
  const g = new THREE.ExtrudeGeometry(s, { depth: width - bevel * 2, steps: opts.steps || 1, bevelEnabled: bevel > 0, bevelThickness: bevel, bevelSize: bevel, bevelSegments: 3, curveSegments: 1 });
  g.rotateY(-Math.PI / 2);
  g.translate((width - bevel * 2) / 2, 0, 0);
  if (opts.shape) {
    const { L, W, belt, top, taper = 0.12, tumble = 0.14 } = opts.shape;
    const p = g.attributes.position;
    for (let i = 0; i < p.count; i++) {
      let x = p.getX(i); const y = p.getY(i), z = p.getZ(i);
      const zn = Math.min(1, Math.abs(z) / (L / 2));
      let k = 1 - taper * Math.pow(zn, 3);                                   // plan-view taper at nose/tail
      if (y > belt) k *= 1 - tumble * Math.min(1, (y - belt) / Math.max(0.1, top - belt)); // tumblehome
      // crowned panels: slightly rounder in the middle of the width
      p.setX(i, x * k);
      if (Math.abs(x) > W * 0.3 && y > belt * 0.7) p.setY(i, y - 0.02 * Math.pow(Math.abs(x) / (W / 2), 4));
    }
    g.computeVertexNormals();
  }
  return g;
}
const box = (sx, sy, sz, x, y, z) => new THREE.BoxGeometry(sx, sy, sz).translate(x, y, z);

export const VEHICLE_TYPES = {
  sedan: {
    L: 4.7, W: 1.82, wr: 0.33, wb: 2.75, track: 1.56,
    body: [[-2.35, 0.32], [-2.37, 0.62], [-2.27, 0.92], [-1.45, 0.99], [0.75, 0.99], [2.1, 0.86], [2.35, 0.68], [2.33, 0.32]],
    cabin: [[-1.48, 0.96], [-0.85, 1.4], [0.42, 1.42], [0.85, 1.2], [0.98, 0.96]], cabinW: 0.86,
    roof: [[-0.86, 1.38], [0.42, 1.38], [0.42, 1.45], [-0.84, 1.45]],
    head: { z: 2.31, y: 0.74, x: 0.62, w: 0.42, h: 0.13 }, tail: { z: -2.35, y: 0.82, x: 0.66, w: 0.4, h: 0.12 },
    mass: 1450, power: 165, vmax: 230,
  },
  hatch: {
    L: 4.0, W: 1.7, wr: 0.31, wb: 2.5, track: 1.48,
    body: [[-2.0, 0.32], [-2.02, 0.7], [-1.98, 1.0], [0.55, 0.98], [1.75, 0.84], [2.0, 0.66], [1.98, 0.32]],
    cabin: [[-1.98, 0.96], [-1.86, 1.48], [0.2, 1.52], [0.72, 1.18], [0.82, 0.96]], cabinW: 0.86,
    roof: [[-1.84, 1.46], [0.22, 1.48], [0.2, 1.55], [-1.82, 1.53]],
    head: { z: 1.96, y: 0.76, x: 0.58, w: 0.38, h: 0.13 }, tail: { z: -2.02, y: 0.9, x: 0.62, w: 0.25, h: 0.2 },
    mass: 1150, power: 110, vmax: 190,
  },
  suv: {
    L: 4.95, W: 1.97, wr: 0.4, wb: 2.85, track: 1.66,
    body: [[-2.48, 0.45], [-2.5, 0.85], [-2.45, 1.28], [1.0, 1.28], [2.25, 1.15], [2.48, 0.9], [2.47, 0.45]],
    cabin: [[-2.42, 1.25], [-2.3, 1.82], [0.55, 1.86], [1.05, 1.5], [1.2, 1.25]], cabinW: 0.88,
    roof: [[-2.28, 1.8], [0.55, 1.84], [0.53, 1.92], [-2.26, 1.88]],
    head: { z: 2.45, y: 1.0, x: 0.68, w: 0.42, h: 0.15 }, tail: { z: -2.5, y: 1.15, x: 0.75, w: 0.25, h: 0.3 },
    mass: 2300, power: 280, vmax: 210,
  },
  coupe: {
    L: 4.55, W: 1.92, wr: 0.34, wb: 2.6, track: 1.62,
    body: [[-2.27, 0.28], [-2.3, 0.6], [-2.15, 0.84], [-1.2, 0.88], [0.7, 0.88], [2.0, 0.72], [2.28, 0.52], [2.26, 0.28]],
    cabin: [[-1.25, 0.85], [-0.45, 1.24], [0.25, 1.26], [0.9, 0.98], [1.1, 0.85]], cabinW: 0.82,
    roof: [[-0.46, 1.22], [0.24, 1.24], [0.22, 1.29], [-0.44, 1.27]],
    head: { z: 2.22, y: 0.6, x: 0.66, w: 0.44, h: 0.1 }, tail: { z: -2.29, y: 0.74, x: 0.4, w: 0.8, h: 0.08 },
    mass: 1500, power: 420, vmax: 300,
  },
  oldsedan: {
    L: 4.1, W: 1.62, wr: 0.3, wb: 2.42, track: 1.36,
    body: [[-2.05, 0.34], [-2.07, 0.72], [-2.02, 0.92], [-1.25, 0.94], [0.7, 0.94], [1.95, 0.9], [2.06, 0.74], [2.05, 0.34]],
    cabin: [[-1.27, 0.92], [-0.95, 1.4], [0.42, 1.4], [0.72, 0.92]], cabinW: 0.88,
    roof: [[-0.95, 1.37], [0.42, 1.37], [0.42, 1.44], [-0.95, 1.44]],
    head: { z: 2.04, y: 0.72, x: 0.55, w: 0.22, h: 0.18 }, tail: { z: -2.07, y: 0.8, x: 0.55, w: 0.35, h: 0.14 },
    mass: 1050, power: 75, vmax: 150,
  },
  van: { // white Sprinter-style marshrutka – the backbone of Bishkek public transport
    L: 6.6, W: 2.0, wr: 0.36, wb: 3.66, track: 1.72,
    body: [[-3.3, 0.42], [-3.3, 1.2], [2.35, 1.2], [3.2, 1.05], [3.3, 0.8], [3.28, 0.42]],
    cabin: [[-3.28, 1.17], [-3.28, 2.55], [1.85, 2.58], [2.55, 1.6], [2.85, 1.17]], cabinW: 0.98,
    roof: [[-3.3, 2.5], [1.8, 2.52], [1.8, 2.72], [-3.3, 2.7]],
    head: { z: 3.28, y: 1.0, x: 0.7, w: 0.35, h: 0.18 }, tail: { z: -3.31, y: 1.0, x: 0.85, w: 0.18, h: 0.45 },
    mass: 3400, power: 160, vmax: 160,
  },
  bus: {
    L: 11.8, W: 2.5, wr: 0.5, wb: 6.0, track: 2.1, wbOff: -0.6,
    body: [[-5.9, 0.4], [-5.9, 1.25], [5.9, 1.25], [5.9, 0.4]],
    cabin: [[-5.88, 1.22], [-5.88, 2.75], [5.8, 2.75], [5.9, 1.22]], cabinW: 0.99,
    roof: [[-5.9, 2.7], [5.85, 2.7], [5.85, 3.1], [-5.9, 3.1]],
    head: { z: 5.92, y: 0.8, x: 0.95, w: 0.35, h: 0.18 }, tail: { z: -5.92, y: 1.0, x: 1.0, w: 0.2, h: 0.4 },
    mass: 11000, power: 230, vmax: 100,
  },
  truck: {
    L: 7.2, W: 2.4, wr: 0.5, wb: 4.2, track: 2.0, wbOff: -0.4,
    body: [[-3.6, 0.6], [-3.6, 1.1], [3.6, 1.1], [3.6, 0.6]],
    cabin: [[2.05, 1.08], [2.05, 2.75], [3.15, 2.75], [3.55, 1.9], [3.6, 1.08]], cabinW: 0.98,
    roof: [[2.05, 2.72], [3.15, 2.72], [3.15, 2.8], [2.05, 2.8]],
    cargo: [-3.6, 1.95, 1.0, 3.3], // z0,z1,y0,y1
    head: { z: 3.62, y: 0.95, x: 0.95, w: 0.3, h: 0.18 }, tail: { z: -3.62, y: 0.9, x: 1.0, w: 0.25, h: 0.15 },
    mass: 9000, power: 300, vmax: 110,
  },
};

const GLASS = 0x1c252c, TIRE = 0x161616, RIM = 0xb8bcc0, TRIM = 0x202224, CHROME = 0xc8ccd0;

// returns { paint, detail, lights, wheel, spec }
export function buildVehicle(typeName, opts = {}) {
  const T = VEHICLE_TYPES[typeName];
  const paint = [], detail = [], lights = [];
  const W = T.W;
  const belt = T.cabin[0][1], top = T.roof[2][1];
  const boxy = typeName === 'bus' || typeName === 'truck';
  const shp = boxy ? null : { L: T.L, W, belt: belt * 0.75, top, taper: typeName === 'van' ? 0.06 : 0.13, tumble: 0.05 };
  paint.push(extrudeProfile(T.body, W, 0.08, { fillet: boxy ? 0.08 : 0.22, steps: 4, shape: shp }));
  const cw = W * T.cabinW;
  const shpC = boxy ? null : { L: T.L, W: cw, belt, top, taper: 0.1, tumble: typeName === 'van' ? 0.05 : 0.2 };
  detail.push(colorize(extrudeProfile(T.cabin, cw, 0.04, { fillet: boxy ? 0.05 : 0.12, steps: 3, shape: shpC }), GLASS));
  paint.push(extrudeProfile(T.roof, cw + 0.03, 0.02, { fillet: 0.04, steps: 2, shape: shpC && { ...shpC, W: cw + 0.03 } }));
  // dark wheel-arch liners so the wheels sit in proper arches
  if (!boxy) for (const [x, y, z] of wheelPositions(T)) {
    const arch = new THREE.CylinderGeometry(T.wr * 1.18, T.wr * 1.18, 0.06, 18, 1, false, 0, Math.PI).rotateZ(Math.PI / 2).rotateX(Math.PI / 2);
    detail.push(colorize(arch.translate(Math.sign(x) * (W / 2 - 0.02), y, z), 0x0a0a0a));
  }
  // door lines & side trim
  if (!boxy) for (const s of [-1, 1]) {
    detail.push(colorize(box(0.012, belt - T.body[0][1] - 0.15, 0.02, s * (W / 2 + 0.003), (belt + T.body[0][1]) / 2, T.cabin[T.cabin.length - 2][0] - 0.1), 0x111111));
    detail.push(colorize(box(0.012, belt - T.body[0][1] - 0.15, 0.02, s * (W / 2 + 0.003), (belt + T.body[0][1]) / 2, (T.cabin[0][0] + T.cabin[1][0]) / 2 + 0.2), 0x111111));
    detail.push(colorize(box(0.02, 0.05, T.L * 0.5, s * (W / 2 + 0.005), belt - 0.03, 0), 0x9aa0a6));
  }
  if (T.cargo) {
    const [z0, z1, y0, y1] = T.cargo;
    paint.push(box(W, y1 - y0, z1 - z0, 0, (y0 + y1) / 2, (z0 + z1) / 2));
  }
  // pillars for vans/buses (window frames)
  if (typeName === 'van' || typeName === 'bus') {
    const n = typeName === 'bus' ? 7 : 4;
    const z0 = T.cabin[0][0], z1 = T.cabin[3][0] - (typeName === 'van' ? 0.7 : 0.2);
    for (let i = 0; i <= n; i++) {
      const z = z0 + (z1 - z0) * i / n;
      paint.push(box(cw + 0.04, T.cabin[1][1] - T.cabin[0][1], 0.12, 0, (T.cabin[0][1] + T.cabin[1][1]) / 2, z + 0.06));
    }
  }
  const bodyLow = T.body[0][1];
  // bumpers / sills / grille
  const fz = T.head.z, rz = T.tail.z;
  detail.push(colorize(box(W + 0.02, 0.16, 0.12, 0, bodyLow + 0.12, fz - 0.02), TRIM));
  detail.push(colorize(box(W + 0.02, 0.16, 0.12, 0, bodyLow + 0.12, rz + 0.02), TRIM));
  detail.push(colorize(box(W * 0.45, T.head.h * 1.3, 0.05, 0, T.head.y - 0.04, fz + 0.01), 0x0c0c0c));
  detail.push(colorize(box(W + 0.03, 0.1, T.L * 0.55, 0, bodyLow + 0.04, 0), TRIM));
  // mirrors
  const mz = (T.cabin[T.cabin.length - 1][0] + T.cabin[T.cabin.length - 2][0]) / 2;
  for (const s of [-1, 1]) detail.push(colorize(box(0.2, 0.12, 0.1, s * (W / 2 + 0.08), T.cabin[0][1] + 0.12, mz - 0.1), TRIM));
  // licence plates
  detail.push(colorize(box(0.52, 0.12, 0.02, 0, bodyLow + 0.3, fz + 0.06), 0xf2f2f2));
  detail.push(colorize(box(0.52, 0.12, 0.02, 0, bodyLow + 0.42, rz - 0.06), 0xf2f2f2));
  // lights (emissive group)
  const H = T.head, Tl = T.tail;
  for (const s of [-1, 1]) {
    lights.push(colorize(box(H.w, H.h, 0.06, s * H.x, H.y, H.z), 0xfff6e0));
    lights.push(colorize(box(Tl.w, Tl.h, 0.06, s * Tl.x, Tl.y, Tl.z), 0xff1a10, 0.9));
  }
  // taxi roof sign / marshrutka route board
  if (opts.taxi) {
    detail.push(colorize(box(0.6, 0.18, 0.25, 0, T.roof[2][1] + 0.09, -0.2), 0xf2c200));
  }
  if (typeName === 'van') detail.push(colorize(box(0.9, 0.22, 0.03, 0.2, 2.25, 2.0), 0xf0e030));
  if (typeName === 'bus') detail.push(colorize(box(1.6, 0.3, 0.05, 0, 2.55, 5.92), 0xff8a10));
  if (opts.trolley) {
    // trolleybus current-collector poles reaching up to the overhead wires
    for (const s of [-1, 1]) {
      const g = new THREE.BoxGeometry(0.07, 0.07, 5.6).rotateX(-0.5).translate(s * 0.32, 3.1 + 1.33, -2.4);
      detail.push(colorize(g, 0x1a1a1a));
      detail.push(colorize(box(0.3, 0.25, 0.6, s * 0.32, 3.2, 0.2), 0x333333));
    }
  }
  // wheels (as detail for instanced traffic)
  const wheel = makeWheel(T.wr, typeName === 'bus' || typeName === 'truck' ? 0.32 : 0.23);
  const wpos = wheelPositions(T);
  const wheelsMerged = merge(wpos.map(([x, y, z]) => wheel.clone().translate(x, y, z)));
  const P = merge(paint.map(g => colorize(g, 0xffffff)));
  const Dg = merge([...detail, wheelsMerged]);
  const Lg = merge(lights);
  return { paint: P, detail: Dg, lights: Lg, wheel, wheelPos: wpos, spec: T, detailNoWheels: merge(detail) };
}

export function wheelPositions(T) {
  const o = T.wbOff || 0;
  const a = T.wb / 2 + o, b = -T.wb / 2 + o, x = T.track / 2;
  return [[-x, T.wr, a], [x, T.wr, a], [-x, T.wr, b], [x, T.wr, b]];
}

function makeWheel(r, w) {
  const tire = colorize(new THREE.CylinderGeometry(r, r, w, 16).rotateZ(Math.PI / 2), TIRE);
  const rim = colorize(new THREE.CylinderGeometry(r * 0.62, r * 0.62, w + 0.02, 10).rotateZ(Math.PI / 2), RIM);
  const hub = colorize(new THREE.CylinderGeometry(r * 0.18, r * 0.18, w + 0.04, 6).rotateZ(Math.PI / 2), CHROME);
  // spokes so rotation is visible
  const spokes = [];
  for (let i = 0; i < 5; i++) {
    const g = new THREE.BoxGeometry(w + 0.03, r * 1.15, r * 0.12).rotateX(i / 5 * Math.PI);
    spokes.push(colorize(g, 0x8a8e92));
  }
  return merge([tire, rim, hub, ...spokes]);
}

// Kyrgyz plate texture: "01 KG" region code (01 = Bishkek) + number
export function plateTexture(text = '01KG 777 ABC') {
  const c = document.createElement('canvas'); c.width = 256; c.height = 56;
  const x = c.getContext('2d');
  x.fillStyle = '#f4f4f4'; x.fillRect(0, 0, 256, 56);
  x.strokeStyle = '#111'; x.lineWidth = 3; x.strokeRect(2, 2, 252, 52);
  x.fillStyle = '#d0141e'; x.fillRect(6, 6, 36, 44);
  x.fillStyle = '#ffd23a'; x.beginPath(); x.arc(24, 22, 9, 0, 7); x.fill();
  x.fillStyle = '#fff'; x.font = 'bold 12px Arial'; x.textAlign = 'center'; x.fillText('KG', 24, 46);
  x.fillStyle = '#111'; x.font = 'bold 34px Arial'; x.textAlign = 'left'; x.fillText(text.replace('KG', '').replace(/\s+/, ' '), 50, 41);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4;
  return t;
}

export const TRAFFIC_COLORS = [0xf2f2f2, 0xf2f2f2, 0xe8e8e8, 0x111214, 0x1a1c1e, 0x8c9096, 0xa8adb2, 0x5a6066, 0x2a3a5a, 0x6a1a1a, 0x9a8a70, 0x3a4a3a, 0xc8b89a, 0x203040, 0xb02020, 0x40607a];
