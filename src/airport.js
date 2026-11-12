// Manas International Airport (FRU): runway 07/25 (4200 m) with markings & lights,
// control tower, animated airliners (landing, taxi, pushback, take-off, go-around),
// apron service vehicles and the scenic flight over Bishkek.
import * as THREE from 'three';
import { colorize, merge } from './props.js';
import { buildVehicle } from './carModels.js';

const AIRLINES = [
  { name: 'Ala-Too Air', code: 'AT', body: 0xf4f4f4, tail: 0xd0141e, stripe: 0xf2c200 },
  { name: 'Tengri Wings', code: 'TW', body: 0xf4f4f4, tail: 0x1a4a8a, stripe: 0x1a4a8a },
  { name: 'Issyk Air', code: 'IK', body: 0xeef4f8, tail: 0x18a0c8, stripe: 0x18a0c8 },
  { name: 'Silk Road Jet', code: 'SR', body: 0xf2f0ea, tail: 0x7a1a3a, stripe: 0xc8a040 },
  { name: 'Tulpar Airlines', code: 'TP', body: 0xffffff, tail: 0x2a7a3a, stripe: 0xe0a020 },
  { name: 'Steppe Cargo', code: 'SC', body: 0xd8dade, tail: 0x3a3a3a, stripe: 0xe06010 },
];
const DESTS = ['Moscow', 'Istanbul', 'Dubai', 'Osh', 'Almaty', 'Novosibirsk', 'Tashkent', 'Jalal-Abad', 'Batken', 'Urumqi', 'Delhi', 'Antalya', 'Yekaterinburg', 'Seoul', 'St Petersburg', 'Karakol', 'Baku', 'Doha'];

// ------------------------------------------------------------------ aircraft model
export function buildAircraft(airline, wide = false) {
  const S = wide ? 1.5 : 1;
  const len = 37 * S, R = 1.98 * S;
  const parts = [], tint = [];
  // fuselage via lathe (axis = y, later rotated to z)
  const prof = [];
  const N = 26;
  for (let i = 0; i <= N; i++) {
    const t = i / N, y = -len / 2 + t * len;
    let r;
    if (t < 0.1) r = R * Math.sqrt(1 - Math.pow(1 - t / 0.1, 2)) * 0.98 + 0.02;   // nose
    else if (t > 0.72) r = R * (1 - Math.pow((t - 0.72) / 0.28, 1.6) * 0.82);     // tail cone
    else r = R;
    prof.push(new THREE.Vector2(Math.max(0.05, r), y));
  }
  const fus = new THREE.LatheGeometry(prof, 24).rotateX(Math.PI / 2);
  // lathe after rotateX: y -> z (nose towards +z? lathe y=-len/2 is start -> z=-len/2*...); flip so nose is +z
  fus.rotateY(Math.PI);
  parts.push(colorize(fus, airline.body));
  // belly slightly greyer
  // window band + cockpit
  parts.push(colorize(new THREE.BoxGeometry(R * 2.02, 0.32 * S, len * 0.62).translate(0, 0.55 * S, -len * 0.04), 0x1e2630));
  parts.push(colorize(new THREE.BoxGeometry(R * 1.2, 0.5 * S, 1.2 * S).translate(0, 0.75 * S, len / 2 - 2.6 * S).rotateX(0), 0x10161c));
  // livery stripe
  parts.push(colorize(new THREE.BoxGeometry(R * 2.03, 0.22 * S, len * 0.68).translate(0, -0.15 * S, -len * 0.02), airline.stripe));
  // wings
  const wing = new THREE.Shape();
  const span = 17 * S, root = 6.5 * S, tip = 1.6 * S, sweep = 7 * S;
  wing.moveTo(0, root / 2); wing.lineTo(span, root / 2 - sweep); wing.lineTo(span, root / 2 - sweep - tip); wing.lineTo(0, -root / 2); wing.closePath();
  const wg = new THREE.ExtrudeGeometry(wing, { depth: 0.45 * S, bevelEnabled: false }).rotateX(Math.PI / 2).translate(0, -0.9 * S, 0);
  const wL = wg.clone().translate(R * 0.4, 0, -len * 0.02), wR = wg.clone().scale(-1, 1, 1).translate(-R * 0.4, 0, -len * 0.02);
  // dihedral
  wL.rotateZ(0.06); wR.rotateZ(-0.06);
  parts.push(colorize(wL, 0xc8ccd2), colorize(wR, 0xc8ccd2));
  // winglets
  for (const s of [-1, 1]) parts.push(colorize(new THREE.BoxGeometry(0.2, 2.2 * S, 1.4 * S).translate(s * (span + R * 0.4), 0.6 * S, -len * 0.02 - sweep - 0.4 * S), airline.tail));
  // engines
  for (const s of [-1, 1]) for (const k of (wide ? [0.33, 0.62] : [0.36])) {
    const ex = s * (R * 0.4 + span * k), ez = -len * 0.02 + root / 2 - sweep * k + 2.6 * S;
    parts.push(colorize(new THREE.CylinderGeometry(1.05 * S, 0.9 * S, 4.2 * S, 16).rotateX(Math.PI / 2).translate(ex, -1.9 * S, ez), 0xd8dade));
    parts.push(colorize(new THREE.CylinderGeometry(0.85 * S, 0.85 * S, 0.1, 16).rotateX(Math.PI / 2).translate(ex, -1.9 * S, ez + 2.12 * S), 0x202020));
    parts.push(colorize(new THREE.BoxGeometry(0.3, 1.2 * S, 2.5 * S).translate(ex, -1.2 * S, ez - 0.5 * S), 0xc8ccd2));
  }
  // vertical tail
  const fin = new THREE.Shape();
  fin.moveTo(0, 0); fin.lineTo(5.2 * S, 0); fin.lineTo(1.8 * S, 7.2 * S); fin.lineTo(-0.6 * S, 7.2 * S); fin.closePath();
  const fg = new THREE.ExtrudeGeometry(fin, { depth: 0.4 * S, bevelEnabled: false }).rotateY(-Math.PI / 2).translate(0.2 * S, R * 0.6, -len / 2 + 1.0 * S);
  parts.push(colorize(fg, airline.tail));
  // horizontal stabiliser
  const hs = new THREE.Shape();
  hs.moveTo(0, 1.8 * S); hs.lineTo(6.2 * S, -1.2 * S); hs.lineTo(6.2 * S, -2.4 * S); hs.lineTo(0, -1.8 * S); hs.closePath();
  const hg = new THREE.ExtrudeGeometry(hs, { depth: 0.25 * S, bevelEnabled: false }).rotateX(Math.PI / 2).translate(0, R * 0.25, -len / 2 + 3.4 * S);
  parts.push(colorize(hg.clone(), 0xc8ccd2), colorize(hg.clone().scale(-1, 1, 1), 0xc8ccd2));
  const body = merge(parts);
  // landing gear (separate so it can retract)
  const gp = [];
  const gearH = 2.45 * S;
  const wheel = (x, z) => [
    colorize(new THREE.CylinderGeometry(0.13 * S, 0.13 * S, gearH, 6).translate(x, -gearH / 2 - R * 0.6, z), 0x9a9a9a),
    colorize(new THREE.CylinderGeometry(0.55 * S, 0.55 * S, 0.45 * S, 12).rotateZ(Math.PI / 2).translate(x, -gearH - R * 0.6 + 0.0, z), 0x151515),
  ];
  gp.push(...wheel(0, len * 0.36));
  for (const s of [-1, 1]) gp.push(...wheel(s * 2.9 * S, -len * 0.06), ...wheel(s * 3.5 * S, -len * 0.06));
  const gear = merge(gp);
  const groundY = gearH + R * 0.6 + 0.55 * S;
  return { body, gear, groundY, len, span: span + R * 0.4, S };
}

