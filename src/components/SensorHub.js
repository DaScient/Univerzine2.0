// ────────────────────────────────────────────────────────
// SensorHub — Full gyroscope (orientation + motion),
// procedural audio analysis (non-echo, no mic), and haptic
// integration layer. Gracefully degrades when APIs are
// unavailable or permission is denied.
// ────────────────────────────────────────────────────────

export class SensorHub {
    constructor(cosmicAudio) {
        // Gyroscope (orientation)
        this.gyro       = { x: 0, y: 0, z: 0 };
        this._gyroRaw   = { x: 0, y: 0, z: 0 };

        // Accelerometer (motion)
        this.accel          = { x: 0, y: 0, z: 0 };
        this.rotationRate   = { alpha: 0, beta: 0, gamma: 0 };
        this.shakeIntensity = 0;

        // Procedural audio analysis (non-echo — analyses CosmicAudio output, NOT mic)
        this.audioLevel = 0;
        this.audioBass  = 0;

        this.hasGyro    = false;
        this.hasMotion  = false;
        this.hasAudio   = false;
        this.isMobile   = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

        this._cosmicAudio = cosmicAudio;
        this._analyser    = null;
        this._freqData    = null;

        // Smoothing factor for gyro (higher = smoother, less responsive)
        this._smoothing   = 0.12;
    }

    /** Call once after a user gesture (click / tap). */
    async init() {
        await Promise.allSettled([
            this._initGyro(),
            this._initMotion(),
            this._initProceduralAudio(),
        ]);
    }

    // ─── Gyroscope / Device Orientation (3-axis) ────
    async _initGyro() {
        if (typeof DeviceOrientationEvent === 'undefined') return;

        // iOS 13+ requires explicit permission
        if (typeof DeviceOrientationEvent.requestPermission === 'function') {
            try {
                const result = await DeviceOrientationEvent.requestPermission();
                if (result !== 'granted') return;
            } catch {
                return;
            }
        }

        window.addEventListener('deviceorientation', (e) => {
            this.hasGyro = true;
            this._gyroRaw.x = (e.gamma || 0) / 90;    // left-right tilt  → -1…1
            this._gyroRaw.y = (e.beta  || 0) / 180;    // front-back tilt  → -1…1
            this._gyroRaw.z = (e.alpha || 0) / 360;    // compass heading  →  0…1
        }, { passive: true });
    }

    // ─── Device Motion / Accelerometer ──────────────
    async _initMotion() {
        if (typeof DeviceMotionEvent === 'undefined') return;

        // iOS 13+ requires explicit permission
        if (typeof DeviceMotionEvent.requestPermission === 'function') {
            try {
                const result = await DeviceMotionEvent.requestPermission();
                if (result !== 'granted') return;
            } catch {
                return;
            }
        }

        window.addEventListener('devicemotion', (e) => {
            this.hasMotion = true;

            const a = e.accelerationIncludingGravity || {};
            this.accel.x = a.x || 0;
            this.accel.y = a.y || 0;
            this.accel.z = a.z || 0;

            const r = e.rotationRate || {};
            this.rotationRate.alpha = r.alpha || 0;
            this.rotationRate.beta  = r.beta  || 0;
            this.rotationRate.gamma = r.gamma || 0;

            // Shake detection — magnitude of acceleration deviation from gravity
            const mag = Math.sqrt(
                this.accel.x ** 2 + this.accel.y ** 2 + this.accel.z ** 2
            );
            this.shakeIntensity = Math.abs(mag - 9.81);
        }, { passive: true });
    }

    // ─── Procedural Audio Analysis (non-echo) ───────
    // Analyses the CosmicAudio output node instead of the mic.
    // This means no echo, no ambient noise, fully deterministic.
    _initProceduralAudio() {
        if (!this._cosmicAudio || !this._cosmicAudio.ctx) return;

        try {
            const ctx = this._cosmicAudio.ctx;
            this._analyser = ctx.createAnalyser();
            this._analyser.fftSize = 256;
            this._analyser.smoothingTimeConstant = 0.8;

            // Connect CosmicAudio's master output to the analyser
            if (this._cosmicAudio.masterGain) {
                this._cosmicAudio.masterGain.connect(this._analyser);
            }

            this._freqData = new Uint8Array(this._analyser.frequencyBinCount);
            this.hasAudio = true;
        } catch {
            // Analysis unavailable — simulation continues without audio feedback
        }
    }

    /** Call every frame to refresh gyro + audio metrics. */
    update(dt) {
        // Smooth gyroscope input to prevent jitter
        const s = this._smoothing;
        this.gyro.x += (this._gyroRaw.x - this.gyro.x) * s;
        this.gyro.y += (this._gyroRaw.y - this.gyro.y) * s;
        this.gyro.z += (this._gyroRaw.z - this.gyro.z) * s;

        // Decay shake intensity
        this.shakeIntensity *= 0.9;

        // Late-bind audio analyser (CosmicAudio may not be ready at init)
        if (!this.hasAudio && this._cosmicAudio && this._cosmicAudio.ready) {
            this._initProceduralAudio();
        }

        if (!this.hasAudio || !this._analyser) return;

        this._analyser.getByteFrequencyData(this._freqData);
        const len = this._freqData.length;

        // Overall level (0-1)
        let sum = 0;
        for (let i = 0; i < len; i++) sum += this._freqData[i];
        this.audioLevel = sum / len / 255;

        // Bass energy — lowest quarter of bins (0-1)
        let bass = 0;
        const bassEnd = len >> 2;
        for (let i = 0; i < bassEnd; i++) bass += this._freqData[i];
        this.audioBass = bass / bassEnd / 255;
    }

    // ─── Haptic Feedback (pattern support) ──────────
    pulseHaptic(ms = 15) {
        if (navigator.vibrate) navigator.vibrate(ms);
    }

    pulseHapticPattern(pattern) {
        if (navigator.vibrate) navigator.vibrate(pattern);
    }

    // ─── Teardown ───────────────────────────────────
    dispose() {
        // No mic stream to clean up — non-echo architecture
    }
}
