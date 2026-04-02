// ────────────────────────────────────────────────────────
// CosmicAudio — Procedural ambient sound synthesis
// Generates evolving cosmic drone tied to Big Bang epochs.
// Uses Web Audio API oscillators + filters, no mic needed.
// Non-echo: masterGain is exposed for SensorHub analysis.
// ────────────────────────────────────────────────────────

export class CosmicAudio {
    constructor() {
        this.ctx         = null;
        this.masterGain  = null;
        this.droneOsc    = null;
        this.subOsc      = null;
        this.harmOsc     = null;
        this.noiseGain   = null;
        this.noiseSource = null;
        this.filter      = null;
        this.compressor  = null;
        this.ready       = false;
    }

    /** Call once after a user gesture. */
    init() {
        try {
            this.ctx = new (window.AudioContext || window.webkitAudioContext)();
        } catch {
            return;
        }

        // ─── Dynamics compressor (prevents clipping, clean output) ──
        this.compressor = this.ctx.createDynamicsCompressor();
        this.compressor.threshold.value = -24;
        this.compressor.knee.value = 12;
        this.compressor.ratio.value = 4;
        this.compressor.attack.value = 0.003;
        this.compressor.release.value = 0.15;
        this.compressor.connect(this.ctx.destination);

        // ─── Master volume ──────────────────────────
        this.masterGain = this.ctx.createGain();
        this.masterGain.gain.value = 0;
        this.masterGain.connect(this.compressor);

        // ─── Low-pass filter ────────────────────────
        this.filter = this.ctx.createBiquadFilter();
        this.filter.type = 'lowpass';
        this.filter.frequency.value = 300;
        this.filter.Q.value = 1.5;
        this.filter.connect(this.masterGain);

        // ─── Main drone oscillator ──────────────────
        this.droneOsc = this.ctx.createOscillator();
        this.droneOsc.type = 'sine';
        this.droneOsc.frequency.value = 55;            // A1
        const droneGain = this.ctx.createGain();
        droneGain.gain.value = 0.15;
        this.droneOsc.connect(droneGain);
        droneGain.connect(this.filter);
        this.droneOsc.start();

        // ─── Sub-bass oscillator ────────────────────
        this.subOsc = this.ctx.createOscillator();
        this.subOsc.type = 'sine';
        this.subOsc.frequency.value = 27.5;            // A0
        const subGain = this.ctx.createGain();
        subGain.gain.value = 0.12;
        this.subOsc.connect(subGain);
        subGain.connect(this.filter);
        this.subOsc.start();

        // ─── Harmonic overtone (adds spectral richness) ──
        this.harmOsc = this.ctx.createOscillator();
        this.harmOsc.type = 'triangle';
        this.harmOsc.frequency.value = 110;            // A2
        this._harmGain = this.ctx.createGain();
        this._harmGain.gain.value = 0.04;
        this.harmOsc.connect(this._harmGain);
        this._harmGain.connect(this.filter);
        this.harmOsc.start();

        // ─── Noise layer (simulates cosmic hiss) ────
        this._createNoise();

        this.ready = true;
    }

    _createNoise() {
        const bufferSize = this.ctx.sampleRate * 2;
        const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
        const data = buffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
            data[i] = (Math.random() * 2 - 1) * 0.5;
        }

        this.noiseSource = this.ctx.createBufferSource();
        this.noiseSource.buffer = buffer;
        this.noiseSource.loop = true;

        this.noiseGain = this.ctx.createGain();
        this.noiseGain.gain.value = 0.03;

        const noiseLPF = this.ctx.createBiquadFilter();
        noiseLPF.type = 'lowpass';
        noiseLPF.frequency.value = 800;

        this.noiseSource.connect(noiseLPF);
        noiseLPF.connect(this.noiseGain);
        this.noiseGain.connect(this.masterGain);
        this.noiseSource.start();
    }

    /**
     * Call every frame with the current epoch state.
     * @param {number} phase   - 0 singularity · 1 inflation · 2 cooling · 3 structure
     * @param {number} temperature - kelvin
     * @param {number} time    - seconds elapsed
     */
    update(phase, temperature, time) {
        if (!this.ready) return;

        const now = this.ctx.currentTime;
        const ramp = 0.1;

        if (phase === 0) {
            // SINGULARITY — distant rumble, sub-bass only
            this.masterGain.gain.linearRampToValueAtTime(0.12, now + ramp);
            this.droneOsc.frequency.linearRampToValueAtTime(40 + Math.sin(time * 0.5) * 5, now + ramp);
            this.filter.frequency.linearRampToValueAtTime(200, now + ramp);
            this.noiseGain.gain.linearRampToValueAtTime(0.01, now + ramp);
            this._harmGain.gain.linearRampToValueAtTime(0.02, now + ramp);
            this.harmOsc.frequency.linearRampToValueAtTime(80, now + ramp);
        } else if (phase === 1) {
            // INFLATION — rising roar, opening filter, louder noise
            this.masterGain.gain.linearRampToValueAtTime(0.35, now + ramp);
            this.droneOsc.frequency.linearRampToValueAtTime(80 + time * 4, now + ramp);
            this.filter.frequency.linearRampToValueAtTime(1200 + time * 100, now + ramp);
            this.noiseGain.gain.linearRampToValueAtTime(0.08, now + ramp);
            this._harmGain.gain.linearRampToValueAtTime(0.08, now + ramp);
            this.harmOsc.frequency.linearRampToValueAtTime(165 + time * 3, now + ramp);
        } else if (phase === 2) {
            // COOLING — settling, gentle modulation
            this.masterGain.gain.linearRampToValueAtTime(0.2, now + ramp);
            this.droneOsc.frequency.linearRampToValueAtTime(55 + Math.sin(time * 0.2) * 10, now + ramp);
            this.filter.frequency.linearRampToValueAtTime(600, now + ramp);
            this.noiseGain.gain.linearRampToValueAtTime(0.04, now + ramp);
            this._harmGain.gain.linearRampToValueAtTime(0.05, now + ramp);
            this.harmOsc.frequency.linearRampToValueAtTime(110, now + ramp);
        } else {
            // STRUCTURE — deep calm, slow oscillation
            this.masterGain.gain.linearRampToValueAtTime(0.15, now + ramp);
            this.droneOsc.frequency.linearRampToValueAtTime(50 + Math.sin(time * 0.08) * 8, now + ramp);
            this.filter.frequency.linearRampToValueAtTime(400, now + ramp);
            this.noiseGain.gain.linearRampToValueAtTime(0.025, now + ramp);
            this._harmGain.gain.linearRampToValueAtTime(0.035, now + ramp);
            this.harmOsc.frequency.linearRampToValueAtTime(82.5 + Math.sin(time * 0.05) * 12, now + ramp);
        }
    }

    /** Fade out and stop. */
    dispose() {
        if (!this.ready) return;
        const now = this.ctx.currentTime;
        this.masterGain.gain.linearRampToValueAtTime(0, now + 1.0);
        setTimeout(() => this.ctx.close(), 1200);
    }
}
