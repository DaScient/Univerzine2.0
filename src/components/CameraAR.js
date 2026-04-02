// ═══════════════════════════════════════════════════════════
// CameraAR — Immersive Camera Passthrough for XR/AR Overlay
// Manages getUserMedia camera stream, composites as background
// behind the transparent WebGL canvas so GPGPU particles
// appear to interact with the physical environment.
//
// Architecture:
//   <video#ar-video>  (camera feed, CSS layer behind canvas)
//   <canvas#canvas>   (WebGL, clearAlpha = 0 when AR active)
//
// Zero-copy pipeline: the <video> element is painted by the
// browser's native compositor — no readback, no texImage2D,
// no extra draw calls.  The WebGL scene uses AdditiveBlending
// with a transparent clear colour, so luminous particles
// naturally composite over the live camera feed.
// ═══════════════════════════════════════════════════════════

export class CameraAR {
    constructor() {
        /** @type {HTMLVideoElement|null} */
        this.video    = null;
        /** @type {MediaStream|null} */
        this.stream   = null;
        /** @type {boolean} */
        this.active   = false;
        /** @type {boolean} */
        this.supported = !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia);
        /** @type {'idle'|'requesting'|'streaming'|'denied'|'error'} */
        this.state    = 'idle';

        // Preferred camera constraints — rear-facing for AR,
        // with graceful fallback to any available camera.
        this._constraints = {
            video: {
                facingMode: { ideal: 'environment' },
                width:      { ideal: 1920 },
                height:     { ideal: 1080 },
                frameRate:  { ideal: 30, max: 60 },
            },
            audio: false,
        };
    }

    // ───────────────────────────────────────────────────
    // Lifecycle
    // ───────────────────────────────────────────────────

    /**
     * Request camera permission and start the video stream.
     * Creates the <video> element once, reuses on subsequent calls.
     * @param {THREE.WebGLRenderer} renderer
     * @returns {Promise<boolean>} true if camera is now streaming
     */
    async start(renderer) {
        if (!this.supported) {
            console.warn('[CameraAR] getUserMedia not supported');
            this.state = 'error';
            return false;
        }
        if (this.active) return true;

        this.state = 'requesting';

        try {
            // Request camera — the browser will show its permission prompt
            this.stream = await navigator.mediaDevices.getUserMedia(this._constraints);
        } catch (err) {
            // Fallback: try without facingMode constraint
            try {
                this.stream = await navigator.mediaDevices.getUserMedia({
                    video: { width: { ideal: 1280 }, height: { ideal: 720 } },
                    audio: false,
                });
            } catch (fallbackErr) {
                console.warn('[CameraAR] Camera access denied:', fallbackErr.name);
                this.state = fallbackErr.name === 'NotAllowedError' ? 'denied' : 'error';
                return false;
            }
        }

        // Create or reuse the <video> element
        if (!this.video) {
            this.video = document.createElement('video');
            this.video.id          = 'ar-video';
            this.video.playsInline = true;
            this.video.muted       = true;
            this.video.autoplay    = true;
            this.video.setAttribute('playsinline', '');
            this.video.setAttribute('muted', '');
            // Insert behind the canvas
            document.body.insertBefore(this.video, document.getElementById('canvas'));
        }

        this.video.srcObject = this.stream;
        await this.video.play();
        this.video.classList.add('active');

        // Make WebGL canvas transparent so camera shows through
        renderer.setClearColor(0x000000, 0);
        document.getElementById('canvas').classList.add('ar-mode');

        this.active = true;
        this.state  = 'streaming';
        return true;
    }

    /**
     * Stop the camera and restore opaque canvas background.
     * @param {THREE.WebGLRenderer} renderer
     */
    stop(renderer) {
        if (this.stream) {
            for (const track of this.stream.getTracks()) track.stop();
            this.stream = null;
        }
        if (this.video) {
            this.video.srcObject = null;
            this.video.classList.remove('active');
        }

        // Restore opaque black clear
        renderer.setClearColor(0x000000, 1);
        document.getElementById('canvas').classList.remove('ar-mode');

        this.active = false;
        this.state  = 'idle';
    }

    /**
     * Toggle AR camera on/off.
     * @param {THREE.WebGLRenderer} renderer
     * @returns {Promise<boolean>} final active state
     */
    async toggle(renderer) {
        if (this.active) {
            this.stop(renderer);
            return false;
        }
        return this.start(renderer);
    }

    /**
     * Clean up all resources.
     * @param {THREE.WebGLRenderer} renderer
     */
    dispose(renderer) {
        this.stop(renderer);
        if (this.video && this.video.parentNode) {
            this.video.parentNode.removeChild(this.video);
            this.video = null;
        }
    }
}
