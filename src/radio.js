// In-car radio: four stations of procedurally generated music (WebAudio, no audio files).
const NOTE = (n) => 440 * Math.pow(2, (n - 69) / 12);

export const STATIONS = [
  { name: 'Bishkek FM', genre: 'Pop hits', bpm: 112, prog: [[60, 64, 67], [67, 71, 74], [69, 72, 76], [65, 69, 72]], scale: [0, 2, 4, 7, 9], style: 'pop' },
  { name: 'Night Drive 101.1', genre: 'Synthwave', bpm: 100, prog: [[57, 60, 64], [53, 57, 60], [60, 64, 67], [55, 59, 62]], scale: [0, 3, 5, 7, 10], style: 'synth' },
  { name: 'Komuz Radio', genre: 'Kyrgyz folk', bpm: 96, prog: [[62, 69, 74], [62, 69, 74], [60, 67, 72], [62, 69, 74]], scale: [0, 2, 5, 7, 9], style: 'folk' },
  { name: 'Ala-Too Lo-fi', genre: 'Lo-fi beats', bpm: 78, prog: [[62, 65, 69, 72], [67, 71, 74, 77], [60, 64, 67, 71], [57, 60, 64, 67]], scale: [0, 3, 5, 7, 10], style: 'lofi' },
];

export class Radio {
  constructor(audio) { this.audio = audio; this.idx = -1; this.timer = null; }
  get on() { return this.idx >= 0; }
  get station() { return STATIONS[this.idx]; }

  next() {
    this.audio.start();
    this.idx = this.idx + 1 >= STATIONS.length ? -1 : this.idx + 1;
    this._stop();
    if (this.idx >= 0) this._start();
    return this.idx >= 0 ? STATIONS[this.idx] : null;
  }
  setVolume(v) { if (this.out) this.out.gain.value = v; }

  _start() {
    const C = this.audio.ctx; if (!C) return;
    this.out = C.createGain(); this.out.gain.value = 0.32;
    // "car speaker" tone: gentle lowpass + a little compression
    const lp = C.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 6500;
    const comp = C.createDynamicsCompressor();
    this.out.connect(lp); lp.connect(comp); comp.connect(this.audio.master);
    this.step = 0; this.nextT = C.currentTime + 0.1;
    this.seed = Math.random() * 1000;
    this.timer = setInterval(() => this._schedule(), 40);
  }
  _stop() {
    clearInterval(this.timer); this.timer = null;
    if (this.out) { const o = this.out; o.gain.setTargetAtTime(0, this.audio.ctx.currentTime, 0.05); setTimeout(() => o.disconnect(), 400); this.out = null; }
  }

  _rnd() { this.seed = (this.seed * 9301 + 49297) % 233280; return this.seed / 233280; }

