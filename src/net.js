// Real-time multiplayer over Supabase Realtime (Phoenix channels, broadcast only – no database
// needed). Every client streams its car state ~6x per second; remote cars are rendered with
// snapshot interpolation ~200 ms in the past so they move smoothly.
import * as THREE from 'three';
import { buildVehicle } from './carModels.js';

const SUPABASE_URL = 'wss://lzamxwqxnzcrazyuipjx.supabase.co/realtime/v1/websocket';
// public "anon" key – safe to ship in a browser (it only allows what row-level security allows)
const ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx6YW14d3F4bnpjcmF6eXVpcGp4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTAzNDM1MzAsImV4cCI6MjEwNTkxOTUzMH0.eaW442nZuPMywP230Ml6evWcH_IPGX1-Th4r0G8HKVU';
const TOPIC = 'realtime:bskdrive-world-v1';

function uid() {
  try {
    let id = localStorage.getItem('bd_uid');
    if (!id) { id = Math.random().toString(36).slice(2, 10); localStorage.setItem('bd_uid', id); }
    return id;
  } catch (e) { return Math.random().toString(36).slice(2, 10); }
}

function nameTag(text, color = '#ffffff') {
  const c = document.createElement('canvas'); c.width = 256; c.height = 64;
  const x = c.getContext('2d');
  x.font = '700 30px Inter, Arial'; const w = Math.min(248, x.measureText(text).width + 28);
  x.fillStyle = 'rgba(10,14,20,0.72)';
  const r = 18, X = (256 - w) / 2;
  x.beginPath(); x.moveTo(X + r, 8); x.arcTo(X + w, 8, X + w, 56, r); x.arcTo(X + w, 56, X, 56, r); x.arcTo(X, 56, X, 8, r); x.arcTo(X, 8, X + w, 8, r); x.fill();
  x.fillStyle = color; x.textAlign = 'center'; x.textBaseline = 'middle'; x.fillText(text, 128, 33);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace;
  const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: t, depthTest: true, transparent: true }));
  s.scale.set(4.2, 1.05, 1);
  return s;
}

export class Net {
  constructor(scene) {
    this.scene = scene;
    this.id = uid();
    this.players = new Map();     // id -> remote
    this.ws = null; this.ref = 1; this.joined = false;
    this.status = 'offline';
    this.enabled = false;
    this.sendT = 0; this.hbT = 0;
    this.onChat = null; this.onJoin = null;
    this.lastSent = null;
  }

  connect(name) {
    this.name = (name || 'Driver').slice(0, 18);
    this.enabled = true;
    this._open();
  }
  disconnect() {
    this.enabled = false;
    if (this.ws) { try { this._push('bye', { i: this.id }); this.ws.close(); } catch (e) { /* ignore */ } }
    this.ws = null; this.joined = false; this.status = 'offline';
    for (const id of [...this.players.keys()]) this._drop(id);
  }

  _open() {
    if (!this.enabled) return;
    this.status = 'connecting';
    let ws;
    try { ws = new WebSocket(`${SUPABASE_URL}?apikey=${ANON_KEY}&vsn=1.0.0`); } catch (e) { this._retry(); return; }
    this.ws = ws;
    ws.onopen = () => {
      ws.send(JSON.stringify({ topic: TOPIC, event: 'phx_join', payload: { config: { broadcast: { self: false, ack: false }, presence: { key: this.id } }, access_token: ANON_KEY }, ref: String(this.ref++), join_ref: '1' }));
    };
    ws.onmessage = (ev) => {
      let m; try { m = JSON.parse(ev.data); } catch (e) { return; }
      if (m.event === 'phx_reply' && m.topic === TOPIC && m.payload?.status === 'ok' && !this.joined) {
        this.joined = true; this.status = 'online'; this.backoff = 1;
        this._push('hi', { i: this.id, n: this.name });
        return;
      }
      if (m.event === 'broadcast' && m.payload) this._recv(m.payload.event, m.payload.payload);
    };
    ws.onclose = () => { this.joined = false; this.status = 'offline'; this.ws = null; this._retry(); };
    ws.onerror = () => { /* close follows */ };
  }
  _retry() {
    if (!this.enabled) return;
    this.backoff = Math.min(30, (this.backoff || 1) * 2);
    clearTimeout(this._rt); this._rt = setTimeout(() => this._open(), this.backoff * 1000);
  }
  _push(event, payload) {
    if (!this.ws || this.ws.readyState !== 1 || !this.joined) return;
    this.ws.send(JSON.stringify({ topic: TOPIC, event: 'broadcast', payload: { type: 'broadcast', event, payload }, ref: String(this.ref++), join_ref: '1' }));
  }