function textTex(text, w = 512, h = 128, bg = null, fg = '#fff', font = 'bold 80px Arial') {
  const c = document.createElement('canvas'); c.width = w; c.height = h;
  const x = c.getContext('2d');
  if (bg) { x.fillStyle = bg; x.fillRect(0, 0, w, h); }
  x.fillStyle = fg; x.font = font; x.textAlign = 'center'; x.textBaseline = 'middle';
  x.fillText(text, w / 2, h / 2);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 8;
  return t;
}

// ------------------------------------------------------------------ airport
export class Airport {
  constructor(scene, map, world) {
    this.scene = scene; this.map = map; this.world = world;
    this.group = new THREE.Group(); scene.add(this.group);
    const rw = map.runways.sort((a, b) => b.length - a.length)[0];
    const n = rw.length / 2;
    let R0 = new THREE.Vector2(rw[0], rw[1]), R1 = new THREE.Vector2(rw[n * 2 - 2], rw[n * 2 - 1]);
    if (R0.x > R1.x) [R0, R1] = [R1, R0];
    this.R0 = R0; this.R1 = R1;
    this.len = R0.distanceTo(R1);
    this.u = R1.clone().sub(R0).normalize();
    this.n = new THREE.Vector2(-this.u.y, this.u.x);
    this.rwW = 55;
    // terminal
    const term = map.buildings.find(b => b.name && /Manas International Airport|главный терминал/.test(b.name)) || map.buildings.find(b => b.kind === 10);
    this.terminal = term;
    this.tc = term ? new THREE.Vector2(term.cx, term.cz) : R0.clone().addScaledVector(this.u, 1400).addScaledVector(this.n, 450);
    if (this.rel(this.tc).y < 0) { this.n.multiplyScalar(-1); }
    this.heading = Math.atan2(this.u.x, this.u.y);
    this._runway();
    this._lights();
    this._tower();
    this._stands();
    this._taxiLine();
    this._sign();
    this.planes = [];
    this.vehicles = [];
    this.time = 0;
    this.board = [];
    this.flightNo = 100;
    this._initPlanes();
    this._serviceVehicles();
    // landside zone (drop-off curb in front of the terminal)
    const curbProbe = this.tc.clone().addScaledVector(this.n, 70);
    const nr = map.nearestRoad(curbProbe.x, curbProbe.y, 200, e => e.cls <= 6);
    this.dropoff = nr ? new THREE.Vector2(nr.x, nr.z) : curbProbe;
    this._zoneMarker();
    this.goAround = false;
  }

  rel(p) { const d = new THREE.Vector2(p.x - this.R0.x, p.y - this.R0.y); return new THREE.Vector2(d.dot(this.u), d.dot(this.n)); }
  at(s, l) { return this.R0.clone().addScaledVector(this.u, s).addScaledVector(this.n, l); }

  _runway() {
    const L = this.len, W = this.rwW;
    const g = new THREE.PlaneGeometry(L, W + 14, 1, 1).rotateX(-Math.PI / 2);
    const m = new THREE.MeshStandardMaterial({ color: 0x8a8a88, roughness: 0.85, polygonOffset: true, polygonOffsetFactor: -3, polygonOffsetUnits: -8 });
    m.onBeforeCompile = (sh) => {
      sh.vertexShader = sh.vertexShader.replace('#include <common>', '#include <common>\nvarying vec2 vR;')
        .replace('#include <uv_vertex>', `#include <uv_vertex>\nvR = vec2((uv.x)*${L.toFixed(1)}, (uv.y-0.5)*${(W + 14).toFixed(1)});`);
      sh.fragmentShader = sh.fragmentShader.replace('#include <common>', `#include <common>\nvarying vec2 vR;
        float hh(vec2 p){ return fract(sin(dot(p,vec2(12.9898,78.233)))*43758.5453); }`)
        .replace('#include <color_fragment>', `#include <color_fragment>
          float x = vR.x, y = vR.y, L = ${L.toFixed(1)};
          float ay = abs(y);
          float xe = min(x, L - x);
          vec3 c = diffuseColor.rgb;
          // concrete slabs + shoulders
          float slab = step(0.97, fract(x/7.5)) + step(0.97, fract((y+50.0)/7.5));
          c *= 1.0 - 0.08*min(1.0,slab);
          c *= 0.92 + 0.12*hh(floor(vec2(x,y)/7.5));
          if (ay > ${(W / 2).toFixed(1)}) c *= 0.78;
          // rubber deposits in touchdown zones
          float rub = smoothstep(1200.0, 300.0, xe) * smoothstep(14.0, 2.0, ay) * (0.5 + 0.5*hh(floor(vec2(x*0.3,y*2.0))));
          c *= 1.0 - 0.45*rub;
          float w = 0.0;
          w += step(${(W / 2 - 1.6).toFixed(1)}, ay) * step(ay, ${(W / 2 - 0.7).toFixed(1)});                 // edge stripes
          w += step(ay, 0.45) * step(fract((x - 10.0)/50.0), 0.6) * step(420.0, xe);             // centreline
          float pk = step(6.0, xe) * step(xe, 51.0) * step(3.0, ay) * step(ay, 24.0) * step(fract((ay-3.0)/2.9), 0.62);
          w += pk;                                                                                 // threshold piano keys
          w += step(400.0, xe) * step(xe, 460.0) * step(6.0, ay) * step(ay, 15.0);               // aiming point
          for (int i = 0; i < 6; i++) {                                                            // touchdown zone bars
            float x0 = 150.0 + float(i)*150.0;
            if (i == 2) continue;
            w += step(x0, xe) * step(xe, x0 + 22.0) * step(5.0, ay) * step(ay, 6.8 + float(6-i)*0.0) ;
            w += step(x0, xe) * step(xe, x0 + 22.0) * step(8.0, ay) * step(ay, 9.8) * step(float(i), 2.5);
          }
          diffuseColor.rgb = mix(c, vec3(0.93), clamp(w, 0.0, 1.0));`);
    };
    const mesh = new THREE.Mesh(g, m);
    const mid = this.at(L / 2, 0);
    mesh.position.set(mid.x, 0.06, mid.y);
    mesh.rotation.y = this.heading - Math.PI / 2;
    mesh.receiveShadow = true;
    // PlaneGeometry: x along u after rotation? rotation.y = heading - 90° maps local +x to u
    this.group.add(mesh);
    // runway designators
    for (const [txt, s, rot] of [['07', 70, 0], ['25', L - 70, Math.PI]]) {
      const t = textTex(txt, 256, 256, null, '#eeeeee', 'bold 220px Arial');
      const p = new THREE.Mesh(new THREE.PlaneGeometry(18, 18), new THREE.MeshStandardMaterial({ map: t, transparent: true, roughness: 0.8, polygonOffset: true, polygonOffsetFactor: -4, polygonOffsetUnits: -12 }));
      p.rotation.x = -Math.PI / 2;
      const q = this.at(s, 0);
      const holder = new THREE.Group(); holder.add(p);
      holder.position.set(q.x, 0.05, q.y);
      holder.rotation.y = this.heading + rot + Math.PI;
      this.group.add(holder);
    }
  }

