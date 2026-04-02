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
        /** @type {string} */
        this.errorMessage = '';

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

    /**
     * Get a user-friendly error message.
     * @returns {string}
     */
    getErrorMessage() {
        switch (this.state) {
            case 'denied':
                return 'Camera permission denied. Check browser settings.';
            case 'error':
                return this.errorMessage || 'Camera unavailable. Check hardware/drivers.';
            case 'idle':
                return '';
            case 'requesting':
                return 'Requesting camera access...';
            case 'streaming':
                return '';
            default:
                return '';
        }
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
            // Handle different types of errors with appropriate fallbacks
            console.warn('[CameraAR] Initial camera request failed:', err.name, err.message);

            if (err.name === 'NotAllowedError') {
                this.state = 'denied';
                this.errorMessage = 'Camera access denied by user.';
                return false;
            }

            if (err.name === 'NotFoundError' || err.name === 'DevicesNotFoundError') {
                this.state = 'error';
                this.errorMessage = 'No camera device found.';
                console.error('[CameraAR] No camera device found');
                return false;
            }

            if (err.name === 'NotReadableError') {
                this.state = 'error';
                this.errorMessage = 'Camera is in use by another app.';
                console.error('[CameraAR] Camera is already in use');
                return false;
            }

            // Try fallback: reduced quality constraints
            try {
                this.stream = await navigator.mediaDevices.getUserMedia({
                    video: { width: { ideal: 1280 }, height: { ideal: 720 }, frameRate: { ideal: 24 } },
                    audio: false,
                });
            } catch (fallbackErr) {
                console.warn('[CameraAR] Fallback 1 failed:', fallbackErr.name);

                // Try fallback 2: minimal constraints
                try {
                    this.stream = await navigator.mediaDevices.getUserMedia({
                        video: true,
                        audio: false,
                    });
                } catch (fallback2Err) {
                    console.warn('[CameraAR] All camera access attempts failed:', fallback2Err.name);

                    if (fallback2Err.name === 'NotAllowedError') {
                        this.state = 'denied';
                        this.errorMessage = 'Camera access denied.';
                    } else if (fallback2Err.name === 'NotFoundError' || fallback2Err.name === 'DevicesNotFoundError') {
                        this.state = 'error';
                        this.errorMessage = 'No camera device found.';
                        console.error('[CameraAR] No camera device found');
                    } else if (fallback2Err.name === 'NotReadableError') {
                        this.state = 'error';
                        this.errorMessage = 'Camera unavailable, may be in use.';
                        console.error('[CameraAR] Camera is already in use or cannot be accessed');
                    } else {
                        this.state = 'error';
                        this.errorMessage = 'Camera access failed: ' + fallback2Err.name;
                    }
                    return false;
                }
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

        try {
            await this.video.play();
        } catch (playErr) {
            // Handle autoplay policy or permissions issues
            console.warn('[CameraAR] Video playback failed:', playErr.name, playErr.message);
            if (playErr.name === 'NotAllowedError') {
                this.state = 'denied';
                this.errorMessage = 'Autoplay policy blocked video.';
            } else if (playErr.name === 'NotSupportedError') {
                this.state = 'error';
                this.errorMessage = 'Video format not supported.';
            } else {
                this.state = 'error';
                this.errorMessage = 'Video playback failed: ' + playErr.name;
            }
            // Stop the stream since playback failed
            for (const track of this.stream.getTracks()) track.stop();
            this.stream = null;
            return false;
        }

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