  chat(text) {
    text = String(text).slice(0, 120).trim(); if (!text) return;
    this._push('c', { i: this.id, n: this.name, m: text });
    this.onChat && this.onChat(this.name, text, true);
  }

  _recv(ev, p) {
    if (!p || p.i === this.id) return;
    if (ev === 's') {
      let r = this.players.get(p.i);
      if (!r) r = this._add(p);
      if (r.type !== p.t || r.color !== p.c) this._rebuild(r, p.t, p.c);
      if (r.name !== p.n) { r.name = p.n; r.group.remove(r.tag); r.tag = nameTag(p.n); r.tag.position.y = r.spec.roof[2][1] + 1.6; r.group.add(r.tag); }
      r.snaps.push({ t: performance.now(), x: p.x, z: p.z, h: p.h, v: p.v, b: p.b });
      if (r.snaps.length > 20) r.snaps.shift();
      r.last = performance.now(); r.money = p.m ?? r.money; r.job = p.j || ''; r.jobs = p.k ?? r.jobs;
    } else if (ev === 'c') {
      this.onChat && this.onChat(p.n, p.m, false);
    } else if (ev === 'hi') {
      this.onJoin && this.onJoin(p.n);
      this.sendT = 0; this.lastSent = null; // reply quickly so the newcomer sees us
    } else if (ev === 'bye') this._drop(p.i);
  }

  _add(p) {
    const group = new THREE.Group();
    const r = { id: p.i, name: p.n, group, snaps: [], last: performance.now(), x: p.x, z: p.z, h: p.h, money: 0, type: null, color: null };
    this.players.set(p.i, r);
    this._rebuild(r, p.t, p.c);
    r.tag = nameTag(p.n); r.tag.position.y = r.spec.roof[2][1] + 1.6; group.add(r.tag);
    this.scene.add(group);
    this.onJoin && this.onJoin(p.n);
    return r;
  }
  _rebuild(r, type, color) {
    if (r.body) { r.group.remove(r.body); r.body.traverse(o => o.geometry && o.geometry.dispose()); }
    const v = buildVehicle(['sedan', 'suv', 'coupe', 'hatch', 'oldsedan', 'van', 'bus'].includes(type) ? type : 'sedan', {});
    const body = new THREE.Group();
    const paint = new THREE.Mesh(v.paint, new THREE.MeshPhysicalMaterial({ color: color ?? 0xffffff, metalness: 0.45, roughness: 0.32, clearcoat: 1, vertexColors: true }));
    const det = new THREE.Mesh(v.detail, new THREE.MeshStandardMaterial({ vertexColors: true, metalness: 0.3, roughness: 0.3 }));
    r.lightMat = new THREE.MeshStandardMaterial({ vertexColors: true, emissive: 0xffffff, emissiveIntensity: 0.3 });
    const lights = new THREE.Mesh(v.lights, r.lightMat);
    paint.castShadow = det.castShadow = true;
    body.add(paint, det, lights);
    r.body = body; r.group.add(body);
    r.spec = v.spec; r.type = type; r.color = color;
    if (r.tag) r.tag.position.y = v.spec.roof[2][1] + 1.6;
  }
  _drop(id) {
    const r = this.players.get(id); if (!r) return;
    this.scene.remove(r.group);
    r.group.traverse(o => { if (o.geometry) o.geometry.dispose(); if (o.material) { if (o.material.map) o.material.map.dispose(); o.material.dispose(); } });
    this.players.delete(id);
  }

