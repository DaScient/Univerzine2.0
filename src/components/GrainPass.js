// ────────────────────────────────────────────────────────
// Film Grain Post-Processing Pass — cinematic noise overlay
// ────────────────────────────────────────────────────────

import * as THREE from 'three';
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';

const GrainShader = {
    uniforms: {
        tDiffuse:    { value: null },
        uTime:       { value: 0 },
        uIntensity:  { value: 0.06 },
    },
    vertexShader: /* glsl */ `
        varying vec2 vUv;
        void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
    `,
    fragmentShader: /* glsl */ `
        uniform sampler2D tDiffuse;
        uniform float uTime;
        uniform float uIntensity;
        varying vec2 vUv;

        float hash(vec2 p) {
            vec3 p3 = fract(vec3(p.xyx) * 0.1031);
            p3 += dot(p3, p3.yzx + 33.33);
            return fract((p3.x + p3.y) * p3.z);
        }

        void main() {
            vec4 color = texture2D(tDiffuse, vUv);
            float noise = hash(gl_FragCoord.xy + uTime * 100.0) * 2.0 - 1.0;
            color.rgb += noise * uIntensity;
            gl_FragColor = color;
        }
    `,
};

export function createGrainPass() {
    return new ShaderPass(GrainShader);
}
