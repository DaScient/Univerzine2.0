// ═══════════════════════════════════════════════════════════
// FlyCamera — Smooth 6-axis free-flight camera controller
// Supports keyboard (WASD/arrows), touch (drag/pinch/swipe),
// and gyroscope. Seamless mode toggling between auto-rotate
// and manual flight. Optimized for all devices.
// ═══════════════════════════════════════════════════════════

import * as THREE from 'three';

export class FlyCamera {
    /**
     * @param {THREE.PerspectiveCamera} camera
     * @param {HTMLElement} domElement
     */
    constructor(camera, domElement) {
        this.camera = camera;
        this.domElement = domElement;

        // Flight state
        this.enabled = false;
        this.velocity = new THREE.Vector3();
        this.direction = new THREE.Vector3();
        this.right = new THREE.Vector3();
        this.worldUp = new THREE.Vector3(0, 0, 1);

        // Speed parameters (optimized for smooth glide)
        this.baseSpeed = 25.0;         // units/second normal mode
        this.maxSpeed = 150.0;         // units/second max
        this.speedBoost = 1.0;         // multiplier (1.0 normal, 2.5+ boosted)
        this.acceleration = 8.0;       // higher = snappier response
        this.friction = 0.94;          // momentum decay (higher = more coasting)

        // Rotation parameters (smoother on mobile)
        this.pitch = 0;
        this.yaw = 0;
        this.rotationSpeed = 0.003;    // radians per pixel
        this.rotationInertia = new THREE.Vector2();
        this.rotationFriction = 0.92;

        // Touch input state
        this._keys = {};
        this._pointers = new Map();     // multi-touch tracking
        this._lastTouchDist = 0;
        this._lastTouchCenter = new THREE.Vector2();
        this._isDragging = false;
        this._dragStart = new THREE.Vector2();
        this._dragCurrent = new THREE.Vector2();

        // Virtual joystick (for mobile forward/back control)
        this._touchMoveActive = false;
        this._touchMoveDir = new THREE.Vector2();

        // Gesture detection
        this._lastTapTime = 0;
        this._lastTapPos = new THREE.Vector2();
        this._doubleTapThreshold = 300;
        this._tapDistThreshold = 20;
        this._swipeThreshold = 50;
        this._swipeVelocity = new THREE.Vector2();

        // Initial camera state (to restore after disable)
        this._savedPosition = new THREE.Vector3();
        this._savedQuaternion = new THREE.Quaternion();

        // Bind handlers
        this._onKeyDown = this._onKeyDown.bind(this);
        this._onKeyUp = this._onKeyUp.bind(this);
        this._onPointerDown = this._onPointerDown.bind(this);
        this._onPointerMove = this._onPointerMove.bind(this);
        this._onPointerUp = this._onPointerUp.bind(this);
        this._onPointerCancel = this._onPointerCancel.bind(this);
        this._onWheel = this._onWheel.bind(this);
        this._onContextMenu = this._onContextMenu.bind(this);
    }

    /**
     * Enable fly mode — saves camera state and starts listening.
     */
    enable() {
        if (this.enabled) return;
        this.enabled = true;

        // Save current camera orientation
        this._savedPosition.copy(this.camera.position);
        this._savedQuaternion.copy(this.camera.quaternion);

        // Extract current pitch/yaw from camera
        const euler = new THREE.Euler().setFromQuaternion(this.camera.quaternion, 'ZXY');
        this.yaw = euler.z;
        this.pitch = euler.x;

        // Reset velocities
        this.velocity.set(0, 0, 0);
        this.rotationInertia.set(0, 0);
        this._swipeVelocity.set(0, 0);

        this._attachEventListeners();
        this.updateCameraVectors();
    }

