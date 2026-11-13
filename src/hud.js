// HTML/Canvas HUD: speedometer, minimap, full city map, notifications, fines, menus.
import { SPEED_LIMIT, PLACES, fmt } from './game.js';
import { CHUNK, ck } from './data.js';

const ROAD_COL = ['#f6c05a', '#f2d38a', '#e8e2c8', '#d8d4c4', '#c4c0b4', '#b4b0a4', '#9a968c'];
const ROAD_W = [5, 4.2, 3.4, 2.6, 2, 1.6, 1.2];
const $ = (id) => document.getElementById(id);

export class HUD {
  constructor(map) {
    this.map = map;
    this.speedo = $('speedo'); this.sctx = this.speedo.getContext('2d');
    this.mini = $('minimap'); this.mctx = this.mini.getContext('2d');
    this.big = $('bigmap'); this.bctx = this.big.getContext('2d');
    this.hour = 10; this.toastT = 0;
    this.mapView = { x: -3000, z: -8000, s: 0.06 };
    this.fineQueue = [];
    this._resize();
    window.addEventListener('resize', () => this._resize());
    this._mapEvents();
  }

  _resize() {
    const dpr = Math.min(2, window.devicePixelRatio || 1);
    for (const c of [this.speedo, this.mini]) { c.width = c.clientWidth * dpr; c.height = c.clientHeight * dpr; }
    this.big.width = this.big.clientWidth * dpr; this.big.height = this.big.clientHeight * dpr;
    this.dpr = dpr;
  }

