// Fully synthesised audio (WebAudio): engine, tyres, wind, horn, crash, city ambience,
// jet engines, speed-camera shutter + police whistle for fines, UI blips.
export class Audio {
  constructor() { this.ctx = null; this.vol = 0.7; this.muted = false; }

  start() {
    if (this.ctx) { this.ctx.resume(); return; }
    const C = this.ctx = new (window.AudioContext || window.webkitAudioContext)();
    this.master = C.createGain(); this.master.gain.value = this.vol; this.master.connect(C.destination);
    // noise buffer
    const n = C.sampleRate * 2, b = C.createBuffer(1, n, C.sampleRate), d = b.getChannelData(0);
    let last = 0;
    for (let i = 0; i < n; i++) { const w = Math.random() * 2 - 1; last = (last + 0.02 * w) / 1.02; d[i] = w * 0.6 + last * 3; }
    this.noise = b;
    // ---- engine: two detuned saws + square sub through a lowpass
    this.engGain = C.createGain(); this.engGain.gain.value = 0;
    this.engFilter = C.createBiquadFilter(); this.engFilter.type = 'lowpass'; this.engFilter.frequency.value = 800; this.engFilter.Q.value = 2;
    this.osc = [];
    for (const [type, mul, g] of [['sawtooth', 1, 0.35], ['sawtooth', 1.01, 0.3], ['square', 0.5, 0.25], ['triangle', 2, 0.15]]) {
      const o = C.createOscillator(); o.type = type; const gg = C.createGain(); gg.gain.value = g;
      o.connect(gg); gg.connect(this.engFilter); o.start(); this.osc.push([o, mul]);
    }
    this.engFilter.connect(this.engGain); this.engGain.connect(this.master);
    // ---- noise sources: wind, tyres, city, jet
    const loop = (filterType, f, q) => {
      const s = C.createBufferSource(); s.buffer = b; s.loop = true;
      const fl = C.createBiquadFilter(); fl.type = filterType; fl.frequency.value = f; fl.Q.value = q;
      const g = C.createGain(); g.gain.value = 0;
      s.connect(fl); fl.connect(g); g.connect(this.master); s.start(Math.random() * 0.5);
      return { s, fl, g };
    };
    this.wind = loop('bandpass', 600, 0.4);
    this.tyre = loop('bandpass', 1800, 6);
    this.city = loop('lowpass', 420, 0.5);
    this.jet = loop('bandpass', 900, 0.6);
    this.jetLow = loop('lowpass', 140, 1);
    this.road = loop('lowpass', 220, 0.8);
    this._ambientT = 0;
  }

  setVolume(v) { this.vol = v; if (this.master) this.master.gain.value = this.muted ? 0 : v; }
  toggleMute() { this.muted = !this.muted; this.setVolume(this.vol); return this.muted; }

  update(dt, car, ctx) {
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    const rpm = car ? car.rpm : 0;
    const f = 28 + rpm / 60 * 1.0;
    for (const [o, mul] of this.osc) o.frequency.setTargetAtTime(f * mul, t, 0.03);
    const thr = ctx.throttle || 0;
    this.engFilter.frequency.setTargetAtTime(350 + rpm * 0.35 + thr * 900, t, 0.05);
    this.engGain.gain.setTargetAtTime(ctx.inFlight ? 0 : 0.05 + thr * 0.08 + rpm / 7000 * 0.06, t, 0.05);
    const sp = car ? car.speed : 0;
    this.wind.g.gain.setTargetAtTime(ctx.inFlight ? 0.35 : Math.min(0.35, (sp / 60) ** 2 * 0.35), t, 0.1);
    this.wind.fl.frequency.setTargetAtTime(400 + sp * 12, t, 0.1);
    this.road.g.gain.setTargetAtTime(ctx.inFlight ? 0 : Math.min(0.25, sp / 40 * 0.25), t, 0.1);
    this.tyre.g.gain.setTargetAtTime(ctx.inFlight ? 0 : Math.min(0.5, Math.max(0, (car.slip - 0.18) * 1.6)) * (sp > 5 ? 1 : 0), t, 0.04);
    this.city.g.gain.setTargetAtTime(ctx.inFlight ? 0.02 : 0.05 + ctx.cityLevel * 0.12, t, 0.5);
    const j = ctx.jet || 0;
    this.jet.g.gain.setTargetAtTime(j * 0.6, t, 0.2);
    this.jetLow.g.gain.setTargetAtTime(j * 0.9, t, 0.2);
    this.jet.fl.frequency.setTargetAtTime(700 + j * 1800, t, 0.3);
    // random distant horns in the city (Bishkek traffic!)
    this._ambientT -= dt;
    if (this._ambientT <= 0 && !ctx.inFlight) {
      this._ambientT = 2 + Math.random() * 6 / (0.3 + ctx.cityLevel);
      if (ctx.cityLevel > 0.2) this.horn(0.05 + Math.random() * 0.06, 0.15 + Math.random() * 0.4, 0.7 + Math.random() * 0.6);
    }
  }

  horn(vol = 0.25, dur = 0.5, pitch = 1) {
    if (!this.ctx) return;
    const C = this.ctx, t = C.currentTime;
    const g = C.createGain(); g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(vol, t + 0.02); g.gain.setValueAtTime(vol, t + dur); g.gain.linearRampToValueAtTime(0, t + dur + 0.06);
    const fl = C.createBiquadFilter(); fl.type = 'lowpass'; fl.frequency.value = 2200;
    for (const f of [405 * pitch, 507 * pitch]) { const o = C.createOscillator(); o.type = 'square'; o.frequency.value = f; o.connect(fl); o.start(t); o.stop(t + dur + 0.1); }
    fl.connect(g); g.connect(this.master);
  }