    /**
     * Disable fly mode and reset state.
     */
    disable() {
        if (!this.enabled) return;
        this.enabled = false;

        // Clear all state
        this.velocity.set(0, 0, 0);
        this.rotationInertia.set(0, 0);
        this._keys = {};
        this._pointers.clear();
        this._isDragging = false;
        this._touchMoveActive = false;

        this._detachEventListeners();
    }

    /**
     * Update camera orientation based on pitch/yaw.
     */
    updateCameraVectors() {
        // Build quaternion from Euler (Z-up coordinate system)
        const euler = new THREE.Euler(this.pitch, 0, this.yaw, 'ZXY');
        this.camera.quaternion.setFromEuler(euler);

        // Update movement vectors
        this.camera.getWorldDirection(this.direction);
        this.right.crossVectors(this.direction, this.worldUp).normalize();
    }

    /**
     * Main update — call once per frame.
     * @param {number} dt delta time in seconds
     */
    update(dt) {
        if (!this.enabled) return;

        // Clamp delta to prevent huge jumps
        dt = Math.min(dt, 0.1);

        // ─── Rotation ───
        if (!this._isDragging) {
            // Apply rotation inertia when not dragging
            this.yaw += this.rotationInertia.x;
            this.pitch += this.rotationInertia.y;
            this.rotationInertia.multiplyScalar(this.rotationFriction);

            // Stop very small inertia
            if (this.rotationInertia.length() < 0.0001) {
                this.rotationInertia.set(0, 0);
            }
        }

        // Clamp pitch to prevent flip
        this.pitch = THREE.MathUtils.clamp(this.pitch, -Math.PI / 2 + 0.05, Math.PI / 2 - 0.05);

        this.updateCameraVectors();

        // ─── Movement ───
        const targetVelocity = new THREE.Vector3();
        const speed = this.baseSpeed * this.speedBoost;

        // Keyboard input
        const fwd = (this._keys['w'] || this._keys['W'] || this._keys['ArrowUp']) ? 1 : 0;
        const back = (this._keys['s'] || this._keys['S'] || this._keys['ArrowDown']) ? 1 : 0;
        const left = (this._keys['a'] || this._keys['A'] || this._keys['ArrowLeft']) ? 1 : 0;
        const right = (this._keys['d'] || this._keys['D'] || this._keys['ArrowRight']) ? 1 : 0;
        const up = (this._keys['q'] || this._keys['Q'] || this._keys[' ']) ? 1 : 0;
        const down = (this._keys['e'] || this._keys['E'] || this._keys['Shift']) ? 1 : 0;

        // Forward/backward
        if (fwd - back !== 0) {
            targetVelocity.addScaledVector(this.direction, (fwd - back) * speed);
        }

        // Strafe left/right
        if (right - left !== 0) {
            targetVelocity.addScaledVector(this.right, (right - left) * speed);
        }

        // Vertical
        if (up - down !== 0) {
            targetVelocity.z += (up - down) * speed * 0.7;
        }

        // Touch move input (virtual joystick from two-finger drag)
        if (this._touchMoveActive && this._touchMoveDir.length() > 0.1) {
            // Map touch direction to movement
            targetVelocity.addScaledVector(this.direction, -this._touchMoveDir.y * speed);
            targetVelocity.addScaledVector(this.right, this._touchMoveDir.x * speed);
        }

        // Smooth acceleration
        const lerpFactor = 1 - Math.exp(-this.acceleration * dt);
        this.velocity.lerp(targetVelocity, lerpFactor);

        // Apply friction when no input
        if (targetVelocity.lengthSq() < 0.01) {
            this.velocity.multiplyScalar(this.friction);
        }

        // Clamp to max speed
        const currentSpeed = this.velocity.length();
        if (currentSpeed > this.maxSpeed) {
            this.velocity.multiplyScalar(this.maxSpeed / currentSpeed);
        }

        // Stop tiny velocities to prevent drift
        if (currentSpeed < 0.01) {
            this.velocity.set(0, 0, 0);
        }

        // Update position
        this.camera.position.addScaledVector(this.velocity, dt);

        // Reset boost each frame (re-applied by held key)
        if (!this._keys[' ']) {
            this.speedBoost = Math.max(1.0, this.speedBoost * 0.95);
        }
    }

