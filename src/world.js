// Chunked world renderer: builds geometry lazily around the camera from the OSM extract.
import * as THREE from 'three';
import { CHUNK, LANE_W, mulberry, pointInPoly, ck } from './data.js';
import { GB, ribbon, disc, hexColor, polyNormals, subPolyline, cumLen } from './geo.js';
import { buildingMaterial, groundMaterial, markingMaterial, U } from './materials.js';
import { treeAtlas, treeGeometries, treeGeometriesLow, lampGeometry, lampGlowGeometry, busStopGeometry, benchGeometry } from './props.js';

const PAL = {
  house: [0xe8e2d4, 0xf0ead8, 0xd9c9a8, 0xb5654a, 0xc9bfae, 0xe6dcc0, 0xa8553e, 0xd8d0c8],
  panel: [0xd8cbb0, 0xcfc6b8, 0xe0d5c0, 0xd9b8a8, 0xb8c4c8, 0xb0aca6, 0xd8c890, 0xe3dccf, 0xc4b49c, 0xcab9a0],
  comm: [0x8a9aa8, 0xc8c0b0, 0x5a6a78, 0xd2d0cc, 0x7f8f8a, 0xb7a68f],
  ind: [0xa09a90, 0x8c8c88, 0x9a9282, 0xb0aaa0],
  pub: [0xe6e2da, 0xc99a88, 0xdcd4c4, 0xe9e4d8, 0xc7a18e],
  roofHouse: [0x3f6e4a, 0x8a3a2e, 0x3a5a7a, 0x7a7a78, 0x9a4a32, 0x5a6a5a, 0xa0a4a8],
};
const AREA_STYLE = {
  // type: [material key, color, y]
  0: ['grass', 0xffffff, 0.012], 1: ['grass', 0xf0c8d0, 0.014], 2: ['grass', 0xa8c098, 0.013], 3: ['water', 0x3a6a80, 0.006],
  4: ['grass', 0xb8f0a0, 0.015], 5: ['dirt', 0xf0e0c0, 0.015], 6: ['field', 0xffffff, 0.010], 7: ['grass', 0xd0d0c0, 0.012],
  8: ['dirt', 0xc8c4bc, 0.011], 9: ['dirt', 0xd8b890, 0.012], 10: ['asphalt', 0xd8d8d8, 0.018], 11: ['paving', 0xffffff, 0.02],
  12: ['concrete', 0xffffff, 0.021],
};
const TREES_PER_M2 = { 0: 1 / 140, 2: 1 / 45, 7: 1 / 120, 1: 0 };

