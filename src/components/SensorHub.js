// ────────────────────────────────────────────────────────
// SensorHub — Device orientation, microphone, and haptic
// integration layer.  Gracefully degrades when APIs are
// unavailable or permission is denied.
// ────────────────────────────────────────────────────────

export class SensorHub {
    constructor() {
        this.gyro       = { x: 0, y: 0, z: 0 };
        this.audioLevel = 0;
        this.audioBass  = 0;

        this.hasGyro    = false;
        this.hasAudio   = false;
        this.isMobile   = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

        this._audioCtx  = null;
        this._analyser  = null;
        this._freqData  = null;
        this._stream    = null;
    }

    /** Call once after a user gesture (click / tap). */
    async init() {
        await Promise.allSettled([
            this._initGyro(),
            this._initAudio(),
        ]);
    }

    // ─── Gyroscope / Device Orientation ─────────────
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
            this.gyro.x = (e.gamma || 0) / 90;    // left-right tilt  → -1…1
            this.gyro.y = (e.beta  || 0) / 180;    // front-back tilt  → -1…1
            this.gyro.z = (e.alpha || 0) / 360;    // compass heading  →  0…1
        }, { passive: true });
    }

    // ─── Microphone / Audio Analysis ────────────────
    async _initAudio() {
        try {
            this._stream = await navigator.mediaDevices.getUserMedia({ audio: true });

            this._audioCtx = new (window.AudioContext || window.webkitAudioContext)();
            const source = this._audioCtx.createMediaStreamSource(this._stream);

            this._analyser = this._audioCtx.createAnalyser();
            this._analyser.fftSize = 256;
            this._analyser.smoothingTimeConstant = 0.8;
            source.connect(this._analyser);

            this._freqData = new Uint8Array(this._analyser.frequencyBinCount);
            this.hasAudio = true;
        } catch {
            // Microphone unavailable or denied — simulation still works fine.
        }
    }

    /** Call every frame to refresh audio metrics. */
    update() {
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

    // ─── Haptic Feedback ────────────────────────────
    pulseHaptic(ms = 15) {
        if (navigator.vibrate) navigator.vibrate(ms);
    }

    // ─── Teardown ───────────────────────────────────
    dispose() {
        if (this._audioCtx) this._audioCtx.close();
        if (this._stream) {
            for (const track of this._stream.getTracks()) track.stop();
        }
    }
}