  update(dt, car, extra, night) {
    if (!this.enabled) return;
    const now = performance.now();
    // ---- send own state (adaptive rate: 6 Hz moving, 1 Hz parked)
    this.sendT -= dt; this.hbT -= dt;
    if (this.joined && this.sendT <= 0) {
      const moving = car.speed > 0.3;
      const st = { i: this.id, n: this.name, t: car.type, c: car.color, x: Math.round(car.x * 10) / 10, z: Math.round(car.z * 10) / 10, h: Math.round(car.h * 1000) / 1000, v: Math.round(car.speed * 10) / 10, b: car.braking ? 1 : 0, m: Math.round(extra.money), j: extra.job || '', k: extra.jobs || 0 };
      this._push('s', st);
      this.sendT = moving ? 0.16 : 1.0;
    }
    if (this.hbT <= 0 && this.ws && this.ws.readyState === 1) {
      this.hbT = 25;
      this.ws.send(JSON.stringify({ topic: 'phoenix', event: 'heartbeat', payload: {}, ref: String(this.ref++) }));
    }
    // ---- interpolate remote cars 200 ms in the past
    const rt = now - 200;
    for (const [id, r] of this.players) {
      if (now - r.last > 8000) { this._drop(id); continue; }
      const S = r.snaps;
      if (!S.length) continue;
      let a = S[0], b = S[S.length - 1];
      for (let i = 0; i < S.length - 1; i++) if (S[i].t <= rt && S[i + 1].t >= rt) { a = S[i]; b = S[i + 1]; break; }
      let x, z, h;
      if (rt >= b.t) {
        // extrapolate a little using velocity
        const ex = Math.min(0.5, (rt - b.t) / 1000);
        x = b.x + Math.sin(b.h) * b.v * ex; z = b.z + Math.cos(b.h) * b.v * ex; h = b.h;
      } else {
        const f = (rt - a.t) / Math.max(1, b.t - a.t);
        x = a.x + (b.x - a.x) * f; z = a.z + (b.z - a.z) * f;
        let dh = b.h - a.h; dh = Math.atan2(Math.sin(dh), Math.cos(dh)); h = a.h + dh * f;
      }
      r.x = x; r.z = z; r.h = h; r.v = b.v;
      r.group.position.set(x, 0.02, z);
      r.group.rotation.y = h;
      r.lightMat.emissiveIntensity = b.b ? 1.4 : (night > 0.45 ? 1.8 : 0.3);
    }
  }

  // push the local car out of remote cars (each client resolves its own car)
  collide(pl, onCrash) {
    for (const r of this.players.values()) {
      const dx0 = pl.x - r.x, dz0 = pl.z - r.z;
      if (dx0 * dx0 + dz0 * dz0 > 200) continue;
      const cr = r.spec.W / 2, n = Math.max(2, Math.round(r.spec.L / 2.2));
      for (let k = 0; k < n; k++) {
        const off = (k / (n - 1) - 0.5) * (r.spec.L - cr * 2);
        const cx = r.x + Math.sin(r.h) * off, cz = r.z + Math.cos(r.h) * off;
        for (const o of [pl.spec.L * 0.3, 0, -pl.spec.L * 0.3]) {
          const x = pl.x + Math.sin(pl.h) * o, z = pl.z + Math.cos(pl.h) * o;
          const dx = x - cx, dz = z - cz, d = Math.hypot(dx, dz), R = pl.radius + cr;
          if (d < R && d > 1e-4) {
            const nx = dx / d, nz = dz / d;
            pl.x += nx * (R - d); pl.z += nz * (R - d);
            const vn = (pl.vx - Math.sin(r.h) * r.v) * nx + (pl.vz - Math.cos(r.h) * r.v) * nz;
            if (vn < 0) { pl.vx -= nx * vn * 1.2; pl.vz -= nz * vn * 1.2; if (-vn > 2) onCrash && onCrash(-vn, 'player'); }
          }
        }
      }
    }
  }

  list() {
    return [...this.players.values()].map(r => ({ name: r.name, money: r.money || 0, job: r.job, car: r.type, x: r.x, z: r.z }));
  }
}