export class World {
  constructor(scene, map, T) {
    this.scene = scene; this.map = map; this.T = T;
    this.root = new THREE.Group(); scene.add(this.root);
    this.mat = {
      building: buildingMaterial(T),
      road: groundMaterial(T, T.asphalt, 7, 0xffffff, 0.92, 0.1),
      mark: markingMaterial(),
      paving: Object.assign(groundMaterial(T, T.paving, 3.2, 0xb8b4ac, 0.9, 0.75), { side: THREE.DoubleSide }),
      grass: groundMaterial(T, T.grass, 6, 0xffffff, 1),
      dirt: groundMaterial(T, T.dirt, 7, 0xffffff, 1),
      field: groundMaterial(T, T.field, 14, 0xffffff, 1),
      asphalt: groundMaterial(T, T.asphalt, 7, 0xffffff, 0.92, 0.5),
      concrete: groundMaterial(T, T.concrete, 20, 0xc8c8c4, 0.85, 0.6),
      water: new THREE.MeshStandardMaterial({ color: 0x5a8090, roughness: 0.06, metalness: 0.4, vertexColors: true }),
      tree: (() => { const m = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.85, map: treeAtlas(), alphaTest: 0.42, side: THREE.DoubleSide }); m.onBeforeCompile = (sh) => { sh.uniforms.uSnow = U.uSnow; sh.fragmentShader = sh.fragmentShader.replace('#include <common>', '#include <common>\nuniform float uSnow;').replace('float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;', 'float faceDirection = 1.0;').replace('#include <color_fragment>', '#include <color_fragment>\n diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.7,0.72,0.76), uSnow * 0.3);'); }; return m; })(),
      lamp: new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.5, metalness: 0.5 }),
      lampGlow: new THREE.MeshStandardMaterial({ color: 0x222222, emissive: 0xffc070, emissiveIntensity: 0 }),
      prop: new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.6 }),
      rail: new THREE.MeshStandardMaterial({ color: 0x777777, roughness: 0.3, metalness: 0.8 }),
    };
    this.geoTrees = treeGeometries(); this.geoTreesLow = treeGeometriesLow();
    this.geoLamp = lampGeometry(); this.geoLampGlow = lampGlowGeometry();
    this.geoBus = busStopGeometry(); this.geoBench = benchGeometry();
    this.live = new Map();
    this.queue = [];
    this.radius = 1500;
    this.collision = new Map(); // grid of wall segments
    this.CG = 20;
    this._buildGround();
    this._buildGlobalAreas();
    this.lampLights = [];
  }

  _buildGround() {
    const g = new THREE.PlaneGeometry(9000, 9000, 1, 1).rotateX(-Math.PI / 2);
    const n = g.attributes.position.count, c = new Float32Array(n * 3).fill(1);
    g.setAttribute('color', new THREE.BufferAttribute(c, 3));
    const m = groundMaterial(this.T, this.T.dirt, 9, 0xb4b8a0, 1);
    this.ground = new THREE.Mesh(g, m);
    this.ground.receiveShadow = true;
    this.ground.renderOrder = -2;
    this.scene.add(this.ground);
    // second, greener layer blended in the shader by world noise would be costly; use a big grass overlay with low alpha patches instead
  }

  _buildGlobalAreas() {
    const groups = {};
    for (const A of this.map.globalAreas) this._area(groups, A, null);
    for (const k in groups) {
      const m = new THREE.Mesh(groups[k].build(), this.mat[k]);
      m.receiveShadow = true; this.root.add(m);
    }
  }

  update(cam, dt, forceAll = false) {
    const cx = cam.x, cz = cam.z;
    this.ground.position.set(Math.round(cx / 50) * 50, 0, Math.round(cz / 50) * 50);
    const R = this.radius;
    const c0x = Math.floor((cx - R) / CHUNK), c1x = Math.floor((cx + R) / CHUNK);
    const c0z = Math.floor((cz - R) / CHUNK), c1z = Math.floor((cz + R) / CHUNK);
    const want = [];
    for (let x = c0x; x <= c1x; x++) for (let z = c0z; z <= c1z; z++) {
      const k = ck(x, z);
      if (this.live.has(k)) continue;
      const c = this.map.chunks.get(k);
      if (!c) continue;
      const d = Math.hypot((x + 0.5) * CHUNK - cx, (z + 0.5) * CHUNK - cz);
      if (d < R) want.push([d, c]);
    }
    want.sort((a, b) => a[0] - b[0]);
    const t0 = performance.now();
    for (const [d, c] of want) {
      this._buildChunk(c);
      if (!forceAll && performance.now() - t0 > (this.radius > 2000 ? 14 : (this.buildBudget || 8))) break;
    }
    // ---- far city: simplified building meshes out to farRadius (whole skyline visible)
    const FR = this.farRadius || 0;
    if (FR > R) {
      if (!this.far) { this.far = new Map(); this.farRoot = new THREE.Group(); this.scene.add(this.farRoot); }
      if (!this._farScan || performance.now() - this._farScan > 400) {
        this._farScan = performance.now();
        const f0x = Math.floor((cx - FR) / CHUNK), f1x = Math.floor((cx + FR) / CHUNK), f0z = Math.floor((cz - FR) / CHUNK), f1z = Math.floor((cz + FR) / CHUNK);
        const fw = [];
        for (let x = f0x; x <= f1x; x++) for (let z = f0z; z <= f1z; z++) {
          const k = ck(x, z); if (this.far.has(k)) continue;
          const c = this.map.chunks.get(k); if (!c || !c.buildings.length) continue;
          const d = Math.hypot((x + 0.5) * CHUNK - cx, (z + 0.5) * CHUNK - cz);
          if (d < FR && d > R - 600) fw.push([d, c]);
        }
        fw.sort((a, b) => a[0] - b[0]);
        this._farQueue = fw;
      }
      const t1 = performance.now();
      while (this._farQueue && this._farQueue.length && performance.now() - t1 < (forceAll ? 50 : 4)) {
        const [, c] = this._farQueue.shift();
        if (!this.far.has(c.key)) this._buildFar(c);
      }
      for (const [k, F] of this.far) {
        const d = Math.hypot(F.x - cx, F.z - cz);
        if (d > FR + 800) { this.farRoot.remove(F.mesh); F.mesh.geometry.dispose(); this.far.delete(k); continue; }
        const L = this.live.get(k);
        F.mesh.visible = !(L && L.group.visible) && d < FR + 200;
      }
    } else if (this.far && this.far.size) { for (const F of this.far.values()) { this.farRoot.remove(F.mesh); F.mesh.geometry.dispose(); } this.far.clear(); }

    // LOD visibility + disposal
    for (const [k, L] of this.live) {
      const d = Math.hypot(L.x - cx, L.z - cz);
      if (d > R + 900) { this._dispose(k, L); continue; }
      L.group.visible = d < R + 300;
      if (L.detail) L.detail.visible = d < 650;
      if (L.trees) { L.trees.visible = d < 280; L.treesLow.visible = d >= 280 && d < 1400; }
      if (L.marks) L.marks.visible = d < 700;
    }
  }

  _buildFar(c) {
    const rnd = mulberry(c.key * 7 + 13);
    const gb = new GB({ aInfo: 2, aWin: 2 });
    for (const B of c.buildings) {
      const big = B.h >= 6 || (B.x1 - B.x0) * (B.z1 - B.z0) > 160;
      if (!big && rnd() < 0.6) continue;
      this._building(gb, B, rnd, false);
    }
    const x = (c.cx + 0.5) * CHUNK, z = (c.cz + 0.5) * CHUNK;
    if (gb.empty) { this.far.set(c.key, { mesh: new THREE.Group(), x, z }); this.far.get(c.key).mesh.geometry = { dispose() { } }; return; }
    const mesh = new THREE.Mesh(gb.build(), this.mat.building);
    mesh.matrixAutoUpdate = false;
    this.farRoot.add(mesh);
    this.far.set(c.key, { mesh, x, z });
  }

  _dispose(k, L) {
    this.root.remove(L.group);
    L.group.traverse(o => { if (o.geometry && !o.userData.shared) o.geometry.dispose(); if (o.isInstancedMesh) o.dispose(); });
    if (L.signTex) { L.signTex.dispose(); L.signMat.dispose(); }
    this.live.delete(k);
  }

  addWall(x0, z0, x1, z1) {
    const G = this.CG;
    const gx0 = Math.floor(Math.min(x0, x1) / G), gx1 = Math.floor(Math.max(x0, x1) / G);
    const gz0 = Math.floor(Math.min(z0, z1) / G), gz1 = Math.floor(Math.max(z0, z1) / G);
    for (let gx = gx0; gx <= gx1; gx++) for (let gz = gz0; gz <= gz1; gz++) {
      const k = ck(gx, gz); let a = this.collision.get(k); if (!a) this.collision.set(k, a = []);
      a.push(x0, z0, x1, z1);
    }
  }

  _buildChunk(c) {
    const map = this.map;
    const rnd = mulberry(c.key * 7 + 13);
    const group = new THREE.Group();
    const L = { group, x: (c.cx + 0.5) * CHUNK, z: (c.cz + 0.5) * CHUNK };
    this.live.set(c.key, L);
    if (!c.collided) { c.collided = true; var addCol = true; }

    // ---------------- buildings
    const bg = new GB({ aInfo: 2, aWin: 2 });
    for (const B of c.buildings) this._building(bg, B, rnd, addCol);
    if (!bg.empty) {
      const m = new THREE.Mesh(bg.build(), this.mat.building);
      m.castShadow = true; m.receiveShadow = true; group.add(m);
    }

    // ---------------- real shop / cafe / pharmacy signboards from OSM
    if (c.signs.length) this._signs(c, group, L);

    // ---------------- roads, sidewalks, markings
    const rg = new GB(), sg = new GB(), mg = new GB({ aDash: 2 });
    const W = [1, 1, 1], Y = hexColor(0xe8c040);
    const WH = [0.92, 0.92, 0.9];
    for (const e of c.edges) {
      const y = 0.03 + (6 - e.cls) * 0.005;
      ribbon(rg, e.pts, -e.w / 2, e.w / 2, y, [1, 1, 1]);
      const trimA = e.na.deg > 1 ? e.na.maxW / 2 + 1.5 : 0, trimB = e.nb.deg > 1 ? e.nb.maxW / 2 + 1.5 : 0;
      if (e.len - trimA - trimB < 2) continue;
      const sub = subPolyline(e.pts, e.cum, trimA, e.len - trimB);
      const my = y + 0.004;
      const line = (off, type, width = 0.15, col = WH) => ribbon(mg, sub, off - width / 2, off + width / 2, my, col, (d) => [d, type]);
      if (e.cls <= 4) {
        if (!e.ow) {
          if (e.lanes >= 2) { line(-0.12, 0); line(0.12, 0); for (let l = 1; l < e.lanes; l++) { line(l * LANE_W, 1); line(-l * LANE_W, 1); } }
          else if (e.cls <= 4 && e.w >= 6) line(0, 1);
        } else for (let l = 1; l < e.lanes; l++) line(-e.w / 2 + l * LANE_W, 1);
        if (e.cls <= 2) { line(e.w / 2 - 0.35, 0, 0.12); line(-e.w / 2 + 0.35, 0, 0.12); }
      }
      // stop lines at traffic lights
      for (const s of e.signals) {
        const o = {}; map.sample(e, s.dir, s.stop, 0, o);
        const a0 = s.dir ? -1 : 1;
        const half = e.ow ? e.w / 2 : e.w / 2;
        const lo = e.ow ? -half : 0, hi = half;
        const px = -o.dz, pz = o.dx;
        const q = [o.x + px * lo, o.z + pz * lo, o.x + px * hi, o.z + pz * hi];
        // a short ribbon perpendicular: build as polyline across, width 0.45 along travel
        ribbon(mg, q, -0.25, 0.25, my + 0.001, WH, () => [0, 0]);
        // turn orientation: ribbon's right normal is along -travel, fine either way (flat)
        void a0;
      }
      // sidewalks + curbs
      if (e.cls >= 1 && e.cls <= 4 && e.w >= 5) {
        const ta = e.na.deg > 1 ? e.na.maxW / 2 + 2.5 : 0, tb = e.nb.deg > 1 ? e.nb.maxW / 2 + 2.5 : 0;
        if (e.len - ta - tb > 3) {
          const sp = subPolyline(e.pts, e.cum, ta, e.len - tb);
          const sw = e.cls <= 2 ? 3.4 : 2.6;
          for (const side of [-1, 1]) {
            const o0 = side > 0 ? e.w / 2 : -e.w / 2 - sw, o1 = side > 0 ? e.w / 2 + sw : -e.w / 2;
            ribbon(sg, sp, o0, o1, 0.15, [1, 1, 1]);
            this._curb(sg, sp, side > 0 ? e.w / 2 : -e.w / 2, side);
          }
        }
      }
    }
    for (const n of c.nodes) {
      const y = 0.03 + n.top * 0.005 + 0.002;
      disc(rg, n.x, n.z, n.maxW / 2 * 1.08, y, [1, 1, 1], 16);
    }
    // zebra crossings
    for (const [x, z] of c.crossings) {
      const r = map.nearestRoad(x, z, 4);
      if (!r || r.e.cls > 4 || r.e.w < 5) continue;
      const y = 0.03 + (6 - r.e.cls) * 0.005 + 0.006;
      const px = -r.dz, pz = r.dx, hw = r.e.w / 2;
      const q = [r.x - px * hw, r.z - pz * hw, r.x + px * hw, r.z + pz * hw];
      ribbon(mg, q, -2, 2, y, WH, (d) => [d * 2.0, 2]);
    }
    if (!rg.empty) { const m = new THREE.Mesh(rg.build(), this.mat.road); m.receiveShadow = true; group.add(m); }
    if (!sg.empty) { const m = new THREE.Mesh(sg.build(), this.mat.paving); m.receiveShadow = true; group.add(m); L.detail = m; }
    if (!mg.empty) { const m = new THREE.Mesh(mg.build(), this.mat.mark); m.receiveShadow = true; group.add(m); L.marks = m; }

    // ---------------- areas (parks, water, squares, parking...)
    const ag = {};
    const treePts = [[], [], [], []];
    for (const A of c.areas) this._area(ag, A, rnd, treePts);
    // ---------------- lines (footways, rivers, rail, taxiways)
    for (const l of c.lines) this._line(ag, l, rnd, treePts);
    for (const k in ag) {
      const m = new THREE.Mesh(ag[k].build(), this.mat[k]);
      m.receiveShadow = true; group.add(m);
    }

    // ---------------- street trees + lamps
    const lamps = [];
    for (const e of c.edges) {
      if (e.cls < 1 || e.cls > 4) continue;
      const step = e.cls <= 2 ? 9 : 11;
      const offT = e.w / 2 + (e.cls <= 2 ? 4.2 : 3.4);
      for (let s = 6 + rnd() * 5; s < e.len - 6; s += step + rnd() * 5) {
        for (const side of [-1, 1]) {
          if (rnd() < (e.cls <= 3 ? 0.18 : 0.4)) continue;
          const o = {}; map.sample(e, 0, s, offT * side, o);
          if (this._blocked(o.x, o.z, e, 2.2)) continue;
          const type = e.cls <= 2 ? (rnd() < 0.55 ? 1 : 0) : (rnd() < 0.25 ? 1 : rnd() < 0.85 ? 0 : 3);
          treePts[type].push(o.x, o.z, 0.75 + rnd() * 0.5, rnd() * 6.28);
        }
      }
      if (e.cls <= 3) {
        for (let s = 10; s < e.len - 8; s += 34) {
          for (const side of e.cls <= 1 ? [-1, 1] : [1]) {
            const o = {}; map.sample(e, 0, s, (e.w / 2 + 0.6) * side, o);
            if (this._blocked(o.x, o.z, e, 0.8)) continue;
            // arm points towards road centre
            const ang = Math.atan2(-o.dz * side, o.dx * side);
            lamps.push(o.x, o.z, ang);
          }
        }
      }
    }
    for (const t of c.trees) treePts[rnd() < 0.5 ? 0 : 3].push(t[0], t[1], 0.8 + rnd() * 0.4, rnd() * 6.28);
    const tg = new THREE.Group(), tgLow = new THREE.Group();
    const M4 = new THREE.Matrix4(), Q = new THREE.Quaternion(), V = new THREE.Vector3(), S = new THREE.Vector3(), AX = new THREE.Vector3(0, 1, 0);
    const col = new THREE.Color();
    for (let t = 0; t < 4; t++) {
      const a = treePts[t]; const n = a.length / 4;
      if (!n) continue;
      const im = new THREE.InstancedMesh(this.geoTrees[t], this.mat.tree, n);
      for (let i = 0; i < n; i++) {
        const s = a[i * 4 + 2];
        Q.setFromAxisAngle(AX, a[i * 4 + 3]);
        M4.compose(V.set(a[i * 4], 0, a[i * 4 + 1]), Q, S.set(s, s * (0.9 + rnd() * 0.25), s));
        im.setMatrixAt(i, M4);
        const g = 0.8 + rnd() * 0.35;
        im.setColorAt(i, col.setRGB(g * (0.9 + rnd() * 0.25), g, g * (0.85 + rnd() * 0.2)));
      }
      im.castShadow = true; im.receiveShadow = true;
      im.computeBoundingSphere();
      tg.add(im);
      const lo = new THREE.InstancedMesh(this.geoTreesLow[t], this.mat.tree, n);
      lo.instanceMatrix.copy(im.instanceMatrix); lo.instanceColor = im.instanceColor;
      lo.castShadow = true; lo.computeBoundingSphere();
      tgLow.add(lo);
    }
    group.add(tg, tgLow); L.trees = tg; L.treesLow = tgLow;
    if (lamps.length) {
      const n = lamps.length / 3;
      const im = new THREE.InstancedMesh(this.geoLamp, this.mat.lamp, n);
      const ig = new THREE.InstancedMesh(this.geoLampGlow, this.mat.lampGlow, n);
      for (let i = 0; i < n; i++) {
        Q.setFromAxisAngle(AX, lamps[i * 3 + 2]);
        M4.compose(V.set(lamps[i * 3], 0, lamps[i * 3 + 1]), Q, S.set(1, 1, 1));
        im.setMatrixAt(i, M4); ig.setMatrixAt(i, M4);
      }
      im.castShadow = true; im.computeBoundingSphere(); ig.computeBoundingSphere();
      group.add(im, ig);
    }
    // bus stops (real OSM bus stop locations)
    if (c.busstops.length) {
      const pts = [];
      for (const [x, z] of c.busstops) {
        const r = map.nearestRoad(x, z, 25, e => e.cls <= 4);
        if (!r) continue;
        const side = r.lat >= 0 ? 1 : -1;
        const off = r.e.w / 2 + 2.2;
        const px = r.x + -r.dz * off * side, pz = r.z + r.dx * off * side;
        if (map.insideBuilding(px, pz, 0.5)) continue;
        const rr = map.nearestRoad(px, pz, 12);
        if (rr && rr.dist < rr.e.w / 2 + 1) continue;
        pts.push(px, pz, Math.atan2(r.dx * side, r.dz * side) + Math.PI);
      }
      if (pts.length) {
        const im = new THREE.InstancedMesh(this.geoBus, this.mat.prop, pts.length / 3);
        for (let i = 0; i < pts.length / 3; i++) {
          Q.setFromAxisAngle(AX, pts[i * 3 + 2]);
          M4.compose(V.set(pts[i * 3], 0.15, pts[i * 3 + 1]), Q, S.set(1, 1, 1)); im.setMatrixAt(i, M4);
        }
        im.castShadow = true; im.computeBoundingSphere(); group.add(im);
      }
    }
    this.root.add(group);
    if (this.onChunk) this.onChunk(c, L);
  }

  _signs(c, group, L) {
    const SIGN_COL = { pharmacy: ['#1d8a4a', '#fff'], bank: ['#163c7a', '#fff'], cafe: ['#5a3a22', '#ffe9c8'], restaurant: ['#7a1e1e', '#fff3d0'], fast_food: ['#d8261c', '#fff'],
      supermarket: ['#f2c200', '#1a1a1a'], convenience: ['#1f5fa8', '#fff'], fuel: ['#0a6a3a', '#fff'], hotel: ['#2a2a40', '#f0d080'], clothes: ['#222', '#fff'], bar: ['#3a1a40', '#ffd0f0'], mobile_phone: ['#e05a10', '#fff'] };
    const list = [];
    for (const s of c.signs) {
      const gx = Math.floor(s.x / this.map.BGRID), gz = Math.floor(s.z / this.map.BGRID);
      let best = null, bd = 18;
      for (let ox = -1; ox <= 1; ox++) for (let oz = -1; oz <= 1; oz++) {
        const a = this.map.bgrid.get(ck(gx + ox, gz + oz)); if (!a) continue;
        for (const B of a) {
          if (B.h < 3 || B.h > 80) continue;
          const p = B.pts, n = p.length / 2;
          let A = 0; for (let i = 0; i < n; i++) { const j = (i + 1) % n; A += p[i * 2] * p[j * 2 + 1] - p[j * 2] * p[i * 2 + 1]; }
          const out = A > 0 ? 1 : -1;
          for (let i = 0; i < n; i++) {
            const j = (i + 1) % n;
            const ax = p[i * 2], az = p[i * 2 + 1], bx = p[j * 2], bz = p[j * 2 + 1];
            const vx = bx - ax, vz = bz - az, l = Math.hypot(vx, vz); if (l < 3) continue;
            let t = ((s.x - ax) * vx + (s.z - az) * vz) / (l * l); t = Math.max(0.15, Math.min(0.85, t));
            const px = ax + vx * t, pz = az + vz * t, d = Math.hypot(s.x - px, s.z - pz);
            if (d >= bd) continue;
            const nx = vz / l * out, nz = -vx / l * out;
            // prefer walls facing a street
            const r = this.map.nearestRoad(px + nx * 6, pz + nz * 6, 30);
            const score = d + (r ? r.dist * 0.15 : 6);
            if (score < bd) { bd = score; best = { x: px + nx * 0.06, z: pz + nz * 0.06, nx, nz, l, h: Math.min(B.h, 4.2) }; }
          }
        }
      }
      if (best && !list.some(o => Math.hypot(o.x - best.x, o.z - best.z) < 2.5)) list.push(Object.assign(best, { name: s.name, kind: s.kind }));
      if (list.length >= 48) break;
    }
    if (!list.length) return;
    const CW = 256, CH = 48, cols = 4;
    const rows = Math.ceil(list.length / cols);
    const cv = document.createElement('canvas'); cv.width = CW * cols; cv.height = CH * rows;
    const x = cv.getContext('2d');
    const pos = [], uv = [], nor = [], idx = [];
    list.forEach((s, i) => {
      const cx = (i % cols) * CW, cy = Math.floor(i / cols) * CH;
      const [bg, fg] = SIGN_COL[s.kind] || ['#8a1a1a', '#fff'];
      x.fillStyle = bg; x.fillRect(cx, cy, CW, CH);
      x.fillStyle = 'rgba(255,255,255,0.12)'; x.fillRect(cx, cy, CW, 4);
      x.fillStyle = fg; x.textAlign = 'center'; x.textBaseline = 'middle';
      let fs = 30; x.font = `700 ${fs}px Arial`;
      while (x.measureText(s.name).width > CW - 16 && fs > 12) { fs -= 2; x.font = `700 ${fs}px Arial`; }
      x.fillText(s.name.toUpperCase ? s.name : s.name, cx + CW / 2, cy + CH / 2 + 1);
      if (s.kind === 'pharmacy') { x.fillStyle = '#fff'; x.fillRect(cx + 8, cy + 18, 18, 6); x.fillRect(cx + 14, cy + 12, 6, 18); }
      const w = Math.min(s.l * 0.8, 1.6 + s.name.length * 0.28), hgt = w * CH / CW * 1.15;
      const ux = -s.nz, uz = s.nx; // along the wall
      const y0 = s.h - 0.6 - hgt, y1 = s.h - 0.6;
      const yy0 = Math.max(2.6, Math.min(y0, 3.0)), yy1 = yy0 + hgt;
      const b = pos.length / 3;
      for (const [k, yy] of [[-1, yy0], [1, yy0], [1, yy1], [-1, yy1]]) { pos.push(s.x + ux * k * w / 2, yy, s.z + uz * k * w / 2); nor.push(s.nx, 0, s.nz); }
      const u0 = (cx) / cv.width, u1 = (cx + CW) / cv.width, v0 = 1 - (cy + CH) / cv.height, v1 = 1 - cy / cv.height;
      uv.push(u1, v0, u0, v0, u0, v1, u1, v1);
      idx.push(b, b + 1, b + 2, b, b + 2, b + 3);
      void y1;
    });
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    g.setAttribute('normal', new THREE.Float32BufferAttribute(nor, 3));
    g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
    g.setIndex(idx);
    const t = new THREE.CanvasTexture(cv); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4;
    const mat = new THREE.MeshStandardMaterial({ map: t, emissiveMap: t, emissive: 0xffffff, emissiveIntensity: 0.05 + this.night * 0.9, roughness: 0.5, side: THREE.DoubleSide });
    const m = new THREE.Mesh(g, mat);
    group.add(m); L.signMat = mat; L.signTex = t;
  }

  _blocked(x, z, own, margin) {
    if (this.map.insideBuilding(x, z, margin)) return true;
    const r = this.map.nearestRoad(x, z, 14);
    if (r && r.e !== own && r.dist < r.e.w / 2 + margin) return true;
    if (r && r.e === own && r.dist < r.e.w / 2 + 0.3) return true;
    return false;
  }

  _curb(gb, pts, off, side) {
    const N = polyNormals(pts); const n = pts.length / 2;
    let prevT = -1, prevB = -1;
    for (let i = 0; i < n; i++) {
      const nx = N[i * 3], nz = N[i * 3 + 1], s = N[i * 3 + 2];
      const x = pts[i * 2] + nx * off * s, z = pts[i * 2 + 1] + nz * off * s;
      const fx = -nx * side, fz = -nz * side; // faces road
      const t = gb.v(x, 0.15, z, fx, 0, fz, 0.85, 0.85, 0.83);
      const b = gb.v(x, 0.0, z, fx, 0, fz, 0.6, 0.6, 0.6);
      if (prevT >= 0) { if (side > 0) gb.quad(prevB, b, t, prevT); else gb.quad(prevB, prevT, t, b); }
      prevT = t; prevB = b;
    }
  }

  _area(groups, A, rnd, treePts) {
    const st = AREA_STYLE[A.type]; if (!st) return;
    const [mk, color, y] = st;
    const gb = groups[mk] || (groups[mk] = new GB());
    const p = A.pts, n = p.length / 2;
    const contour = [];
    for (let i = 0; i < n; i++) contour.push(new THREE.Vector2(p[i * 2], p[i * 2 + 1]));
    let tris;
    try { tris = THREE.ShapeUtils.triangulateShape(contour, []); } catch (e) { return; }
    const c = hexColor(color);
    const base = gb.vc;
    for (let i = 0; i < n; i++) gb.v(p[i * 2], y, p[i * 2 + 1], 0, 1, 0, c[0], c[1], c[2]);
    for (const t of tris) {
      const [a, b, d] = t;
      const ax = p[a * 2], az = p[a * 2 + 1], bx = p[b * 2], bz = p[b * 2 + 1], dx = p[d * 2], dz = p[d * 2 + 1];
      const cr = (bx - ax) * (dz - az) - (bz - az) * (dx - ax);
      if (cr < 0) gb.tri(base + a, base + b, base + d); else gb.tri(base + a, base + d, base + b);
    }
    // trees inside parks/forests
    const dens = TREES_PER_M2[A.type];
    if (treePts && dens && rnd) {
      const area = (A.x1 - A.x0) * (A.z1 - A.z0);
      let cnt = Math.min(500, Math.floor(area * dens));
      let tries = cnt * 3;
      while (cnt > 0 && tries-- > 0) {
        const x = A.x0 + rnd() * (A.x1 - A.x0), z = A.z0 + rnd() * (A.z1 - A.z0);
        if (!pointInPoly(x, z, p)) continue;
        const r = this.map.nearestRoad(x, z, 10);
        if (r && r.dist < r.e.w / 2 + 2) continue;
        if (this.map.insideBuilding(x, z, 1.5)) continue;
        const type = A.type === 2 ? (rnd() < 0.5 ? 2 : 0) : (rnd() < 0.4 ? 3 : rnd() < 0.7 ? 0 : rnd() < 0.6 ? 2 : 1);
        treePts[type].push(x, z, 0.7 + rnd() * 0.6, rnd() * 6.28);
        cnt--;
      }
    }
  }

  _line(groups, l, rnd, treePts) {
    const p = l.pts;
    if (l.type === 0) { // footway
      const gb = groups.paving || (groups.paving = new GB());
      ribbon(gb, p, -l.w / 2, l.w / 2, 0.025, [0.95, 0.93, 0.9]);
    } else if (l.type === 1) { // river / canal / aryk stream
      const gb = groups.water || (groups.water = new GB());
      ribbon(gb, p, -l.w / 2, l.w / 2, 0.005, hexColor(0x6a8a90));
      const db = groups.dirt || (groups.dirt = new GB());
      ribbon(db, p, -l.w / 2 - 2.5, -l.w / 2, 0.004, hexColor(0x9a9078));
      ribbon(db, p, l.w / 2, l.w / 2 + 2.5, 0.004, hexColor(0x9a9078));
    } else if (l.type === 2) { // railway
      const db = groups.dirt || (groups.dirt = new GB());
      ribbon(db, p, -1.8, 1.8, 0.02, hexColor(0x6a6258));
      const rb = groups.rail || (groups.rail = new GB());
      ribbon(rb, p, -0.78, -0.7, 0.16, [1, 1, 1]);
      ribbon(rb, p, 0.7, 0.78, 0.16, [1, 1, 1]);
    } else if (l.type === 4) { // taxiway
      const gb = groups.concrete || (groups.concrete = new GB());
      ribbon(gb, p, -l.w / 2, l.w / 2, 0.024, [0.9, 0.9, 0.9]);
      const mg = groups.mark || (groups.mark = new GB({ aDash: 2 }));
      ribbon(mg, p, -0.08, 0.08, 0.03, hexColor(0xe8c030), (d) => [d, 0]);
    } else if (l.type === 5 && treePts) { // tree row
      const cum = cumLen(p);
      for (let s = 0; s < cum[cum.length - 1]; s += 7 + rnd() * 3) {
        let i = 0; while (i < cum.length - 2 && cum[i + 1] < s) i++;
        const f = (s - cum[i]) / ((cum[i + 1] - cum[i]) || 1);
        treePts[rnd() < 0.6 ? 1 : 0].push(p[i * 2] + (p[i * 2 + 2] - p[i * 2]) * f, p[i * 2 + 1] + (p[i * 2 + 3] - p[i * 2 + 1]) * f, 0.8 + rnd() * 0.4, rnd() * 6);
      }
    }
  }

  _building(gb, B, rnd, addCol) {
    const p = B.pts, n = p.length / 2;
    let A = 0;
    for (let i = 0; i < n; i++) { const j = (i + 1) % n; A += p[i * 2] * p[j * 2 + 1] - p[j * 2] * p[i * 2 + 1]; }
    const area = Math.abs(A) / 2;
    let kind = B.kind, h = B.h, h0 = B.minH;
    let style, color, floorH = 3.0, spacing = 3.2;
    const pick = (a) => a[Math.floor(rnd() * a.length)];
    if (kind === 0) kind = h < 7.5 ? 1 : (h > 35 ? 3 : 2);
    switch (kind) {
      case 1: style = 1; color = pick(PAL.house); spacing = 3.6; break;
      case 2: style = 2; color = pick(PAL.panel); spacing = 3.1; break;
      case 3: style = 3; color = pick(PAL.comm); spacing = 2.2; floorH = 3.6; break;
      case 4: style = 4; color = pick(PAL.ind); spacing = 4; floorH = 4; break;
      case 5: style = 0.0; color = 0x8a8478; break;
      case 6: style = 0.0; color = 0x9a9a9a; break;
      case 7: style = 5; color = pick(PAL.pub); spacing = 3.4; floorH = 3.8; break;
      case 8: style = 5; color = 0xf2efe8; break;
      case 9: style = 4; color = 0xa8a49c; break;
      case 10: style = 6; color = 0xc8d0d8; spacing = 2.5; floorH = 4; break;
      default: style = 2; color = pick(PAL.panel);
    }
    if (B.name && /Historical|Музей|museum|Филармон|Philharmonic|Opera|Театр|Theat/i.test(B.name)) { style = 5; color = 0xe8e4dc; }
    let c = hexColor(color);
    if (B.colour) { try { const oc = new THREE.Color(B.colour); if (B.colour !== 'white' || kind !== 3) c = [oc.r, oc.g, oc.b]; } catch (e) { /* bad tag */ } }
    const jit = 0.92 + rnd() * 0.12;
    const cr = c[0] * jit, cg = c[1] * jit, cb = c[2] * jit;
    const seed = rnd() * 100;
    const ex = (u, v) => ({ aInfo: [style, seed], aWin: [u, v] });
    const outward = A > 0 ? 1 : -1;
    let u = 0;
    for (let i = 0; i < n; i++) {
      const j = (i + 1) % n;
      const x0 = p[i * 2], z0 = p[i * 2 + 1], x1 = p[j * 2], z1 = p[j * 2 + 1];
      const dx = x1 - x0, dz = z1 - z0, l = Math.hypot(dx, dz);
      if (l < 0.05) continue;
      const nx = dz / l * outward, nz = -dx / l * outward;
      // snap window columns to wall length so windows never get cut at corners
      const cols = Math.max(1, Math.round(l / spacing));
      const v0 = 0, v1 = (h - h0) / floorH;
      const a = gb.v(x0, h0, z0, nx, 0, nz, cr, cg, cb, ex(0, v0));
      const b = gb.v(x1, h0, z1, nx, 0, nz, cr, cg, cb, ex(cols, v0));
      const t1 = gb.v(x1, h, z1, nx, 0, nz, cr, cg, cb, ex(cols, v1));
      const t0 = gb.v(x0, h, z0, nx, 0, nz, cr, cg, cb, ex(0, v1));
      if (outward > 0) { gb.tri(a, t1, b); gb.tri(a, t0, t1); } else { gb.tri(a, b, t1); gb.tri(a, t1, t0); }
      if (addCol && h > 1.5) this.addWall(x0, z0, x1, z1);
      u += l;
    }
    // parapet around flat roofs (gives buildings a proper silhouette)
    const pitched = (kind === 1 && area < 260 && n <= 8) || /gabled|hipped|pitched/.test(B.roofShape || '');
    if (!pitched && h > 5 && kind !== 5 && kind !== 6) {
      const ph = kind === 3 || kind === 10 ? 1.1 : 0.7;
      const pc = [cr * 0.92, cg * 0.92, cb * 0.92];
      const exP = { aInfo: [0, seed], aWin: [0, 0] };
      for (let i = 0; i < n; i++) {
        const j = (i + 1) % n;
        const x0 = p[i * 2], z0 = p[i * 2 + 1], x1 = p[j * 2], z1 = p[j * 2 + 1];
        const l = Math.hypot(x1 - x0, z1 - z0); if (l < 0.05) continue;
        const nx = (z1 - z0) / l * outward, nz = -(x1 - x0) / l * outward;
        const a = gb.v(x0, h, z0, nx, 0, nz, pc[0], pc[1], pc[2], exP), b = gb.v(x1, h, z1, nx, 0, nz, pc[0], pc[1], pc[2], exP);
        const t1 = gb.v(x1, h + ph, z1, nx, 0.2, nz, pc[0], pc[1], pc[2], exP), t0 = gb.v(x0, h + ph, z0, nx, 0.2, nz, pc[0], pc[1], pc[2], exP);
        if (outward > 0) { gb.tri(a, t1, b); gb.tri(a, t0, t1); gb.tri(a, b, t1); gb.tri(a, t1, t0); } else { gb.tri(a, b, t1); gb.tri(a, t1, t0); gb.tri(a, t1, b); gb.tri(a, t0, t1); }
      }
    }
    // roof
    if (pitched) { this._gableRoof(gb, B, h, c, rnd, area); return; }
    const contour = [];
    for (let i = 0; i < n; i++) contour.push(new THREE.Vector2(p[i * 2], p[i * 2 + 1]));
    let tris;
    try { tris = THREE.ShapeUtils.triangulateShape(contour, []); } catch (e) { return; }
    const rc = kind === 10 ? [0.55, 0.57, 0.6] : (kind === 3 ? [0.32, 0.34, 0.36] : [0.36 + rnd() * 0.12, 0.35 + rnd() * 0.1, 0.33 + rnd() * 0.08]);
    const base = gb.vc;
    for (let i = 0; i < n; i++) gb.v(p[i * 2], h, p[i * 2 + 1], 0, 1, 0, rc[0], rc[1], rc[2], { aInfo: [0, seed], aWin: [p[i * 2], p[i * 2 + 1]] });
    for (const t of tris) {
      const [a, b, d] = t;
      const ax = p[a * 2], az = p[a * 2 + 1], bx = p[b * 2], bz = p[b * 2 + 1], dx = p[d * 2], dz = p[d * 2 + 1];
      const cr2 = (bx - ax) * (dz - az) - (bz - az) * (dx - ax);
      if (cr2 < 0) gb.tri(base + a, base + b, base + d); else gb.tri(base + a, base + d, base + b);
    }
    // rooftop elevator/stair housings on Soviet blocks
    if ((kind === 2 || kind === 3) && area > 350 && h > 12) {
      const cnt = Math.min(3, Math.floor(area / 400));
      for (let k = 0; k < cnt; k++) {
        const t = (k + 0.5) / cnt;
        const bx = B.x0 + (B.x1 - B.x0) * t, bz = B.z0 + (B.z1 - B.z0) * t;
        if (!pointInPoly(bx, bz, p)) continue;
        this._box(gb, bx, h, bz, 2.6, 2.4, 3.2, [rc[0] * 1.3, rc[1] * 1.3, rc[2] * 1.3], seed);
      }
    }
  }

  _box(gb, x, y, z, sx, sy, sz, c, seed) {
    const hx = sx / 2, hz = sz / 2;
    const corners = [[x - hx, z - hz], [x + hx, z - hz], [x + hx, z + hz], [x - hx, z + hz]];
    const ex = { aInfo: [0, seed], aWin: [0, 0] };
    for (let i = 0; i < 4; i++) {
      const [x0, z0] = corners[i], [x1, z1] = corners[(i + 1) % 4];
      const dx = x1 - x0, dz = z1 - z0, l = Math.hypot(dx, dz);
      const nx = dz / l, nz = -dx / l;
      const a = gb.v(x0, y, z0, nx, 0, nz, c[0], c[1], c[2], ex), b = gb.v(x1, y, z1, nx, 0, nz, c[0], c[1], c[2], ex);
      const t1 = gb.v(x1, y + sy, z1, nx, 0, nz, c[0], c[1], c[2], ex), t0 = gb.v(x0, y + sy, z0, nx, 0, nz, c[0], c[1], c[2], ex);
      gb.tri(a, t1, b); gb.tri(a, t0, t1);
    }
    const t = corners.map(([cx, cz]) => gb.v(cx, y + sy, cz, 0, 1, 0, c[0], c[1], c[2], ex));
    gb.tri(t[0], t[2], t[1]); gb.tri(t[0], t[3], t[2]);
  }

  _gableRoof(gb, B, h, wallC, rnd, area) {
    const p = B.pts, n = p.length / 2;
    // principal axis = longest edge
    let best = 0, ax = 1, az = 0;
    for (let i = 0; i < n; i++) {
      const j = (i + 1) % n; const dx = p[j * 2] - p[i * 2], dz = p[j * 2 + 1] - p[i * 2 + 1]; const l = Math.hypot(dx, dz);
      if (l > best) { best = l; ax = dx / l; az = dz / l; }
    }
    const bx = -az, bz = ax;
    let u0 = 1e9, u1 = -1e9, w0 = 1e9, w1 = -1e9;
    for (let i = 0; i < n; i++) {
      const u = p[i * 2] * ax + p[i * 2 + 1] * az, w = p[i * 2] * bx + p[i * 2 + 1] * bz;
      u0 = Math.min(u0, u); u1 = Math.max(u1, u); w0 = Math.min(w0, w); w1 = Math.max(w1, w);
    }
    const o = 0.35; u0 -= o; u1 += o; w0 -= o; w1 += o;
    const P = (u, w) => [u * ax + w * bx, u * az + w * bz];
    const rh = Math.min(2.6, (w1 - w0) * 0.38);
    const wm = (w0 + w1) / 2;
    let rc = hexColor(PAL.roofHouse[Math.floor(rnd() * PAL.roofHouse.length)]);
    if (B.roofColour) { try { const oc = new THREE.Color(B.roofColour); rc = [oc.r, oc.g, oc.b]; } catch (e) { /* ignore */ } }
    const ex = { aInfo: [0, 0], aWin: [0, 0] };
    const yb = h - 0.05;
    const c00 = P(u0, w0), c10 = P(u1, w0), c11 = P(u1, w1), c01 = P(u0, w1), r0 = P(u0, wm), r1 = P(u1, wm);
    const slope = (A, Bq, R1, R0, side) => {
      // normal: up + outward along b axis
      const ny = (wm - (side < 0 ? w0 : w1)) === 0 ? 1 : 1;
      const k = rh / ((w1 - w0) / 2);
      let nx = bx * side * k, nz = bz * side * k; const l = Math.hypot(nx, 1, nz);
      const a = gb.v(A[0], yb, A[1], nx / l, ny / l, nz / l, rc[0], rc[1], rc[2], ex);
      const b = gb.v(Bq[0], yb, Bq[1], nx / l, ny / l, nz / l, rc[0], rc[1], rc[2], ex);
      const c = gb.v(R1[0], yb + rh, R1[1], nx / l, ny / l, nz / l, rc[0] * 1.1, rc[1] * 1.1, rc[2] * 1.1, ex);
      const d = gb.v(R0[0], yb + rh, R0[1], nx / l, ny / l, nz / l, rc[0] * 1.1, rc[1] * 1.1, rc[2] * 1.1, ex);
      return [a, b, c, d];
    };
    const s1 = slope(c00, c10, r1, r0, -1);
    const s2 = slope(c11, c01, r0, r1, 1);
    // choose winding that faces up
    const up = (q) => {
      const [a, b, c] = q.map(i => [gb.p[i * 3], gb.p[i * 3 + 1], gb.p[i * 3 + 2]]);
      const ux = b[0] - a[0], uy = b[1] - a[1], uz = b[2] - a[2], vx = c[0] - a[0], vy = c[1] - a[1], vz = c[2] - a[2];
      return (uz * vx - ux * vz) > 0;
    };
    for (const q of [s1, s2]) { if (up(q)) { gb.tri(q[0], q[1], q[2]); gb.tri(q[0], q[2], q[3]); } else { gb.tri(q[0], q[2], q[1]); gb.tri(q[0], q[3], q[2]); } }
    // gable triangles
    for (const [A, Bq, R, sgn] of [[c00, c01, r0, -1], [c10, c11, r1, 1]]) {
      const nx = ax * sgn, nz = az * sgn;
      const a = gb.v(A[0], yb, A[1], nx, 0, nz, wallC[0], wallC[1], wallC[2], ex);
      const b = gb.v(Bq[0], yb, Bq[1], nx, 0, nz, wallC[0], wallC[1], wallC[2], ex);
      const c = gb.v(R[0], yb + rh, R[1], nx, 0, nz, wallC[0], wallC[1], wallC[2], ex);
      gb.tri(a, b, c); gb.tri(a, c, b);
    }
  }

  setNight(n) {
    if (Math.abs((this.night || 0) - n) > 0.02) for (const L of this.live.values()) if (L.signMat) L.signMat.emissiveIntensity = 0.05 + n * 0.9;
    this.night = n;
    U.uNight.value = n;
    this.mat.lampGlow.emissiveIntensity = n * 3.0;
    this.mat.lampGlow.color.setScalar(0.2 + n * 0.8);
  }

  // ---------------------------------------------------------------- collisions
  // circle vs building walls: returns push vector or null
  collide(x, z, r, out) {
    const G = this.CG;
    const gx0 = Math.floor((x - r) / G), gx1 = Math.floor((x + r) / G), gz0 = Math.floor((z - r) / G), gz1 = Math.floor((z + r) / G);
    let hit = false; out.x = 0; out.z = 0; out.nx = 0; out.nz = 0;
    let px = x, pz = z;
    for (let gx = gx0; gx <= gx1; gx++) for (let gz = gz0; gz <= gz1; gz++) {
      const a = this.collision.get(ck(gx, gz)); if (!a) continue;
      for (let i = 0; i < a.length; i += 4) {
        const ax = a[i], az = a[i + 1], bx = a[i + 2], bz = a[i + 3];
        const vx = bx - ax, vz = bz - az, l2 = vx * vx + vz * vz || 1e-6;
        let t = ((px - ax) * vx + (pz - az) * vz) / l2; t = t < 0 ? 0 : t > 1 ? 1 : t;
        const qx = ax + vx * t, qz = az + vz * t;
        const dx = px - qx, dz = pz - qz, d = Math.hypot(dx, dz);
        if (d < r && d > 1e-5) {
          const push = r - d;
          px += dx / d * push; pz += dz / d * push;
          out.nx += dx / d; out.nz += dz / d; hit = true;
        }
      }
    }
    if (hit) { out.x = px - x; out.z = pz - z; const l = Math.hypot(out.nx, out.nz) || 1; out.nx /= l; out.nz /= l; }
    return hit;
  }
}