  crash(intensity) {
    if (!this.ctx) return;
    const C = this.ctx, t = C.currentTime;
    const s = C.createBufferSource(); s.buffer = this.noise;
    const fl = C.createBiquadFilter(); fl.type = 'lowpass'; fl.frequency.value = 900 + intensity * 80;
    const g = C.createGain(); const v = Math.min(0.9, 0.15 + intensity * 0.05);
    g.gain.setValueAtTime(v, t); g.gain.exponentialRampToValueAtTime(0.001, t + 0.5 + intensity * 0.02);
    s.connect(fl); fl.connect(g); g.connect(this.master); s.start(t, Math.random()); s.stop(t + 1.2);
    // metallic clank
    const o = C.createOscillator(); o.type = 'triangle'; o.frequency.setValueAtTime(180 + Math.random() * 120, t); o.frequency.exponentialRampToValueAtTime(60, t + 0.3);
    const g2 = C.createGain(); g2.gain.setValueAtTime(v * 0.5, t); g2.gain.exponentialRampToValueAtTime(0.001, t + 0.35);
    o.connect(g2); g2.connect(this.master); o.start(t); o.stop(t + 0.4);
  }

  // speed camera: double shutter click + police whistle
  fine() {
    if (!this.ctx) return;
    const C = this.ctx, t = C.currentTime;
    for (const dt of [0, 0.12]) {
      const s = C.createBufferSource(); s.buffer = this.noise;
      const fl = C.createBiquadFilter(); fl.type = 'highpass'; fl.frequency.value = 3000;
      const g = C.createGain(); g.gain.setValueAtTime(0.5, t + dt); g.gain.exponentialRampToValueAtTime(0.001, t + dt + 0.05);
      s.connect(fl); fl.connect(g); g.connect(this.master); s.start(t + dt); s.stop(t + dt + 0.08);
    }
    const o = C.createOscillator(); o.type = 'sine';
    const lfo = C.createOscillator(); lfo.frequency.value = 28; const lg = C.createGain(); lg.gain.value = 120;
    lfo.connect(lg); lg.connect(o.frequency);
    o.frequency.value = 2600;
    const g = C.createGain(); g.gain.setValueAtTime(0, t + 0.3); g.gain.linearRampToValueAtTime(0.18, t + 0.35); g.gain.setValueAtTime(0.18, t + 0.9); g.gain.linearRampToValueAtTime(0, t + 1.0);
    o.connect(g); g.connect(this.master); o.start(t + 0.3); lfo.start(t + 0.3); o.stop(t + 1.05); lfo.stop(t + 1.05);
  }

  siren(on) {
    if (!this.ctx) return;
    if (on && !this._siren) {
      const C = this.ctx;
      const o = C.createOscillator(); o.type = 'sawtooth';
      const lfo = C.createOscillator(); lfo.frequency.value = 0.45; const lg = C.createGain(); lg.gain.value = 320;
      lfo.connect(lg); lg.connect(o.frequency); o.frequency.value = 900;
      const fl = C.createBiquadFilter(); fl.type = 'lowpass'; fl.frequency.value = 1800;
      const g = C.createGain(); g.gain.value = 0.06;
      o.connect(fl); fl.connect(g); g.connect(this.master); o.start(); lfo.start();
      this._siren = { o, lfo, g };
    } else if (!on && this._siren) { this._siren.o.stop(); this._siren.lfo.stop(); this._siren = null; }
  }

  blip(f = 880, d = 0.08, v = 0.12) {
    if (!this.ctx) return;
    const C = this.ctx, t = C.currentTime;
    const o = C.createOscillator(); o.type = 'sine'; o.frequency.setValueAtTime(f, t); o.frequency.exponentialRampToValueAtTime(f * 1.5, t + d);
    const g = C.createGain(); g.gain.setValueAtTime(v, t); g.gain.exponentialRampToValueAtTime(0.001, t + d + 0.1);
    o.connect(g); g.connect(this.master); o.start(t); o.stop(t + d + 0.12);
  }

  // traffic police whistle (short double blast)
  whistle() {
    if (!this.ctx) return;
    const C = this.ctx, t = C.currentTime;
    for (const [d, len] of [[0, 0.12], [0.18, 0.28]]) {
      const o = C.createOscillator(); o.type = 'sine'; o.frequency.value = 2900;
      const lfo = C.createOscillator(); lfo.frequency.value = 35; const lg = C.createGain(); lg.gain.value = 140; lfo.connect(lg); lg.connect(o.frequency);
      const g = C.createGain(); g.gain.setValueAtTime(0, t + d); g.gain.linearRampToValueAtTime(0.12, t + d + 0.02); g.gain.setValueAtTime(0.12, t + d + len); g.gain.linearRampToValueAtTime(0, t + d + len + 0.03);
      o.connect(g); g.connect(this.master); o.start(t + d); lfo.start(t + d); o.stop(t + d + len + 0.05); lfo.stop(t + d + len + 0.05);
    }
  }
  chime() { this.blip(660, 0.1); setTimeout(() => this.blip(990, 0.15), 120); }
  cash() { this.blip(1200, 0.05, 0.1); setTimeout(() => this.blip(1600, 0.08, 0.1), 70); setTimeout(() => this.blip(2000, 0.1, 0.08), 150); }
  // airport PA "ding-dong"
  pa() { this.blip(784, 0.25, 0.12); setTimeout(() => this.blip(622, 0.4, 0.12), 350); }
}
