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
    // ---- engine: firing-pulse harmonics (PeriodicWave) + crank sub-harmonic, soft-clipped and
    // filtered like an exhaust; combustion noise texture; turbo whine; blow-off & pops one-shots
    this.engGain = C.createGain(); this.engGain.gain.value = 0;
    this.engShaper = C.createWaveShaper(); this._setDrive(1.5);
    this.engFilter = C.createBiquadFilter(); this.engFilter.type = 'lowpass'; this.engFilter.frequency.value = 700; this.engFilter.Q.value = 0.8;
    this.engBody = C.createBiquadFilter(); this.engBody.type = 'peaking'; this.engBody.frequency.value = 110; this.engBody.gain.value = 7; this.engBody.Q.value = 1.2;
    const re = new Float32Array(24), im = new Float32Array(24);
    const rr = [0, 1, 0.75, 0.55, 0.62, 0.3, 0.38, 0.18, 0.26, 0.12, 0.15, 0.08, 0.1, 0.06, 0.06, 0.04, 0.05, 0.03, 0.03, 0.02, 0.02, 0.015, 0.012, 0.01];
    for (let k = 1; k < 24; k++) im[k] = rr[k];
    this.engWave = C.createPeriodicWave(re, im);
    this.engOsc = C.createOscillator(); this.engOsc.setPeriodicWave(this.engWave);
    this.engSub = C.createOscillator(); this.engSub.type = 'triangle';
    const g1 = C.createGain(); g1.gain.value = 0.55; const g2 = C.createGain(); g2.gain.value = 0.45;
    this.engOsc.connect(g1); this.engSub.connect(g2);
    g1.connect(this.engShaper); g2.connect(this.engShaper);
    // combustion texture
    const cn = C.createBufferSource(); cn.buffer = b; cn.loop = true;
    this.engNoiseF = C.createBiquadFilter(); this.engNoiseF.type = 'bandpass'; this.engNoiseF.frequency.value = 400; this.engNoiseF.Q.value = 0.9;
    this.engNoiseG = C.createGain(); this.engNoiseG.gain.value = 0.05;
    cn.connect(this.engNoiseF); this.engNoiseF.connect(this.engNoiseG); this.engNoiseG.connect(this.engShaper); cn.start();
    this.engShaper.connect(this.engBody); this.engBody.connect(this.engFilter); this.engFilter.connect(this.engGain); this.engGain.connect(this.master);
    this.engOsc.start(); this.engSub.start();
    // turbo whine
    this.turbo = C.createOscillator(); this.turbo.type = 'sine'; this.turboG = C.createGain(); this.turboG.gain.value = 0;
    this.turbo.connect(this.turboG); this.turboG.connect(this.master); this.turbo.start();
    // tyre squeal: detuned sines with vibrato
    this.squealG = C.createGain(); this.squealG.gain.value = 0;
    const vib = C.createOscillator(); vib.frequency.value = 6.5; const vibG = C.createGain(); vibG.gain.value = 35; vib.connect(vibG); vib.start();
    for (const f of [960, 1105, 1240]) { const o = C.createOscillator(); o.type = 'sine'; o.frequency.value = f; vibG.connect(o.frequency); const og = C.createGain(); og.gain.value = 0.33; o.connect(og); og.connect(this.squealG); o.start(); }
    this.squealG.connect(this.master);
    this.lastThr = 0; this.lastGear = 1;
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
    this.rain = loop('highpass', 2500, 0.3);
    this.birdT = 0;
    this._ambientT = 0;
  }

  setVolume(v) { this.vol = v; if (this.master) this.master.gain.value = this.muted ? 0 : v; }
  toggleMute() { this.muted = !this.muted; this.setVolume(this.vol); return this.muted; }

  update(dt, car, ctx) {
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    const rpm = car ? Math.max(700, car.rpm) : 0;
    const type = ctx.carType || 'sedan';
    const cyl = { coupe: 8, suv: 8, bus: 6, truck: 6, van: 4, oldsedan: 4, hatch: 4, sedan: 4 }[type] || 4;
    const diesel = type === 'van' || type === 'bus' || type === 'truck';
    const fire = rpm / 60 * cyl / 2;
    this.engOsc.frequency.setTargetAtTime(fire, t, 0.025);
    this.engSub.frequency.setTargetAtTime(fire / (cyl === 8 ? 4 : 2), t, 0.025);
    const thr = ctx.throttle || 0;
    const load = thr * (0.6 + 0.4 * Math.min(1, rpm / 5000));
    this.engFilter.frequency.setTargetAtTime((diesel ? 220 : 280) + rpm * 0.16 + load * (diesel ? 700 : 1300), t, 0.05);
    this.engNoiseF.frequency.setTargetAtTime(Math.min(3000, fire * 3), t, 0.05);
    this.engNoiseG.gain.setTargetAtTime((diesel ? 0.16 : 0.05) + load * 0.08, t, 0.05);
    if (Math.abs(load - (this._drive || 0)) > 0.15) { this._drive = load; this._setDrive(1.2 + load * (type === 'coupe' ? 5 : 2.5)); }
    const off = ctx.inFlight || ctx.onFoot;
    let vol = off ? 0 : 0.045 + load * 0.075 + Math.min(1, rpm / 7000) * 0.035;
    if (car && car.gear !== this.lastGear) { if (car.gear > this.lastGear && thr > 0.3) { this.engGain.gain.setTargetAtTime(vol * 0.35, t, 0.01); vol *= 1; } this.lastGear = car.gear; }
    this.engGain.gain.setTargetAtTime(vol * (ctx.onFoot ? 0.4 : 1), t, 0.06);
    // turbo on SUV / coupe / diesels
    const turbo = type === 'coupe' || type === 'suv' || diesel;
    this.turbo.frequency.setTargetAtTime(1800 + rpm * 0.55, t, 0.1);
    this.turboG.gain.setTargetAtTime(off || !turbo ? 0 : load * Math.min(1, rpm / 6000) * 0.012, t, 0.15);
    // lift-off: blow-off valve + exhaust crackle
    if (!off && this.lastThr > 0.7 && thr < 0.1 && rpm > 3800) {
      if (turbo) this._burst(0.25, 'highpass', 2200, 0.08);
      if (type === 'coupe' || type === 'sedan') for (let k = 0; k < 5; k++) setTimeout(() => this._burst(0.02, 'lowpass', 900, 0.18 * Math.random()), 60 + Math.random() * 600);
    }
    this.lastThr = thr;
    const sp = car ? car.speed : 0;
    this.wind.g.gain.setTargetAtTime(ctx.inFlight ? 0.35 : Math.min(0.35, (sp / 60) ** 2 * 0.35), t, 0.1);
    this.wind.fl.frequency.setTargetAtTime(400 + sp * 12, t, 0.1);
    this.road.g.gain.setTargetAtTime(ctx.inFlight ? 0 : Math.min(0.25, sp / 40 * 0.25), t, 0.1);
    const sq = ctx.inFlight || ctx.onFoot ? 0 : Math.min(1, Math.max(0, (car.slip - 0.2) * 2.2)) * (sp > 4 ? 1 : 0);
    this.tyre.g.gain.setTargetAtTime(sq * 0.18, t, 0.04);
    this.squealG.gain.setTargetAtTime(sq * 0.05, t, 0.05);
    this.rain.g.gain.setTargetAtTime((ctx.rain || 0) * 0.12, t, 0.5);
    // nature: birds in the day, crickets at night (quiet streets, no rain)
    this.birdT -= dt;
    if (this.birdT <= 0 && !ctx.inFlight && !(ctx.rain > 0.2)) {
      this.birdT = ctx.night > 0.5 ? 0.35 + Math.random() * 0.4 : 1.5 + Math.random() * 4;
      if (ctx.night > 0.5) this._cricket(); else if (ctx.cityLevel < 0.9) this._bird();
    }
    this.city.g.gain.setTargetAtTime(ctx.inFlight ? 0.02 : 0.05 + ctx.cityLevel * 0.12, t, 0.5);
    const j = ctx.jet || 0;
    this.jet.g.gain.setTargetAtTime(j * 0.6, t, 0.2);
    this.jetLow.g.gain.setTargetAtTime(j * 0.9, t, 0.2);
    this.jet.fl.frequency.setTargetAtTime(700 + j * 1800, t, 0.3);
    // random distant horns in the city (Bishkek traffic!)
    this._ambientT -= dt;
    if (this._ambientT <= 0 && !ctx.inFlight) {
      this._ambientT = 8 + Math.random() * 14 / (0.3 + ctx.cityLevel);
      if (ctx.cityLevel > 0.2) this.horn(0.05 + Math.random() * 0.06, 0.15 + Math.random() * 0.4, 0.7 + Math.random() * 0.6);
    }
  }

  _setDrive(k) {
    const n = 256, c = new Float32Array(n);
    for (let i = 0; i < n; i++) { const x = i / (n - 1) * 2 - 1; c[i] = Math.tanh(x * k) / Math.tanh(k); }
    this.engShaper.curve = c;
  }
  _burst(dur, type, f, vol) {
    const C = this.ctx, t = C.currentTime, s = C.createBufferSource(), fl = C.createBiquadFilter(), g = C.createGain();
    s.buffer = this.noise; fl.type = type; fl.frequency.value = f;
    g.gain.setValueAtTime(vol, t); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    s.connect(fl); fl.connect(g); g.connect(this.master); s.start(t, Math.random()); s.stop(t + dur + 0.05);
  }
  _bird() {
    const C = this.ctx, t = C.currentTime, n = 2 + Math.floor(Math.random() * 4), base = 2800 + Math.random() * 1800;
    for (let i = 0; i < n; i++) {
      const o = C.createOscillator(), g = C.createGain(), t0 = t + i * (0.09 + Math.random() * 0.06);
      o.frequency.setValueAtTime(base, t0); o.frequency.exponentialRampToValueAtTime(base * (1.3 + Math.random() * 0.4), t0 + 0.06);
      g.gain.setValueAtTime(0, t0); g.gain.linearRampToValueAtTime(0.012, t0 + 0.01); g.gain.exponentialRampToValueAtTime(0.0001, t0 + 0.08);
      o.connect(g); g.connect(this.master); o.start(t0); o.stop(t0 + 0.1);
    }
  }
  _cricket() {
    const C = this.ctx, t = C.currentTime;
    for (let i = 0; i < 3; i++) {
      const o = C.createOscillator(), g = C.createGain(), t0 = t + i * 0.045;
      o.frequency.value = 4400 + Math.random() * 200;
      g.gain.setValueAtTime(0, t0); g.gain.linearRampToValueAtTime(0.006, t0 + 0.005); g.gain.linearRampToValueAtTime(0, t0 + 0.03);
      o.connect(g); g.connect(this.master); o.start(t0); o.stop(t0 + 0.04);
    }
  }
  // engine start (crank + catch) when you get in
  ignition() {
    if (!this.ctx) return;
    const C = this.ctx, t = C.currentTime;
    for (let i = 0; i < 6; i++) this._burstAt(t + i * 0.11, 0.07, 'lowpass', 500, 0.08);
    this.engGain.gain.setValueAtTime(0, t); this.engGain.gain.linearRampToValueAtTime(0.11, t + 0.75); this.engGain.gain.linearRampToValueAtTime(0.05, t + 1.4);
  }
  _burstAt(t, dur, type, f, vol) {
    const C = this.ctx, s = C.createBufferSource(), fl = C.createBiquadFilter(), g = C.createGain();
    s.buffer = this.noise; fl.type = type; fl.frequency.value = f;
    g.gain.setValueAtTime(vol, t); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    s.connect(fl); fl.connect(g); g.connect(this.master); s.start(t, Math.random()); s.stop(t + dur + 0.05);
  }
  // phone notification
  ping() { this.blip(1320, 0.06, 0.08); setTimeout(() => this.blip(1760, 0.08, 0.07), 90); }

  horn(vol = 0.25, dur = 0.5, pitch = 1) {
    if (!this.ctx) return;
    const C = this.ctx, t = C.currentTime;
    const g = C.createGain(); g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(vol, t + 0.02); g.gain.setValueAtTime(vol, t + dur); g.gain.linearRampToValueAtTime(0, t + dur + 0.06);
    const fl = C.createBiquadFilter(); fl.type = 'bandpass'; fl.frequency.value = 900; fl.Q.value = 0.7;
    for (const f of [420 * pitch, 510 * pitch]) { const o = C.createOscillator(); o.type = 'sawtooth'; o.frequency.value = f; o.connect(fl); o.start(t); o.stop(t + dur + 0.1); }
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