  _schedule() {
    const C = this.audio.ctx, S = STATIONS[this.idx]; if (!C || !S || !this.out) return;
    const spb = 60 / S.bpm / 4; // 16th notes
    while (this.nextT < C.currentTime + 0.25) {
      const st = this.step, t = this.nextT + (S.style === 'lofi' && st % 2 ? spb * 0.18 : 0);
      const bar = Math.floor(st / 16) % S.prog.length, beat = st % 16;
      const chord = S.prog[bar];
      const root = chord[0] - 12;
      if (S.style === 'pop') {
        if (beat % 4 === 0) this._kick(t, 0.9);
        if (beat === 4 || beat === 12) this._snare(t, 0.35);
        if (beat % 2 === 0) this._hat(t, beat % 4 === 2 ? 0.12 : 0.06);
        if (beat % 2 === 0) this._tone(t, NOTE(root - 12), spb * 1.8, 'sawtooth', 0.12, 500);
        if (beat === 0) for (const n of chord) this._tone(t, NOTE(n), spb * 15, 'triangle', 0.035, 2500, 0.05);
        if (this._rnd() < 0.45 && beat % 2 === 0) this._tone(t, NOTE(72 + this._pick(S.scale, chord[0])), spb * 1.6, 'square', 0.035, 3000);
      } else if (S.style === 'synth') {
        if (beat % 4 === 0) this._kick(t, 1);
        if (beat === 4 || beat === 12) this._snare(t, 0.5, true);
        this._hat(t, 0.04);
        this._tone(t, NOTE(root - 12 + (beat % 2 ? 12 : 0)), spb * 0.9, 'sawtooth', 0.09, 900);
        if (beat === 0) for (const n of chord) { this._tone(t, NOTE(n), spb * 16, 'sawtooth', 0.025, 1800, 0.4); this._tone(t, NOTE(n) * 1.006, spb * 16, 'sawtooth', 0.02, 1800, 0.4); }
        if (beat % 4 === 2 && this._rnd() < 0.7) this._tone(t, NOTE(76 + this._pick(S.scale, chord[0])), spb * 3, 'square', 0.03, 2200);
      } else if (S.style === 'folk') {
        // komuz-like plucked melody over a drone, galloping rhythm
        if (beat % 8 === 0) this._tone(t, NOTE(50), spb * 8, 'triangle', 0.08, 700);
        if ([0, 3, 6, 8, 11, 14].includes(beat)) this._pluck(t, NOTE(62 + this._pick(S.scale, 62) + (this._rnd() < 0.3 ? 12 : 0)), 0.12);
        if (beat % 8 === 0) this._drum(t, 0.6); else if (beat % 8 === 3 || beat % 8 === 6) this._drum(t, 0.25);
      } else {
        // lo-fi: dusty kick/snare, soft rhodes-like chords, vinyl crackle
        if (beat === 0 || beat === 10) this._kick(t, 0.6);
        if (beat === 4 || beat === 12) this._snare(t, 0.18);
        if (beat % 2 === 0) this._hat(t, 0.03);
        if (beat === 0 || beat === 8) for (const n of chord) this._tone(t, NOTE(n), spb * 7, 'sine', 0.05, 1600, 0.02);
        if (beat % 4 === 0) this._tone(t, NOTE(root - 12), spb * 3.5, 'sine', 0.14, 300);
        if (this._rnd() < 0.15) this._crackle(t);
      }
      this.step++; this.nextT += spb;
    }
  }
  _pick(scale, base) { return scale[Math.floor(this._rnd() * scale.length)] + (base % 12 === 0 ? 0 : 0); }

  _env(g, t, a, d, v) { g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(v, t + a); g.gain.exponentialRampToValueAtTime(0.0001, t + a + d); }
  _tone(t, f, dur, type, vol, cutoff, attack = 0.005) {
    const C = this.audio.ctx, o = C.createOscillator(), g = C.createGain(), fl = C.createBiquadFilter();
    o.type = type; o.frequency.value = f; fl.type = 'lowpass'; fl.frequency.value = cutoff;
    this._env(g, t, attack, dur, vol);
    o.connect(fl); fl.connect(g); g.connect(this.out); o.start(t); o.stop(t + attack + dur + 0.05);
  }
  _pluck(t, f, vol) {
    const C = this.audio.ctx;
    for (const [mul, v] of [[1, vol], [2, vol * 0.35], [3, vol * 0.15]]) {
      const o = C.createOscillator(), g = C.createGain(); o.type = 'triangle'; o.frequency.value = f * mul;
      this._env(g, t, 0.003, 0.5 / mul, v); o.connect(g); g.connect(this.out); o.start(t); o.stop(t + 0.6);
    }
  }
  _kick(t, v) {
    const C = this.audio.ctx, o = C.createOscillator(), g = C.createGain();
    o.frequency.setValueAtTime(140, t); o.frequency.exponentialRampToValueAtTime(42, t + 0.12);
    this._env(g, t, 0.002, 0.25, v * 0.8); o.connect(g); g.connect(this.out); o.start(t); o.stop(t + 0.3);
  }
  _noise(t, dur, type, f, v) {
    const C = this.audio.ctx, s = C.createBufferSource(), fl = C.createBiquadFilter(), g = C.createGain();
    s.buffer = this.audio.noise; fl.type = type; fl.frequency.value = f;
    this._env(g, t, 0.002, dur, v); s.connect(fl); fl.connect(g); g.connect(this.out); s.start(t, Math.random()); s.stop(t + dur + 0.05);
  }
  _snare(t, v, big) { this._noise(t, big ? 0.3 : 0.16, 'bandpass', 1800, v); this._tone(t, 190, 0.08, 'triangle', v * 0.3, 2000); }
  _hat(t, v) { this._noise(t, 0.04, 'highpass', 8000, v); }
  _drum(t, v) { this._tone(t, 90, 0.18, 'sine', v * 0.5, 400); this._noise(t, 0.08, 'lowpass', 900, v * 0.25); }
  _crackle(t) { this._noise(t, 0.01, 'highpass', 3000, 0.05); }
}