    /**
     * Get current speed for HUD.
     */
    getSpeed() {
        return this.velocity.length();
    }

    // ─────────────────────────────────────────────────────────
    // Event Handlers
    // ─────────────────────────────────────────────────────────

    _onKeyDown(e) {
        if (!this.enabled) return;

        this._keys[e.key] = true;

        // Speed boost on space
        if (e.key === ' ') {
            this.speedBoost = 2.5;
            e.preventDefault();
        }
    }

    _onKeyUp(e) {
        this._keys[e.key] = false;
    }

    _onPointerDown(e) {
        if (!this.enabled) return;
        if (e.target !== this.domElement) return;

        // Track this pointer
        this._pointers.set(e.pointerId, {
            id: e.pointerId,
            x: e.clientX,
            y: e.clientY,
            startX: e.clientX,
            startY: e.clientY,
            startTime: performance.now()
        });

        // Double-tap detection for boost
        const now = Date.now();
        const tapPos = new THREE.Vector2(e.clientX, e.clientY);

        if (now - this._lastTapTime < this._doubleTapThreshold) {
            const dist = tapPos.distanceTo(this._lastTapPos);
            if (dist < this._tapDistThreshold) {
                this.speedBoost = 3.0;
                // Move forward on double-tap
                this.velocity.addScaledVector(this.direction, this.baseSpeed * 0.5);
            }
        }

        this._lastTapTime = now;
        this._lastTapPos.copy(tapPos);

        // Single pointer = rotation drag
        if (this._pointers.size === 1) {
            this._isDragging = true;
            this._dragStart.set(e.clientX, e.clientY);
            this._dragCurrent.copy(this._dragStart);
        }

        // Multi-touch handling
        if (this._pointers.size === 2) {
            this._updateTouchCenter();
            this._touchMoveActive = true;
        }

        this.domElement.setPointerCapture(e.pointerId);
        e.preventDefault();
    }

    _onPointerMove(e) {
        if (!this.enabled) return;

        const pointer = this._pointers.get(e.pointerId);
        if (!pointer) return;

        // Update pointer position
        pointer.x = e.clientX;
        pointer.y = e.clientY;

        // Single finger: rotation
        if (this._pointers.size === 1 && this._isDragging) {
            const deltaX = e.clientX - this._dragCurrent.x;
            const deltaY = e.clientY - this._dragCurrent.y;

            // Apply rotation
            this.yaw -= deltaX * this.rotationSpeed;
            this.pitch -= deltaY * this.rotationSpeed;

            // Store inertia
            this.rotationInertia.set(
                -deltaX * this.rotationSpeed * 0.3,
                -deltaY * this.rotationSpeed * 0.3
            );

            this._dragCurrent.set(e.clientX, e.clientY);
        }

        // Two fingers: pan/move
        if (this._pointers.size === 2) {
            const pointers = Array.from(this._pointers.values());
            const p1 = pointers[0];
            const p2 = pointers[1];

            // Calculate new center
            const newCenter = new THREE.Vector2(
                (p1.x + p2.x) / 2,
                (p1.y + p2.y) / 2
            );

            // Pan delta from center movement
            const panDelta = new THREE.Vector2().subVectors(newCenter, this._lastTouchCenter);
            this._touchMoveDir.set(
                panDelta.x * 0.01,
                panDelta.y * 0.01
            );

            // Pinch for speed adjustment
            const newDist = Math.hypot(p1.x - p2.x, p1.y - p2.y);
            if (this._lastTouchDist > 0) {
                const pinchDelta = newDist - this._lastTouchDist;
                if (Math.abs(pinchDelta) > 2) {
                    this.baseSpeed = THREE.MathUtils.clamp(
                        this.baseSpeed + pinchDelta * 0.1,
                        5, 80
                    );
                }
            }
            this._lastTouchDist = newDist;
            this._lastTouchCenter.copy(newCenter);
        }

        e.preventDefault();
    }