  clockText() {
    const h = Math.floor(this.hour), m = Math.floor((this.hour - h) * 60);
    return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`;
  }

  // ------------------------------------------------------------ speedometer
  drawSpeedo(car) {
    const c = this.sctx, W = this.speedo.width, H = this.speedo.height, d = this.dpr;
    c.clearRect(0, 0, W, H);
    const cx = W / 2, cy = H / 2, R = Math.min(W, H) / 2 - 6 * d;
    const kmh = car.speed * 3.6;
    const maxV = 260, a0 = Math.PI * 0.75, a1 = Math.PI * 2.25;
    const ang = (v) => a0 + (a1 - a0) * Math.min(1, v / maxV);
    // face
    const g = c.createRadialGradient(cx, cy, R * 0.2, cx, cy, R);
    g.addColorStop(0, 'rgba(20,24,30,0.92)'); g.addColorStop(1, 'rgba(8,10,14,0.92)');
    c.fillStyle = g; c.beginPath(); c.arc(cx, cy, R, 0, Math.PI * 2); c.fill();
    c.lineWidth = 2 * d; c.strokeStyle = 'rgba(255,255,255,0.18)'; c.stroke();
    // red zone above the 150 km/h limit
    c.lineWidth = 7 * d; c.strokeStyle = 'rgba(230,40,40,0.85)';
    c.beginPath(); c.arc(cx, cy, R - 10 * d, ang(SPEED_LIMIT), a1); c.stroke();
    // speed arc
    c.lineWidth = 7 * d; c.strokeStyle = kmh > SPEED_LIMIT ? '#ff4040' : '#3fc8ff';
    c.beginPath(); c.arc(cx, cy, R - 10 * d, a0, ang(kmh)); c.stroke();
    // ticks
    c.fillStyle = '#cfd6de'; c.font = `${11 * d}px Inter, Arial`; c.textAlign = 'center'; c.textBaseline = 'middle';
    for (let v = 0; v <= maxV; v += 10) {
      const a = ang(v), big = v % 20 === 0;
      c.strokeStyle = v > SPEED_LIMIT ? '#ff6060' : 'rgba(255,255,255,0.7)'; c.lineWidth = (big ? 2 : 1) * d;
      c.beginPath(); c.moveTo(cx + Math.cos(a) * (R - 18 * d), cy + Math.sin(a) * (R - 18 * d)); c.lineTo(cx + Math.cos(a) * (R - (big ? 28 : 23) * d), cy + Math.sin(a) * (R - (big ? 28 : 23) * d)); c.stroke();
      if (big && v % 40 === 0) c.fillText(v, cx + Math.cos(a) * (R - 40 * d), cy + Math.sin(a) * (R - 40 * d));
    }
    // needle
    const na = ang(kmh);
    c.strokeStyle = '#ff5a2a'; c.lineWidth = 3 * d; c.lineCap = 'round';
    c.beginPath(); c.moveTo(cx - Math.cos(na) * 12 * d, cy - Math.sin(na) * 12 * d); c.lineTo(cx + Math.cos(na) * (R - 22 * d), cy + Math.sin(na) * (R - 22 * d)); c.stroke();
    c.fillStyle = '#222'; c.beginPath(); c.arc(cx, cy, 7 * d, 0, 7); c.fill();
    // digital
    c.fillStyle = kmh > SPEED_LIMIT ? '#ff5050' : '#ffffff';
    c.font = `700 ${30 * d}px Inter, Arial`; c.fillText(Math.round(kmh), cx, cy + R * 0.42);
    c.fillStyle = '#8a96a4'; c.font = `${10 * d}px Inter, Arial`; c.fillText('km/h', cx, cy + R * 0.62);
    // rpm bar
    const rpm = car.rpm / 7000;
    c.lineWidth = 4 * d; c.strokeStyle = 'rgba(255,255,255,0.1)';
    c.beginPath(); c.arc(cx, cy, R * 0.42, Math.PI * 0.8, Math.PI * 2.2); c.stroke();
    c.strokeStyle = rpm > 0.88 ? '#ff4040' : '#f2c200';
    c.beginPath(); c.arc(cx, cy, R * 0.42, Math.PI * 0.8, Math.PI * 0.8 + Math.PI * 1.4 * Math.min(1, rpm)); c.stroke();
    c.fillStyle = '#f2c200'; c.font = `700 ${14 * d}px Inter, Arial`;
    c.fillText(car.gearLabel || '1', cx, cy - R * 0.12);
  }

  // ------------------------------------------------------------ minimap
  // static minimap layer (buildings + roads) cached north-up around an anchor; re-rendered
  // only when the car moves far or the zoom changes -> the minimap costs almost nothing per frame
  _miniBase(car, s, airport) {
    const W = this.mini.width;
    const Sz = Math.ceil(W * 2.2);
    if (!this._mb || this._mb.width !== Sz) { this._mb = document.createElement('canvas'); this._mb.width = this._mb.height = Sz; this._mbS = 0; }
    const R = Sz / 2 / s;
    if (this._mbS === s && Math.hypot(car.x - this._mbX, car.z - this._mbZ) < R * 0.35) return;
    this._mbS = s; this._mbX = car.x; this._mbZ = car.z;
    const c = this._mb.getContext('2d');
    c.setTransform(1, 0, 0, 1, 0, 0);
    c.fillStyle = '#1d2329'; c.fillRect(0, 0, Sz, Sz);
    c.translate(Sz / 2, Sz / 2); c.scale(s, s); c.translate(-car.x, -car.z);
    const C = CHUNK, r = Math.ceil(R / C) + 1;
    const pcx = Math.floor(car.x / C), pcz = Math.floor(car.z / C);
    c.fillStyle = '#2f3741';
    c.beginPath();
    for (let x = pcx - r; x <= pcx + r; x++) for (let z = pcz - r; z <= pcz + r; z++) {
      const ch = this.map.chunks.get(ck(x, z)); if (!ch) continue;
      for (const B of ch.buildings) {
        if (Math.abs(B.cx - car.x) > R || Math.abs(B.cz - car.z) > R) continue;
        const p = B.pts; c.moveTo(p[0], p[1]);
        for (let i = 2; i < p.length; i += 2) c.lineTo(p[i], p[i + 1]);
        c.closePath();
      }
    }
    c.fill();
    c.lineCap = 'round'; c.lineJoin = 'round';
    for (let pass = 6; pass >= 0; pass--) {
      c.strokeStyle = ROAD_COL[pass];
      for (let x = pcx - r; x <= pcx + r; x++) for (let z = pcz - r; z <= pcz + r; z++) {
        const ch = this.map.chunks.get(ck(x, z)); if (!ch) continue;
        for (const e of ch.edges) {
          if (e.cls !== pass) continue;
          c.lineWidth = Math.max(e.w, 3 / s);
          const p = e.pts; c.beginPath(); c.moveTo(p[0], p[1]);
          for (let i = 2; i < p.length; i += 2) c.lineTo(p[i], p[i + 1]);
          c.stroke();
        }
      }
    }
    if (airport) { c.strokeStyle = '#8a9098'; c.lineWidth = airport.rwW; c.beginPath(); c.moveTo(airport.R0.x, airport.R0.y); c.lineTo(airport.R1.x, airport.R1.y); c.stroke(); }
  }

  drawMini(car, traffic, game, airport, net, extra) {
    const c = this.mctx, W = this.mini.width, H = this.mini.height, d = this.dpr;
    const s = 0.55 * d * (this.miniZoom || 1) * (car.speed > 25 ? 0.75 : 1); // px per metre
    this._miniBase(car, s, airport);
    c.save();
    c.clearRect(0, 0, W, H);
    c.beginPath(); c.arc(W / 2, H / 2, W / 2 - 2, 0, 7); c.clip();
    c.translate(W / 2, H / 2 + H * 0.12);
    c.rotate(car.h + Math.PI);
    const Sz = this._mb.width;
    c.drawImage(this._mb, (this._mbX - car.x) * s - Sz / 2, (this._mbZ - car.z) * s - Sz / 2);
    c.scale(s, s);
    c.translate(-car.x, -car.z);
    const R = (W / s) * 0.8;
    if (extra) extra(c, s, R);
    if (airport) {
      for (const p of airport.planes) { c.fillStyle = '#ffffff'; c.beginPath(); c.arc(p.x, p.z, 14, 0, 7); c.fill(); }
    }
    // route
    if (game.route) {
      c.strokeStyle = '#3fc8ff'; c.lineWidth = 6 / s * d; c.globalAlpha = 0.9;
      const p = game.route; c.beginPath(); c.moveTo(p[0], p[1]); for (let i = 2; i < p.length; i += 2) c.lineTo(p[i], p[i + 1]); c.stroke();
      c.globalAlpha = 1;
    }
    // traffic
    c.fillStyle = '#ff9a3a';
    for (const t of traffic.cars) { if (Math.abs(t.x - car.x) < R && Math.abs(t.z - car.z) < R) c.fillRect(t.x - 1.6, t.z - 1.6, 3.2, 3.2); }
    // places
    for (const p of PLACES) {
      if (p.x === undefined || Math.abs(p.x - car.x) > R || Math.abs(p.z - car.z) > R) continue;
      c.fillStyle = game.visited.has(p.id) ? '#6ad06a' : '#ffd84a';
      c.beginPath(); c.arc(p.x, p.z, 6 / s * d, 0, 7); c.fill();
    }
    if (game.routeTarget) { c.fillStyle = '#ff3a6a'; c.beginPath(); c.arc(game.routeTarget.x, game.routeTarget.z, 8 / s * d, 0, 7); c.fill(); }
    if (net) for (const r of net.players.values()) { c.fillStyle = '#3ddc84'; c.beginPath(); c.arc(r.x, r.z, 6 / s * d, 0, 7); c.fill(); }
    c.restore();
    // player arrow
    c.save(); c.translate(W / 2, H / 2 + H * 0.12);
    c.fillStyle = '#3fc8ff'; c.strokeStyle = '#fff'; c.lineWidth = 2 * d;
    c.beginPath(); c.moveTo(0, -10 * d); c.lineTo(7 * d, 8 * d); c.lineTo(0, 4 * d); c.lineTo(-7 * d, 8 * d); c.closePath(); c.fill(); c.stroke();
    c.restore();
    // north marker
    const na = car.h + Math.PI;
    c.fillStyle = '#ff5050'; c.font = `700 ${12 * d}px Inter, Arial`; c.textAlign = 'center'; c.textBaseline = 'middle';
    const nx = W / 2 + Math.sin(na) * (W / 2 - 14 * d), ny = H / 2 - Math.cos(na) * (H / 2 - 14 * d);
    c.fillText('N', nx, ny);
    c.beginPath(); c.arc(W / 2, H / 2, W / 2 - 2, 0, 7); c.strokeStyle = 'rgba(255,255,255,0.25)'; c.lineWidth = 2 * d; c.stroke();
  }

  // ------------------------------------------------------------ full map
  _mapEvents() {
    let drag = null;
    this.big.addEventListener('mousedown', (e) => { drag = { x: e.clientX, y: e.clientY, vx: this.mapView.x, vz: this.mapView.z, moved: false }; });
    window.addEventListener('mousemove', (e) => {
      if (!drag) return;
      const dx = e.clientX - drag.x, dy = e.clientY - drag.y;
      if (Math.abs(dx) + Math.abs(dy) > 4) drag.moved = true;
      this.mapView.x = drag.vx - dx * this.dpr / this.mapView.s;
      this.mapView.z = drag.vz - dy * this.dpr / this.mapView.s;
      this.mapDirty = true;
    });
    window.addEventListener('mouseup', (e) => {
      if (drag && !drag.moved && this.onMapClick) {
        const r = this.big.getBoundingClientRect();
        const x = this.mapView.x + ((e.clientX - r.left) * this.dpr - this.big.width / 2) / this.mapView.s;
        const z = this.mapView.z + ((e.clientY - r.top) * this.dpr - this.big.height / 2) / this.mapView.s;
        this.onMapClick(x, z, e.shiftKey);
      }
      drag = null;
    });
    this.big.addEventListener('wheel', (e) => {
      e.preventDefault();
      const r = this.big.getBoundingClientRect();
      this.zoomMap(e.deltaY < 0 ? 1.25 : 1 / 1.25, (e.clientX - r.left) * this.dpr, (e.clientY - r.top) * this.dpr);
    }, { passive: false });
    // touch: one finger drags, two fingers pinch-zoom, tap = route
    let tch = null;
    const pts = (e) => [...e.touches].map(t => [t.clientX, t.clientY]);
    this.big.addEventListener('touchstart', (e) => {
      e.preventDefault();
      const p = pts(e);
      tch = { p, x: this.mapView.x, z: this.mapView.z, s: this.mapView.s, moved: false, d: p.length > 1 ? Math.hypot(p[0][0] - p[1][0], p[0][1] - p[1][1]) : 0 };
    }, { passive: false });
    this.big.addEventListener('touchmove', (e) => {
      e.preventDefault(); if (!tch) return;
      const p = pts(e);
      if (p.length > 1 && tch.d) {
        const d = Math.hypot(p[0][0] - p[1][0], p[0][1] - p[1][1]);
        this.mapView.s = Math.max(0.015, Math.min(4, tch.s * d / tch.d)); tch.moved = true;
      } else if (p.length === 1) {
        const dx = p[0][0] - tch.p[0][0], dy = p[0][1] - tch.p[0][1];
        if (Math.abs(dx) + Math.abs(dy) > 6) tch.moved = true;
        this.mapView.x = tch.x - dx * this.dpr / this.mapView.s; this.mapView.z = tch.z - dy * this.dpr / this.mapView.s;
      }
    }, { passive: false });
    this.big.addEventListener('touchend', (e) => {
      if (tch && !tch.moved && e.touches.length === 0 && this.onMapClick) {
        const r = this.big.getBoundingClientRect(), [cx, cy] = tch.p[0];
        this.onMapClick(this.mapView.x + ((cx - r.left) * this.dpr - this.big.width / 2) / this.mapView.s, this.mapView.z + ((cy - r.top) * this.dpr - this.big.height / 2) / this.mapView.s, false);
      }
      if (e.touches.length === 0) tch = null; else tch = { p: pts(e), x: this.mapView.x, z: this.mapView.z, s: this.mapView.s, moved: true, d: 0 };
    });
  }

  drawBigMap(car, game, airport, net) {
    // static layer (areas, every building, roads, labels) is cached until the view changes
    const W0 = this.big.width, H0 = this.big.height, v0 = this.mapView;
    const key = [v0.x | 0, v0.z | 0, v0.s.toFixed(4), W0, H0, game.route ? game.route.length + ':' + (game.route[0] | 0) : 0, this.searchMark ? this.searchMark.x : 0, game.visited.size].join('|');
    if (!this._base || this._base.width !== W0 || this._base.height !== H0) { this._base = document.createElement('canvas'); this._base.width = W0; this._base.height = H0; this._mapKey = null; }
    if (key !== this._mapKey) { this._mapKey = key; this._drawMapBase(this._base.getContext('2d'), car, game, airport); }
    const c = this.bctx;
    c.drawImage(this._base, 0, 0);
    const toS = (x, z) => [(x - v0.x) * v0.s + W0 / 2, (z - v0.z) * v0.s + H0 / 2];
    c.font = `600 ${11 * this.dpr}px Inter, Arial`; c.textAlign = 'center';
    if (net) for (const r of net.players.values()) { const [sx, sy] = toS(r.x, r.z); c.fillStyle = '#3ddc84'; c.beginPath(); c.arc(sx, sy, 6 * this.dpr, 0, 7); c.fill(); c.fillStyle = '#fff'; c.fillText(r.name, sx, sy - 10 * this.dpr); }
    const [px, py] = toS(car.x, car.z);
    c.save(); c.translate(px, py); c.rotate(Math.PI - car.h);
    c.fillStyle = '#3fc8ff'; c.strokeStyle = '#fff'; c.lineWidth = 2 * this.dpr;
    const k = this.dpr;
    c.beginPath(); c.moveTo(0, -11 * k); c.lineTo(8 * k, 9 * k); c.lineTo(0, 4 * k); c.lineTo(-8 * k, 9 * k); c.closePath(); c.fill(); c.stroke();
    c.restore();
  }

  _drawMapBase(c, car, game, airport, net) {
    const W = this.big.width, H = this.big.height, v = this.mapView, s = v.s;
    c.fillStyle = '#161b20'; c.fillRect(0, 0, W, H);
    c.save();
    c.translate(W / 2, H / 2); c.scale(s, s); c.translate(-v.x, -v.z);
    const x0 = v.x - W / 2 / s, x1 = v.x + W / 2 / s, z0 = v.z - H / 2 / s, z1 = v.z + H / 2 / s;
    // areas
    const areaCol = { 0: '#22402a', 2: '#1e3a24', 3: '#1f4660', 4: '#2a5030', 6: '#3a3828', 11: '#3a3a40', 12: '#3a3c40' };
    for (const a of this.map.areaList) {
      const col = areaCol[a[0]]; if (!col) continue;
      const p = a[1];
      if (p[0] * 0.1 < x0 - 2000 || p[0] * 0.1 > x1 + 2000 || p[1] * 0.1 < z0 - 2000 || p[1] * 0.1 > z1 + 2000) continue;
      c.fillStyle = col; c.beginPath(); c.moveTo(p[0] * 0.1, p[1] * 0.1);
      for (let i = 2; i < p.length; i += 2) c.lineTo(p[i] * 0.1, p[i + 1] * 0.1);
      c.fill();
    }
    if (s > 0.035) {
      c.fillStyle = s > 0.25 ? '#343c46' : '#2a3139';
      for (const B of this.map.buildings) {
        if (B.cx < x0 || B.cx > x1 || B.cz < z0 || B.cz > z1) continue;
        const p = B.pts; c.beginPath(); c.moveTo(p[0], p[1]);
        for (let i = 2; i < p.length; i += 2) c.lineTo(p[i], p[i + 1]);
        c.fill();
      }
    }
    c.lineCap = 'round'; c.lineJoin = 'round';
    for (let pass = 6; pass >= 0; pass--) {
      if (s < 0.08 && pass >= 5) continue;
      c.strokeStyle = ROAD_COL[pass]; c.lineWidth = Math.max(ROAD_W[pass] * 0.6 / s * this.dpr * 0.5, this.map.edges[0] ? 0 : 0) || 1;
      c.beginPath();
      for (const e of this.map.edges) {
        if (e.cls !== pass) continue;
        const p = e.pts;
        if (p[0] < x0 - 500 || p[0] > x1 + 500 || p[1] < z0 - 500 || p[1] > z1 + 500) continue;
        c.moveTo(p[0], p[1]);
        for (let i = 2; i < p.length; i += 2) c.lineTo(p[i], p[i + 1]);
      }
      c.lineWidth = Math.max(ROAD_W[pass] * 0.5 / s * this.dpr, (7 - pass) * 1.2);
      if (s > 0.5) c.lineWidth = Math.max(c.lineWidth, 6);
      c.stroke();
    }
    if (airport) {
      c.strokeStyle = '#9aa0a8'; c.lineWidth = Math.max(55, 3 / s); c.beginPath(); c.moveTo(airport.R0.x, airport.R0.y); c.lineTo(airport.R1.x, airport.R1.y); c.stroke();
    }
    if (game.route) {
      c.strokeStyle = '#3fc8ff'; c.lineWidth = 5 / s * this.dpr;
      const p = game.route; c.beginPath(); c.moveTo(p[0], p[1]); for (let i = 2; i < p.length; i += 2) c.lineTo(p[i], p[i + 1]); c.stroke();
    }
    c.restore();
    // labels
    const toS = (x, z) => [(x - v.x) * s + W / 2, (z - v.z) * s + H / 2];
    // every named place from OpenStreetMap, more detail as you zoom in
    if (s > 0.12) {
      c.font = `500 ${10 * this.dpr}px Inter, Arial`; c.textAlign = 'center';
      const placed = [];
      const tryLabel = (txt, x, z, col, r) => {
        const [sx, sy] = toS(x, z);
        if (sx < 0 || sx > W || sy < 0 || sy > H) return;
        if (placed.some(q => Math.abs(q[0] - sx) < 70 * this.dpr && Math.abs(q[1] - sy) < 14 * this.dpr)) return;
        placed.push([sx, sy]);
        c.fillStyle = col; c.beginPath(); c.arc(sx, sy, r * this.dpr, 0, 7); c.fill();
        c.fillStyle = 'rgba(0,0,0,.7)'; c.fillText(txt, sx + 1, sy - 6 * this.dpr + 1);
        c.fillStyle = '#e8eef4'; c.fillText(txt, sx, sy - 6 * this.dpr);
      };
      for (const p of this.map.pois) tryLabel((p.en || p.name).slice(0, 28), p.x, p.z, '#7ec8ff', 3);
      if (s > 0.55) for (const ch of this.map.chunks.values()) {
        const cx0 = ch.cx * 400, cz0 = ch.cz * 400;
        if (cx0 > x1 + 400 || cx0 + 400 < x0 - 400 || cz0 > z1 + 400 || cz0 + 400 < z0 - 400) continue;
        for (const sg of ch.signs) tryLabel(sg.name.slice(0, 24), sg.x, sg.z, '#ffb070', 2.5);
      }
    }
    c.font = `600 ${12 * this.dpr}px Inter, Arial`; c.textAlign = 'center';
    for (const p of PLACES) {
      if (p.x === undefined) continue;
      const [sx, sy] = toS(p.x, p.z);
      if (sx < -50 || sx > W + 50 || sy < -50 || sy > H + 50) continue;
      c.fillStyle = game.visited.has(p.id) ? '#6ad06a' : '#ffd84a';
      c.beginPath(); c.arc(sx, sy, 5 * this.dpr, 0, 7); c.fill();
      c.fillStyle = 'rgba(0,0,0,0.6)'; c.fillText(p.name, sx + 1, sy - 9 * this.dpr + 1);
      c.fillStyle = '#fff'; c.fillText(p.name, sx, sy - 9 * this.dpr);
    }
    if (s > 0.18) {
      c.font = `${10 * this.dpr}px Inter, Arial`; c.fillStyle = 'rgba(255,255,255,0.75)';
      const seen = new Set();
      for (const e of this.map.edges) {
        if (e.cls > 2 || e.name < 0 || e.len < 150) continue;
        const nm = this.map.names[e.name]; const label = nm[1] || nm[0];
        const m = Math.floor(e.pts.length / 4) * 2;
        const [sx, sy] = toS(e.pts[m], e.pts[m + 1]);
        if (sx < 0 || sx > W || sy < 0 || sy > H) continue;
        const key = label + Math.round(sx / 220) + ',' + Math.round(sy / 220);
        if (seen.has(key)) continue; seen.add(key);
        c.fillText(label, sx, sy);
      }
    }
    if (this.searchMark) { const [sx, sy] = toS(this.searchMark.x, this.searchMark.z); const k = this.dpr; c.fillStyle = '#ff3a6a'; c.strokeStyle = '#fff'; c.lineWidth = 2 * k; c.beginPath(); c.moveTo(sx, sy); c.arc(sx, sy - 18 * k, 9 * k, Math.PI * 0.8, Math.PI * 2.2); c.closePath(); c.fill(); c.stroke(); c.fillStyle = '#fff'; c.beginPath(); c.arc(sx, sy - 18 * k, 3.5 * k, 0, 7); c.fill(); }
    if (game.routeTarget) { const [sx, sy] = toS(game.routeTarget.x, game.routeTarget.z); c.fillStyle = '#ff3a6a'; c.beginPath(); c.arc(sx, sy, 7 * this.dpr, 0, 7); c.fill(); }
    c.fillStyle = 'rgba(255,255,255,0.5)'; c.textAlign = 'right'; c.font = `${10 * this.dpr}px Inter, Arial`;
    c.fillText('Map data © OpenStreetMap contributors', W - 10 * this.dpr, H - 10 * this.dpr);
  }

  zoomMap(k, cx, cy) {
    // zoom around a screen point (defaults to the centre)
    const v = this.mapView, W = this.big.width, H = this.big.height;
    const px = cx ?? W / 2, py = cy ?? H / 2;
    const wx = v.x + (px - W / 2) / v.s, wz = v.z + (py - H / 2) / v.s;
    v.s = Math.max(0.015, Math.min(4, v.s * k));
    v.x = wx - (px - W / 2) / v.s; v.z = wz - (py - H / 2) / v.s;
  }
  zoomMini(k) { this.miniZoom = Math.max(0.35, Math.min(3, (this.miniZoom || 1) * k)); }

  centerMap(x, z, s) { this.mapView.x = x; this.mapView.z = z; if (s) this.mapView.s = s; }

  // ------------------------------------------------------------ text widgets
  setStreet(name, district) {
    // shows briefly when the street changes, then fades (clean screen)
    if (name && name !== this._street) {
      this._street = name; $('street').innerHTML = `${name}<small>${district || ''}</small>`;
      $('street').classList.add('show'); clearTimeout(this._stTo); this._stTo = setTimeout(() => $('street').classList.remove('show'), 4000);
    }
  }
  setMoney(m) {
    const t = fmt(m);
    if (t !== this._money) {
      const up = this._mv !== undefined && m > this._mv;
      this._money = t; this._mv = m; $('money').textContent = t; $('coins').classList.toggle('neg', m < 0);
      if (up) { const el = $('coins'); el.classList.remove('pop'); void el.offsetWidth; el.classList.add('pop'); }
    }
  }
  setClock(h, online) {
    this.hour = h;
    const t = this.clockText() + (online !== null && online !== undefined ? ` · <span class="dot ${online > 0 ? 'on' : ''}"></span>${online + 1}` : '');
    if (t !== this._clk) { this._clk = t; $('clock').innerHTML = t; }
  }
  setLimit(kmh, wrongWay, runway, extra) {
    const over = kmh > SPEED_LIMIT;
    $('limit').classList.toggle('show', kmh > SPEED_LIMIT - 12);
    $('limit').classList.toggle('over', over);
    const w = runway ? 'ACTIVE RUNWAY – LEAVE NOW' : wrongWay ? 'WRONG WAY – ONE-WAY STREET' : (extra || '');
    if (w !== this._w) { this._w = w; $('warn').textContent = w; $('warn').classList.toggle('show', !!w); }
  }
  setMission(text) {
    if (text !== this._mission) { this._mission = text; $('mission').innerHTML = text || ''; $('mission').classList.toggle('show', !!text); }
  }
  toast(text, sec = 3) {
    const el = $('toast'); el.innerHTML = text; el.classList.add('show');
    clearTimeout(this._toastTo); this._toastTo = setTimeout(() => el.classList.remove('show'), sec * 1000);
  }
  showFine(f) {
    const el = $('fine');
    $('fineKind').textContent = f.kind.toUpperCase();
    $('fineAmt').textContent = '−' + fmt(f.amount) + ' coins';
    $('fineDetail').textContent = f.detail;
    $('fineTime').textContent = f.time + ' · Bishkek "Safe City" camera';
    const img = $('finePhoto');
    if (f.photo) { img.src = f.photo; img.style.display = 'block'; } else img.style.display = 'none';
    el.classList.remove('show'); void el.offsetWidth; el.classList.add('show');
    const fl = $('flash'); fl.classList.remove('go'); void fl.offsetWidth; fl.classList.add('go');
    clearTimeout(this._fineTo); this._fineTo = setTimeout(() => el.classList.remove('show'), 5200);
  }
  showDiscovery(p, n, total) {
    const el = $('discover');
    $('discName').textContent = p.name;
    $('discLocal').textContent = p.local || '';
    $('discFact').textContent = p.fact;
    $('discCount').textContent = `Landmark ${n}/${total} · +500 coins`;
    el.classList.remove('show'); void el.offsetWidth; el.classList.add('show');
    clearTimeout(this._discTo); this._discTo = setTimeout(() => el.classList.remove('show'), 7000);
  }
  setFlightInfo(info) {
    const el = $('flightHud');
    if (!info) { el.classList.add('hidden'); return; }
    el.classList.remove('hidden');
    $('fhAlt').textContent = Math.round(info.alt) + ' m';
    $('fhSpd').textContent = Math.round(info.spd * 3.6) + ' km/h';
    $('fhHdg').textContent = String(Math.round(info.hdg)).padStart(3, '0') + '°';
    $('fhStage').textContent = info.stage;
    $('fhCam').textContent = info.cam;
  }
  renderBoard(board, el) {
    el.innerHTML = '<tr><th>Flight</th><th>From / To</th><th>Status</th></tr>' + board.map(b => `<tr><td>${b.flight}</td><td>${b.t === 'ARR' ? 'from ' : 'to '}${b.city}</td><td class="${/GO/.test(b.status) ? 'red' : ''}">${b.status}</td></tr>`).join('');
  }
}