  _lights() {
    const pts = [], cols = [];
    const L = this.len, hw = this.rwW / 2 + 1.5;
    for (let s = 0; s <= L; s += 60) for (const side of [-1, 1]) { pts.push(this.at(s, side * hw)); cols.push(s > L - 600 ? [1, 0.6, 0.2] : [1, 0.95, 0.8]); }
    for (let l = -hw; l <= hw; l += 3) { pts.push(this.at(-1, l)); cols.push([0.2, 1, 0.3]); pts.push(this.at(L + 1, l)); cols.push([1, 0.1, 0.1]); }
    // centreline lights
    for (let s = 30; s < L; s += 30) { pts.push(this.at(s, 0)); cols.push(s > L - 900 ? (Math.floor(s / 30) % 2 ? [1, 0.1, 0.1] : [1, 1, 1]) : [1, 1, 1]); }
    // taxiway edge lights (blue) along data taxiways
    for (const t of this.map.taxiways) {
      const p = t.pts;
      for (let i = 0; i < p.length / 2 - 1; i++) {
        const ax = p[i * 2], az = p[i * 2 + 1], bx = p[i * 2 + 2], bz = p[i * 2 + 3];
        const l = Math.hypot(bx - ax, bz - az); const nx = -(bz - az) / l, nz = (bx - ax) / l;
        for (let s = 0; s < l; s += 45) for (const side of [-1, 1]) {
          pts.push(new THREE.Vector2(ax + (bx - ax) * s / l + nx * side * (t.w / 2 + 1), az + (bz - az) * s / l + nz * side * (t.w / 2 + 1))); cols.push([0.15, 0.35, 1]);
        }
      }
    }
    const g = new THREE.SphereGeometry(0.28, 6, 4);
    const m = new THREE.MeshBasicMaterial({ color: 0xffffff });
    this.rwLights = new THREE.InstancedMesh(g, m, pts.length);
    const M = new THREE.Matrix4(), C = new THREE.Color();
    pts.forEach((p, i) => { M.makeTranslation(p.x, 0.35, p.y); this.rwLights.setMatrixAt(i, M); this.rwLights.setColorAt(i, C.setRGB(...cols[i])); });
    this.rwLightCols = cols;
    this.group.add(this.rwLights);
    // approach lighting system with sequenced flashers ("the rabbit")
    const als = [];
    for (let k = 1; k <= 30; k++) als.push(this.at(-k * 30, 0));
    const alsBar = [];
    for (let k = 1; k <= 30; k++) for (let l = -6; l <= 6; l += 2) alsBar.push(this.at(-k * 30, l));
    this.alsBars = new THREE.InstancedMesh(new THREE.SphereGeometry(0.3, 6, 4), new THREE.MeshBasicMaterial({ color: 0xfff0c0 }), alsBar.length);
    alsBar.forEach((p, i) => { M.makeTranslation(p.x, 1.2, p.y); this.alsBars.setMatrixAt(i, M); });
    this.group.add(this.alsBars);
    const poleG = new THREE.CylinderGeometry(0.08, 0.08, 1.2, 4).translate(0, 0.6, 0);
    const poles = new THREE.InstancedMesh(poleG, new THREE.MeshStandardMaterial({ color: 0x777777 }), als.length);
    als.forEach((p, i) => { M.makeTranslation(p.x, 0, p.y); poles.setMatrixAt(i, M); });
    this.group.add(poles);
    this.rabbit = new THREE.InstancedMesh(new THREE.SphereGeometry(0.9, 8, 6), new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 1, blending: THREE.AdditiveBlending, depthWrite: false }), als.length);
    als.forEach((p, i) => { M.makeTranslation(p.x, 1.4, p.y); this.rabbit.setMatrixAt(i, M); this.rabbit.setColorAt(i, C.setRGB(0, 0, 0)); });
    this.group.add(this.rabbit);
    this.alsN = als.length;
    // PAPI (4 lights left of the touchdown point)
    this.papi = [];
    for (let k = 0; k < 4; k++) {
      const p = this.at(400, -(this.rwW / 2 + 15 + k * 9));
      const b = new THREE.Mesh(new THREE.BoxGeometry(2, 1, 1.2), new THREE.MeshBasicMaterial({ color: 0xff2020 }));
      b.position.set(p.x, 0.6, p.y); this.group.add(b); this.papi.push(b);
    }
  }

  _tower() {
    const p = this.tc.clone().addScaledVector(this.u, 520).addScaledVector(this.n, -40);
    const g = new THREE.Group();
    const mat = new THREE.MeshStandardMaterial({ color: 0xe0dcd4, roughness: 0.7 });
    const shaft = new THREE.Mesh(new THREE.CylinderGeometry(3.2, 4.2, 38, 16), mat); shaft.position.y = 19;
    const base = new THREE.Mesh(new THREE.BoxGeometry(18, 8, 14), mat); base.position.y = 4;
    const cabBelow = new THREE.Mesh(new THREE.CylinderGeometry(7.5, 4.5, 4, 8), mat); cabBelow.position.y = 39.5;
    const cab = new THREE.Mesh(new THREE.CylinderGeometry(8, 7.2, 5, 8), new THREE.MeshStandardMaterial({ color: 0x24404c, metalness: 0.7, roughness: 0.08, emissive: 0x203040, emissiveIntensity: 0.0 }));
    cab.position.y = 44; this.towerCab = cab;
    const roof = new THREE.Mesh(new THREE.CylinderGeometry(8.6, 8.6, 1, 8), mat); roof.position.y = 47;
    const ant = new THREE.Mesh(new THREE.CylinderGeometry(0.15, 0.15, 9, 5), new THREE.MeshStandardMaterial({ color: 0xcc2222 })); ant.position.y = 52;
    this.beacon = new THREE.Mesh(new THREE.SphereGeometry(0.6, 8, 6), new THREE.MeshBasicMaterial({ color: 0xff2020 })); this.beacon.position.y = 57;
    // rotating radar
    this.radar = new THREE.Mesh(new THREE.BoxGeometry(7, 1.6, 0.4), new THREE.MeshStandardMaterial({ color: 0xeeeeee })); this.radar.position.y = 49;
    for (const o of [shaft, base, cabBelow, cab, roof, ant, this.radar]) { o.castShadow = true; o.receiveShadow = true; g.add(o); }
    g.add(this.beacon);
    g.position.set(p.x, 0, p.y);
    this.group.add(g);
    this.towerPos = p;
    if (this.world) {
      // collision for the tower base
      const c = [[-9, -7], [9, -7], [9, 7], [-9, 7]];
      for (let i = 0; i < 4; i++) this.world.addWall(p.x + c[i][0], p.y + c[i][1], p.x + c[(i + 1) % 4][0], p.y + c[(i + 1) % 4][1]);
    }
  }

  _sign() {
    if (!this.terminal) return;
    const B = this.terminal;
    const t = textTex('MANAS  ·  МАНАС  ·  INTERNATIONAL AIRPORT', 2048, 160, null, '#ffffff', 'bold 96px Arial');
    const m = new THREE.MeshBasicMaterial({ map: t, transparent: true, color: 0xdfefff });
    this.signMat = m;
    const p = new THREE.Mesh(new THREE.PlaneGeometry(90, 7), m);
    // place on the landside face, facing +n
    let best = null, bd = -1e9;
    const pts = B.pts;
    for (let i = 0; i < pts.length / 2; i++) { const d = (pts[i * 2] - B.cx) * this.n.x + (pts[i * 2 + 1] - B.cz) * this.n.y; if (d > bd) { bd = d; best = i; } }
    const c = new THREE.Vector2(B.cx, B.cz).addScaledVector(this.n, bd + 1.5);
    p.position.set(c.x, B.h + 4.5, c.y);
    p.rotation.y = Math.atan2(this.n.x, this.n.y);
    this.group.add(p);
    void best;
  }

  _stands() {
    // OSM parking_position lines: stand end is the one farther from the runway
    const all = [];
    for (const s of this.map.stands) {
      const a = new THREE.Vector2(s[0], s[1]), b = new THREE.Vector2(s[2], s[3]);
      let st = a, lead = b;
      if (this.rel(b).y > this.rel(a).y) { st = b; lead = a; }
      const r = this.rel(st);
      if (r.y < 120 || r.y > 700 || r.x < 200 || r.x > this.len - 200) continue;
      if (all.some(o => o.p.distanceTo(st) < 48)) continue;
      const hd = Math.atan2(st.x - lead.x, st.y - lead.y);
      all.push({ p: st, lead, h: hd, d: st.distanceTo(this.tc), busy: null });
    }
    all.sort((a, b) => a.d - b.d);
    this.stands = all.slice(0, 12);
    if (this.stands.length < 4) {
      // fallback: line of stands in front of the terminal
      this.stands = [];
      for (let k = -3; k <= 3; k++) {
        const r = this.rel(this.tc);
        const p = this.at(r.x + k * 55, r.y - 90);
        this.stands.push({ p, lead: this.at(r.x + k * 55, r.y - 160), h: Math.atan2(this.n.x, this.n.y), busy: null });
      }
    }
  }

  _taxiLine() {
    // parallel taxiway offset: median lateral offset of taxiway points between runway and terminal
    const offs = [];
    for (const t of this.map.taxiways) for (let i = 0; i < t.pts.length; i += 2) {
      const r = this.rel(new THREE.Vector2(t.pts[i], t.pts[i + 1]));
      if (r.y > 90 && r.y < 260 && r.x > 300 && r.x < this.len - 300) offs.push(r.y);
    }
    offs.sort((a, b) => a - b);
    this.taxiOff = offs.length ? offs[Math.floor(offs.length / 2)] : 180;
  }

  _zoneMarker() {
    const g = new THREE.RingGeometry(4.5, 5.5, 40).rotateX(-Math.PI / 2);
    this.zoneMat = new THREE.MeshBasicMaterial({ color: 0x40c8ff, transparent: true, opacity: 0.8, side: THREE.DoubleSide, depthWrite: false });
    this.zone = new THREE.Mesh(g, this.zoneMat);
    this.zone.position.set(this.dropoff.x, 0.2, this.dropoff.y);
    const beam = new THREE.Mesh(new THREE.CylinderGeometry(4.8, 4.8, 14, 32, 1, true), new THREE.MeshBasicMaterial({ color: 0x40c8ff, transparent: true, opacity: 0.12, side: THREE.DoubleSide, depthWrite: false, blending: THREE.AdditiveBlending }));
    beam.position.y = 7; this.zone.add(beam);
    const icon = new THREE.Sprite(new THREE.SpriteMaterial({ map: textTex('✈ FLIGHTS  [E]', 512, 128, 'rgba(10,40,70,0.85)', '#fff', 'bold 60px Arial'), depthTest: false }));
    icon.scale.set(9, 2.25, 1); icon.position.y = 6; this.zone.add(icon);
    this.group.add(this.zone);
    // spotter point near the runway fence
    const sp = this.at(this.len * 0.55, this.taxiOff + 120);
    const nr = this.map.nearestRoad(sp.x, sp.y, 400);
    this.spotter = nr ? new THREE.Vector2(nr.x, nr.z) : sp;
    this.spotZone = new THREE.Mesh(g.clone(), new THREE.MeshBasicMaterial({ color: 0xffb020, transparent: true, opacity: 0.8, side: THREE.DoubleSide, depthWrite: false }));
    this.spotZone.position.set(this.spotter.x, 0.2, this.spotter.y);
    const icon2 = new THREE.Sprite(new THREE.SpriteMaterial({ map: textTex('📷 PLANE SPOTTING  [E]', 640, 128, 'rgba(70,40,0,0.85)', '#fff', 'bold 54px Arial'), depthTest: false }));
    icon2.scale.set(11, 2.2, 1); icon2.position.y = 6; this.spotZone.add(icon2);
    this.group.add(this.spotZone);
  }

  // ------------------------------------------------------------ planes
  _newPlane(wideProb = 0.2) {
    const al = AIRLINES[Math.floor(Math.random() * AIRLINES.length)];
    const wide = Math.random() < wideProb;
    const a = buildAircraft(al, wide);
    const mat = new THREE.MeshStandardMaterial({ vertexColors: true, metalness: 0.35, roughness: 0.35 });
    const g = new THREE.Group();
    const body = new THREE.Mesh(a.body, mat); body.castShadow = true;
    const gear = new THREE.Mesh(a.gear, mat); gear.castShadow = true;
    const inner = new THREE.Group(); inner.add(body, gear);
    g.add(inner);
    // lights: nav red/green, strobes, beacon, landing light
    const L = (c, r) => new THREE.Mesh(new THREE.SphereGeometry(r, 6, 4), new THREE.MeshBasicMaterial({ color: c, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false }));
    const navR = L(0xff2020, 0.5), navG = L(0x20ff40, 0.5), strL = L(0xffffff, 0.9), strR = L(0xffffff, 0.9), bcn = L(0xff3010, 0.6), land = L(0xfff6e0, 1.6);
    navR.position.set(-a.span, -0.4, -a.len * 0.02 - 7.4 * a.S); navG.position.set(a.span, -0.4, -a.len * 0.02 - 7.4 * a.S);
    strL.position.copy(navR.position); strR.position.copy(navG.position);
    bcn.position.set(0, 2.1 * a.S, -a.len * 0.1); land.position.set(0, -1.2 * a.S, a.len * 0.42);
    inner.add(navR, navG, strL, strR, bcn, land);
    // tail logo text
    const tt = textTex(al.code, 256, 128, null, '#ffffff', 'bold 100px Arial');
    for (const s of [-1, 1]) {
      const p = new THREE.Mesh(new THREE.PlaneGeometry(3.4 * a.S, 1.7 * a.S), new THREE.MeshBasicMaterial({ map: tt, transparent: true }));
      p.position.set(s * 0.45 * a.S, 2.0 * a.S + 4.5 * a.S, -a.len / 2 + 3.2 * a.S); p.rotation.y = s * Math.PI / 2;
      inner.add(p);
    }
    this.group.add(g);
    const pl = {
      g, inner, gear, a, al, wide, navR, navG, strL, strR, bcn, land,
      state: 'parked', x: 0, z: 0, y: 0, h: 0, pitch: 0, roll: 0, v: 0, t: 0, path: null, stand: null,
      flight: al.code + ' ' + (this.flightNo++), dest: DESTS[Math.floor(Math.random() * DESTS.length)],
      gearDown: 1, thrust: 0,
    };
    this.planes.push(pl);
    return pl;
  }

  _initPlanes() {
    // parked aircraft
    const k = Math.min(this.stands.length, 6);
    for (let i = 0; i < k; i++) {
      if (Math.random() < 0.2) continue;
      const pl = this._newPlane();
      this._park(pl, this.stands[i]);
      pl.t = 30 + Math.random() * 160;
    }
    // one arriving
    const ar = this._newPlane();
    this._startApproach(ar, 0.55);
    this.nextArrival = 70;
  }

  _park(pl, stand) {
    pl.state = 'parked'; pl.stand = stand; stand.busy = pl;
    pl.x = stand.p.x; pl.z = stand.p.y; pl.h = stand.h; pl.y = pl.a.groundY; pl.pitch = 0; pl.roll = 0; pl.v = 0; pl.gearDown = 1;
  }

  _startApproach(pl, frac = 1) {
    pl.state = 'approach';
    const d = 11000 * frac;
    const p = this.at(-d, 0);
    pl.x = p.x; pl.z = p.y; pl.h = this.heading; pl.v = 72;
    pl.y = Math.tan(3 * Math.PI / 180) * (d + 330) + pl.a.groundY;
    pl.gearDown = 1;
    this.board.unshift({ t: 'ARR', flight: pl.flight, city: pl.dest, status: 'Landing' });
  }

  _freeStand() {
    const free = this.stands.filter(s => !s.busy);
    return free.length ? free[Math.floor(Math.random() * free.length)] : null;
  }

  // waypoint path builder (ground)
  _taxiPathFromRunway(s, stand) {
    const pts = [];
    pts.push(this.at(s, 0));
    pts.push(this.at(s + 120, this.taxiOff * 0.5));
    const r = this.rel(stand.lead);
    pts.push(this.at(Math.max(200, Math.min(this.len - 200, r.x)) + (s < r.x ? -60 : 60), this.taxiOff));
    pts.push(this.at(r.x, this.taxiOff));
    pts.push(stand.lead.clone());
    pts.push(stand.p.clone());
    return pts;
  }
  _taxiPathToRunway(stand) {
    const pts = [];
    const back = stand.p.clone().addScaledVector(new THREE.Vector2(Math.sin(stand.h), Math.cos(stand.h)), -45);
    const r = this.rel(back);
    pts.push(back);
    pts.push(this.at(r.x, this.taxiOff));
    pts.push(this.at(160, this.taxiOff));
    pts.push(this.at(60, this.taxiOff * 0.5));
    pts.push(this.at(30, 0));
    pts.push(this.at(60, 0));
    return pts;
  }

  _followPath(pl, dt, speed) {
    if (!pl.path || pl.pi >= pl.path.length) return true;
    const tgt = pl.path[pl.pi];
    const dx = tgt.x - pl.x, dz = tgt.y - pl.z, d = Math.hypot(dx, dz);
    const want = Math.atan2(dx, dz);
    let dh = want - pl.h; dh = Math.atan2(Math.sin(dh), Math.cos(dh));
    const last = pl.pi === pl.path.length - 1;
    pl.v += ((last && d < 60 ? Math.max(1.5, d / 10) : (Math.abs(dh) > 0.5 ? 4 : speed)) - pl.v) * Math.min(1, dt * 0.8);
    pl.h += THREE.MathUtils.clamp(dh, -dt * 0.45, dt * 0.45);
    pl.x += Math.sin(pl.h) * pl.v * dt; pl.z += Math.cos(pl.h) * pl.v * dt;
    if (d < (last ? 1.2 : 14)) pl.pi++;
    return pl.pi >= pl.path.length;
  }

  // is the player blocking the runway?
  runwayIncursion(x, z) {
    const r = this.rel(new THREE.Vector2(x, z));
    return r.x > -60 && r.x < this.len + 60 && Math.abs(r.y) < this.rwW / 2 + 8;
  }

  update(dt, night, player, cinematicPlane) {
    this.time += dt;
    const t = this.time;
    // lights blink
    const strobe = (t % 1.2) < 0.08 ? 1 : 0;
    const beacon = (t % 1.0) < 0.15 ? 1 : 0.1;
    this.beacon.material.color.setScalar(0).setRGB(beacon, 0.05, 0.03);
    this.radar.rotation.y = t * 1.6;
    this.rwLights.visible = night > 0.2 || true;
    this.rwLights.material.color.setScalar(0.4 + night * 1.6);
    this.alsBars.material.color.setScalar(0.3 + night * 1.5);
    // rabbit: sequenced flashing towards the threshold, twice per second
    const ph = (t * 2) % 1;
    const C = new THREE.Color();
    for (let i = 0; i < this.alsN; i++) {
      const on = Math.abs((1 - ph) * this.alsN - i) < 1 ? 2.5 : 0;
      this.rabbit.setColorAt(i, C.setRGB(on, on, on));
    }
    this.rabbit.instanceColor.needsUpdate = true;
    this.towerCab.material.emissiveIntensity = night * 0.8;
    this.zoneMat.opacity = 0.5 + 0.4 * Math.sin(t * 4);
    // PAPI: two white two red when on slope (show static)
    this.papi.forEach((b, i) => b.material.color.setHex(i < 2 ? 0xffffff : 0xff2020));

    const incursion = player && this.runwayIncursion(player.x, player.z);
    // schedule
    this.nextArrival -= dt;
    if (this.nextArrival <= 0) {
      const busyRwy = this.planes.some(p => ['approach', 'landing', 'takeoff', 'lineup'].includes(p.state) && !p.cine);
      const free = this._freeStand();
      if (!busyRwy && free && this.planes.filter(p => !p.cine).length < 9) { const p = this._newPlane(); this._startApproach(p); }
      this.nextArrival = 80 + Math.random() * 60;
    }
    for (let i = this.planes.length - 1; i >= 0; i--) {
      const pl = this.planes[i];
      if (pl === cinematicPlane) continue; // driven by the flight controller
      this._updatePlane(pl, dt, incursion);
      if (pl.dead) { this.group.remove(pl.g); this.planes.splice(i, 1); continue; }
      this._pose(pl, dt, night, strobe);
    }
    if (cinematicPlane) this._pose(cinematicPlane, dt, night, strobe);
    this._updateVehicles(dt);
    this.board = this.board.slice(0, 8);
  }

  _updatePlane(pl, dt, incursion) {
    const gy = pl.a.groundY;
    switch (pl.state) {
      case 'parked': {
        pl.t -= dt; pl.thrust = 0;
        if (pl.t <= 0) {
          const busy = this.planes.some(p => ['takeoff', 'lineup', 'taxiOut', 'pushback'].includes(p.state) && p !== pl && !p.cine);
          if (!busy) {
            pl.state = 'pushback'; pl.pb = 0;
            this.board.unshift({ t: 'DEP', flight: pl.flight, city: pl.dest, status: 'Departing' });
          } else pl.t = 10;
        }
        break;
      }
      case 'pushback': {
        pl.thrust = 0.1;
        pl.pb += dt;
        const sp = 1.6;
        // reverse straight back, then rotate so nose points along the taxiway
        if (pl.pb < 26) { pl.x -= Math.sin(pl.h) * sp * dt; pl.z -= Math.cos(pl.h) * sp * dt; }
        else {
          if (pl.stand) { pl.stand.busy = null; }
          pl.path = this._taxiPathToRunway(pl.stand || { p: new THREE.Vector2(pl.x, pl.z), h: pl.h });
          pl.path.shift(); pl.pi = 0; pl.state = 'taxiOut'; pl.stand = null;
        }
        break;
      }
      case 'taxiOut': {
        pl.thrust = 0.25;
        if (this._followPath(pl, dt, 9)) { pl.state = 'lineup'; pl.t = 4; }
        break;
      }
      case 'lineup': {
        pl.v *= 0.9; pl.thrust = 0.3;
        let dh = this.heading - pl.h; dh = Math.atan2(Math.sin(dh), Math.cos(dh)); pl.h += dh * Math.min(1, dt);
        pl.t -= dt;
        if (pl.t <= 0 && !incursion && !this.planes.some(p => p.state === 'landing' || (p.state === 'approach' && this.rel(new THREE.Vector2(p.x, p.z)).x > -3500))) { pl.state = 'takeoff'; }
        break;
      }
      case 'takeoff': {
        pl.thrust = 1;
        pl.v += 2.3 * dt;
        pl.h += Math.atan2(Math.sin(this.heading - pl.h), Math.cos(this.heading - pl.h)) * dt;
        pl.x += Math.sin(pl.h) * pl.v * dt; pl.z += Math.cos(pl.h) * pl.v * dt;
        if (pl.v > 70) pl.pitch = Math.min(0.16, pl.pitch + dt * 0.06);
        if (pl.v > 76) { pl.y += Math.max(0, (pl.v - 76)) * dt * 0.35 + pl.pitch * pl.v * dt * 0.6; }
        pl.y = Math.max(gy, pl.y);
        if (pl.y > gy + 30) pl.gearDown = Math.max(0, pl.gearDown - dt * 0.4);
        if (pl.y > gy + 150) { pl.state = 'climb'; }
        break;
      }
      case 'climb': {
        pl.thrust = 0.9;
        pl.v = Math.min(120, pl.v + dt * 1.5);
        pl.y += 11 * dt;
        pl.roll = Math.min(0.3, pl.roll + dt * 0.05) * (pl.y > gy + 500 ? 1 : 0);
        pl.h += pl.roll * dt * 0.08;
        pl.x += Math.sin(pl.h) * pl.v * dt; pl.z += Math.cos(pl.h) * pl.v * dt;
        pl.gearDown = Math.max(0, pl.gearDown - dt * 0.3);
        if (pl.y > 2600) pl.dead = true;
        break;
      }
      case 'approach': {
        pl.thrust = 0.35;
        const r = this.rel(new THREE.Vector2(pl.x, pl.z));
        // runway blocked by the player -> go-around!
        if (incursion && r.x > -4000 && r.x < 600 && !pl.ga) {
          pl.ga = true; pl.state = 'goaround'; this.goAround = true;
          this.board.unshift({ t: 'ARR', flight: pl.flight, city: pl.dest, status: 'GO-AROUND' });
          break;
        }
        const glide = Math.tan(3 * Math.PI / 180) * (330 - r.x) + gy;
        pl.y += (glide - pl.y) * Math.min(1, dt * 1.5);
        pl.v += (68 - pl.v) * dt * 0.2;
        const lat = r.y;
        pl.h = this.heading - THREE.MathUtils.clamp(lat * 0.004, -0.2, 0.2);
        pl.pitch = 0.04;
        pl.x += Math.sin(pl.h) * pl.v * dt; pl.z += Math.cos(pl.h) * pl.v * dt;
        if (pl.y < gy + 16) pl.state = 'flare';
        break;
      }
      case 'flare': {
        pl.thrust = 0.1;
        pl.pitch = Math.min(0.1, pl.pitch + dt * 0.08);
        pl.y = Math.max(gy, pl.y - 2.2 * dt);
        pl.v -= 1.2 * dt;
        pl.x += Math.sin(pl.h) * pl.v * dt; pl.z += Math.cos(pl.h) * pl.v * dt;
        if (pl.y <= gy + 0.01) { pl.state = 'landing'; pl.touch = 1.5; this.onTouchdown && this.onTouchdown(pl); }
        break;
      }
      case 'landing': {
        pl.thrust = pl.v > 30 ? 0.8 : 0.15; // reverse thrust roar
        pl.pitch = Math.max(0, pl.pitch - dt * 0.05);
        pl.v = Math.max(14, pl.v - 2.4 * dt);
        pl.x += Math.sin(pl.h) * pl.v * dt; pl.z += Math.cos(pl.h) * pl.v * dt;
        if (pl.touch > 0) pl.touch -= dt;
        if (pl.v <= 14.5) {
          const stand = this._freeStand();
          const r = this.rel(new THREE.Vector2(pl.x, pl.z));
          if (stand) {
            stand.busy = pl; pl.stand = stand;
            pl.path = this._taxiPathFromRunway(r.x, stand); pl.path.shift(); pl.pi = 0; pl.state = 'taxiIn';
            const b = this.board.find(b => b.flight === pl.flight); if (b) b.status = 'Landed';
          } else { pl.state = 'climb'; }
        }
        break;
      }
      case 'goaround': {
        pl.thrust = 1;
        pl.v = Math.min(95, pl.v + dt * 3);
        pl.pitch = Math.min(0.14, pl.pitch + dt * 0.05);
        pl.y += 12 * dt;
        pl.x += Math.sin(pl.h) * pl.v * dt; pl.z += Math.cos(pl.h) * pl.v * dt;
        pl.gearDown = Math.max(0, pl.gearDown - dt * 0.25);
        if (pl.y > 900) pl.dead = true;
        break;
      }
      case 'taxiIn': {
        pl.thrust = 0.2;
        if (this._followPath(pl, dt, 10)) {
          this._park(pl, pl.stand); pl.t = 90 + Math.random() * 120;
          pl.dest = DESTS[Math.floor(Math.random() * DESTS.length)];
          pl.flight = pl.al.code + ' ' + (this.flightNo++);
        }
        break;
      }
    }
  }

  _pose(pl, dt, night, strobe) {
    pl.g.position.set(pl.x, pl.y - pl.a.groundY + pl.a.groundY, pl.z);
    pl.g.position.y = pl.y;
    pl.g.rotation.set(0, pl.h, 0);
    pl.inner.rotation.set(-pl.pitch, 0, pl.roll);
    pl.gear.visible = pl.gearDown > 0.05;
    pl.gear.scale.y = Math.max(0.05, pl.gearDown);
    pl.gear.position.y = (1 - pl.gearDown) * 1.5;
    const lit = pl.state !== 'parked';
    pl.navR.visible = pl.navG.visible = true;
    pl.strL.visible = pl.strR.visible = lit && strobe > 0;
    pl.bcn.visible = lit && (this.time % 1.3) < 0.2;
    pl.land.visible = ['approach', 'flare', 'landing', 'takeoff', 'climb', 'goaround', 'scenic'].includes(pl.state);
    pl.land.scale.setScalar(night > 0.3 ? 2.5 : 1);
  }

  // ------------------------------------------------------------ ground service vehicles
  _serviceVehicles() {
    const loops = [];
    for (let i = 0; i < Math.min(4, this.stands.length); i++) {
      const s = this.stands[i];
      const f = new THREE.Vector2(Math.sin(s.h), Math.cos(s.h));
      const side = new THREE.Vector2(f.y, -f.x);
      loops.push([s.p.clone().addScaledVector(side, 14), s.p.clone().addScaledVector(side, 14).addScaledVector(f, -30), s.p.clone().addScaledVector(side, -14).addScaledVector(f, -30), s.p.clone().addScaledVector(side, -14)]);
    }
    const kinds = [['truck', 0xf2c200], ['van', 0xf2c200], ['hatch', 0xffcc00], ['truck', 0xdddddd]];
    loops.forEach((loop, i) => {
      const [type, col] = kinds[i % kinds.length];
      const v = buildVehicle(type, {});
      const mat = new THREE.MeshStandardMaterial({ color: col, vertexColors: true, roughness: 0.5 });
      const g = new THREE.Group();
      g.add(new THREE.Mesh(v.paint, mat), new THREE.Mesh(v.detail, new THREE.MeshStandardMaterial({ vertexColors: true })));
      const flash = new THREE.Mesh(new THREE.SphereGeometry(0.2, 6, 4), new THREE.MeshBasicMaterial({ color: 0xffa000 }));
      flash.position.y = v.spec.roof[2][1] + 0.2; g.add(flash);
      g.scale.setScalar(type === 'truck' ? 0.75 : 1);
      g.children.forEach(c => c.castShadow = true);
      this.group.add(g);
      this.vehicles.push({ g, loop, i: 0, x: loop[0].x, z: loop[0].y, h: 0, flash, wait: Math.random() * 10 });
    });
  }
  _updateVehicles(dt) {
    for (const v of this.vehicles) {
      v.flash.visible = (this.time * 2 + v.i) % 1 < 0.5;
      if (v.wait > 0) { v.wait -= dt; continue; }
      const t = v.loop[v.i];
      const dx = t.x - v.x, dz = t.y - v.z, d = Math.hypot(dx, dz);
      if (d < 1) { v.i = (v.i + 1) % v.loop.length; if (v.i === 0) v.wait = 6 + Math.random() * 10; continue; }
      const want = Math.atan2(dx, dz);
      let dh = want - v.h; dh = Math.atan2(Math.sin(dh), Math.cos(dh));
      v.h += THREE.MathUtils.clamp(dh, -dt * 1.5, dt * 1.5);
      const sp = Math.abs(dh) > 0.6 ? 2 : 5;
      v.x += Math.sin(v.h) * sp * dt; v.z += Math.cos(v.h) * sp * dt;
      v.g.position.set(v.x, 0.03, v.z); v.g.rotation.y = v.h;
    }
  }

  // nearest moving aircraft noise level (0..1) at a position
  noiseAt(x, z, y = 1) {
    let best = 0;
    for (const p of this.planes) {
      const d = Math.hypot(p.x - x, p.z - z, (p.y - y) * 1);
      const lvl = (0.15 + p.thrust) / (1 + (d / 220) ** 2);
      if (lvl > best) best = lvl;
    }
    return Math.min(1, best);
  }

  // ------------------------------------------------------------ scenic flight
  createScenicFlight() {
    const pl = this._newPlane(0);
    pl.cine = true;
    const stand = this._freeStand() || this.stands[0];
    pl.x = stand.p.x; pl.z = stand.p.y; pl.h = stand.h; pl.y = pl.a.groundY;
    pl.flight = 'AT 1991'; pl.dest = 'Bishkek scenic';
    const gy = pl.a.groundY;
    // airborne route: climb out, turn to the city, over Ala-Too Square, along the mountains, back to finals
    const V = (p, y) => new THREE.Vector3(p.x, y, p.y);
    const air = [
      V(this.at(this.len - 700, 0), gy + 60), V(this.at(this.len + 3000, 200), 380), V(this.at(this.len + 7000, 1800), 560),
      new THREE.Vector3(-3500, 520, -9000), new THREE.Vector3(-900, 430, -2600), new THREE.Vector3(150, 380, 0),
      new THREE.Vector3(1400, 390, 1600), new THREE.Vector3(400, 420, 4200), new THREE.Vector3(-3000, 480, 4000),
      new THREE.Vector3(-6200, 560, -1500), new THREE.Vector3(-9500, 620, -9000), V(this.at(-13500, -2500), 700),
      V(this.at(-9500, 0), 520), V(this.at(-6000, 0), Math.tan(3 * Math.PI / 180) * 6330 + gy),
    ];
    const curve = new THREE.CatmullRomCurve3(air, false, 'centripetal', 0.5);
    return { plane: pl, stand, curve, stage: 'pushback', t: 0, s: 0 };
  }

  // drives the scenic flight; returns true when finished
  updateScenic(F, dt) {
    const pl = F.plane, gy = pl.a.groundY;
    F.t += dt;
    switch (F.stage) {
      case 'pushback':
        pl.state = 'pushback'; pl.thrust = 0.1;
        pl.x -= Math.sin(pl.h) * 2.4 * dt; pl.z -= Math.cos(pl.h) * 2.4 * dt;
        if (F.t > 12) { F.stage = 'taxi'; pl.path = this._taxiPathToRunway({ p: new THREE.Vector2(pl.x, pl.z), h: pl.h }); pl.path.shift(); pl.pi = 0; }
        break;
      case 'taxi':
        pl.state = 'taxiOut'; pl.thrust = 0.25;
        if (this._followPath(pl, dt, 16)) { F.stage = 'roll'; pl.v = 4; }
        break;
      case 'roll': {
        pl.state = 'takeoff'; pl.thrust = 1;
        let dh = this.heading - pl.h; dh = Math.atan2(Math.sin(dh), Math.cos(dh)); pl.h += dh * Math.min(1, dt * 2);
        pl.v += 2.6 * dt;
        pl.x += Math.sin(pl.h) * pl.v * dt; pl.z += Math.cos(pl.h) * pl.v * dt;
        if (pl.v > 70) pl.pitch = Math.min(0.15, pl.pitch + dt * 0.07);
        if (pl.v > 76) pl.y += (pl.v - 74) * dt * 0.5;
        const r = this.rel(new THREE.Vector2(pl.x, pl.z));
        if (pl.y > gy + 55 || r.x > this.len - 700) {
          F.stage = 'air'; F.s = 0;
          // re-anchor first point to current position for a smooth join
          F.curve.points[0].set(pl.x, pl.y, pl.z);
          F.curve.updateArcLengths && F.curve.updateArcLengths();
          F.L = F.curve.getLength();
        }
        break;
      }
      case 'air': {
        pl.state = 'scenic'; pl.thrust = 0.7;
        pl.v += (88 - pl.v) * dt * 0.3;
        F.s += pl.v * dt;
        const u = Math.min(1, F.s / F.L);
        const p = F.curve.getPointAt(u), tg = F.curve.getTangentAt(u);
        const p2 = F.curve.getTangentAt(Math.min(1, u + 0.01));
        pl.x = p.x; pl.y = p.y; pl.z = p.z;
        const nh = Math.atan2(tg.x, tg.z);
        const turn = Math.atan2(p2.x * tg.z - p2.z * tg.x, p2.x * tg.x + p2.z * tg.z);
        pl.h = nh;
        pl.roll += (THREE.MathUtils.clamp(-turn * 18, -0.5, 0.5) - pl.roll) * Math.min(1, dt * 1.5);
        pl.pitch += (Math.asin(THREE.MathUtils.clamp(tg.y, -0.3, 0.3)) * 1.2 + 0.03 - pl.pitch) * Math.min(1, dt);
        pl.gearDown = u < 0.1 ? Math.max(0, pl.gearDown - dt * 0.3) : (u > 0.92 ? Math.min(1, pl.gearDown + dt * 0.3) : pl.gearDown);
        if (u >= 1) { F.stage = 'final'; pl.state = 'approach'; pl.roll = 0; }
        break;
      }
      case 'final': {
        pl.gearDown = Math.min(1, pl.gearDown + dt * 0.3);
        const prev = pl.state;
        this._updatePlane(pl, dt, false);
        if (pl.state === 'landing' && prev !== 'landing') F.touch = true;
        if (pl.state === 'taxiIn' || pl.state === 'climb') { F.stage = 'taxiIn'; if (pl.stand) pl.stand.busy = null; pl.state = 'taxiIn'; }
        break;
      }
      case 'taxiIn': {
        pl.thrust = 0.2;
        if (this._followPath(pl, dt, 16) || !pl.path) { F.stage = 'done'; }
        break;
      }
      case 'done':
        return true;
    }
    pl.roll *= F.stage === 'air' ? 1 : Math.exp(-dt * 2);
    return false;
  }

  endScenic(F) {
    const pl = F.plane;
    if (pl.stand) pl.stand.busy = null;
    this.group.remove(pl.g);
    this.planes.splice(this.planes.indexOf(pl), 1);
  }

  // airborne camera points for the cinematic (position & look target)
  scenicCamera(F, mode, out, look) {
    const pl = F.plane;
    const fx = Math.sin(pl.h), fz = Math.cos(pl.h);
    const S = pl.a.S;
    if (mode === 0) { // chase
      out.set(pl.x - fx * 70 * S, pl.y + 16 * S, pl.z - fz * 70 * S);
      look.set(pl.x + fx * 20, pl.y + 2, pl.z + fz * 20);
    } else if (mode === 1) { // window seat (looking over the wing)
      const rx = -fz, rz = fx; // right side
      out.set(pl.x - rx * 2.3 * S + fx * 2, pl.y + 0.6 * S, pl.z - rz * 2.3 * S + fz * 2);
      look.set(pl.x - rx * 60 + fx * -10, pl.y - 30, pl.z - rz * 60 + fz * -10);
    } else if (mode === 2) { // cockpit
      out.set(pl.x + fx * (pl.a.len / 2 - 3), pl.y + 1.4 * S, pl.z + fz * (pl.a.len / 2 - 3));
      look.set(pl.x + fx * 300, pl.y - 30 + Math.sin(pl.pitch) * 300, pl.z + fz * 300);
    } else { // tower / ground cinematic
      if (!F.camAnchor || F.camAnchor.distanceTo(new THREE.Vector3(pl.x, pl.y, pl.z)) > 1600) {
        F.camAnchor = new THREE.Vector3(pl.x + fx * 900 + (Math.random() - 0.5) * 400, Math.max(30, pl.y * 0.6), pl.z + fz * 900 + (Math.random() - 0.5) * 400);
      }
      out.copy(F.camAnchor); look.set(pl.x, pl.y, pl.z);
    }
  }
}