    _onPointerUp(e) {
        const pointer = this._pointers.get(e.pointerId);

        // Check for swipe gesture
        if (pointer && this._pointers.size === 1) {
            const dt = (performance.now() - pointer.startTime) / 1000;
            const dx = e.clientX - pointer.startX;
            const dy = e.clientY - pointer.startY;
            const dist = Math.hypot(dx, dy);

            // Quick swipe detection
            if (dt < 0.3 && dist > this._swipeThreshold) {
                const swipeSpeed = dist / dt;
                // Swipe up = boost forward
                if (dy < -this._swipeThreshold && Math.abs(dx) < Math.abs(dy)) {
                    this.velocity.addScaledVector(this.direction, swipeSpeed * 0.02);
                }
                // Swipe down = backward
                if (dy > this._swipeThreshold && Math.abs(dx) < Math.abs(dy)) {
                    this.velocity.addScaledVector(this.direction, -swipeSpeed * 0.01);
                }
            }
        }

        this._pointers.delete(e.pointerId);

        if (this._pointers.size === 0) {
            this._isDragging = false;
            this._touchMoveActive = false;
        }

        if (this._pointers.size < 2) {
            this._lastTouchDist = 0;
            this._touchMoveDir.set(0, 0);
        }

        this.domElement.releasePointerCapture(e.pointerId);
    }

    _onPointerCancel(e) {
        this._onPointerUp(e);
    }

    _updateTouchCenter() {
        const pointers = Array.from(this._pointers.values());
        if (pointers.length >= 2) {
            const p1 = pointers[0];
            const p2 = pointers[1];
            this._lastTouchCenter.set(
                (p1.x + p2.x) / 2,
                (p1.y + p2.y) / 2
            );
            this._lastTouchDist = Math.hypot(p1.x - p2.x, p1.y - p2.y);
        }
    }

    _onWheel(e) {
        if (!this.enabled) return;

        // Scroll for speed adjustment
        const delta = -Math.sign(e.deltaY) * 3;
        this.baseSpeed = THREE.MathUtils.clamp(this.baseSpeed + delta, 5, 80);

        // Also give a small forward/back impulse
        this.velocity.addScaledVector(this.direction, delta * 0.5);

        e.preventDefault();
    }

    _onContextMenu(e) {
        e.preventDefault();
    }

    _attachEventListeners() {
        window.addEventListener('keydown', this._onKeyDown);
        window.addEventListener('keyup', this._onKeyUp);
        this.domElement.addEventListener('pointerdown', this._onPointerDown);
        this.domElement.addEventListener('pointermove', this._onPointerMove);
        this.domElement.addEventListener('pointerup', this._onPointerUp);
        this.domElement.addEventListener('pointercancel', this._onPointerCancel);
        this.domElement.addEventListener('wheel', this._onWheel, { passive: false });
        this.domElement.addEventListener('contextmenu', this._onContextMenu);

        // Ensure touch-action is set for proper gesture handling
        this.domElement.style.touchAction = 'none';
    }

    _detachEventListeners() {
        window.removeEventListener('keydown', this._onKeyDown);
        window.removeEventListener('keyup', this._onKeyUp);
        this.domElement.removeEventListener('pointerdown', this._onPointerDown);
        this.domElement.removeEventListener('pointermove', this._onPointerMove);
        this.domElement.removeEventListener('pointerup', this._onPointerUp);
        this.domElement.removeEventListener('pointercancel', this._onPointerCancel);
        this.domElement.removeEventListener('wheel', this._onWheel);
        this.domElement.removeEventListener('contextmenu', this._onContextMenu);
    }

    /**
     * Cleanup resources.
     */
    dispose() {
        this.disable();
    }
}
