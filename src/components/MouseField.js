// ────────────────────────────────────────────────────────
// MouseField — Projects mouse/touch into world space and
// provides a force origin + radius for the GPGPU velocity
// shader to repulse/attract particles near the pointer.
// ────────────────────────────────────────────────────────

import * as THREE from 'three';

export class MouseField {
    constructor(camera, domElement) {
        this.camera     = camera;
        this.domElement = domElement;

        /** World-space position projected onto z=0 plane. */
        this.worldPos   = new THREE.Vector3();
        /** Strength: positive = repulse, negative = attract. Scroll to toggle. */
        this.strength   = 6.0;
        /** Active when pointer is down (or always on desktop hover). */
        this.active     = false;

        this._ndc   = new THREE.Vector2();
        this._ray   = new THREE.Raycaster();
        this._plane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);

        this._onMove  = this._onMove.bind(this);
        this._onDown  = this._onDown.bind(this);
        this._onUp    = this._onUp.bind(this);
        this._onWheel = this._onWheel.bind(this);

        domElement.addEventListener('pointermove', this._onMove, { passive: true });
        domElement.addEventListener('pointerdown', this._onDown, { passive: true });
        domElement.addEventListener('pointerup',   this._onUp,   { passive: true });
        domElement.addEventListener('wheel',       this._onWheel, { passive: true });
    }

    _updateNDC(e) {
        const rect = this.domElement.getBoundingClientRect();
        this._ndc.x =  ((e.clientX - rect.left) / rect.width)  * 2 - 1;
        this._ndc.y = -((e.clientY - rect.top)  / rect.height) * 2 + 1;
    }

    _project() {
        this._ray.setFromCamera(this._ndc, this.camera);
        this._ray.ray.intersectPlane(this._plane, this.worldPos);
    }

    _onMove(e) {
        this._updateNDC(e);
        this._project();
        // Desktop hover always active (touch requires press)
        if (e.pointerType === 'mouse') this.active = true;
    }

    _onDown(e) {
        this._updateNDC(e);
        this._project();
        this.active = true;
    }

    _onUp() {
        this.active = false;
    }

    _onWheel(e) {
        // Scroll modulates strength (repulse ↔ attract)
        this.strength = Math.max(-12, Math.min(12,
            this.strength + (e.deltaY > 0 ? -0.5 : 0.5)
        ));
    }

    dispose() {
        this.domElement.removeEventListener('pointermove', this._onMove);
        this.domElement.removeEventListener('pointerdown', this._onDown);
        this.domElement.removeEventListener('pointerup',   this._onUp);
        this.domElement.removeEventListener('wheel',        this._onWheel);
    }
}
