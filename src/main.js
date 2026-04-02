// ═══════════════════════════════════════════════════════════
// Univerzine 2.0 — Quantum Big Bang Simulation
// Main entry: Three.js scene, GPGPU particle pipeline,
// bloom post-processing, sensor integration, render loop.
// ═══════════════════════════════════════════════════════════

import * as THREE from 'three';
import { GPUComputationRenderer } from 'three/addons/misc/GPUComputationRenderer.js';
import { EffectComposer }         from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass }             from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass }        from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OrbitControls }          from 'three/addons/controls/OrbitControls.js';

import { BigBangController } from './components/BigBangController.js';
import { SensorHub }         from './components/SensorHub.js';
import { CosmicAudio }       from './components/CosmicAudio.js';
import { MouseField }        from './components/MouseField.js';
import { createGrainPass }   from './components/GrainPass.js';

// Shader sources (imported as raw strings via Vite)
import noiseGlsl           from './shaders/noise.glsl?raw';
import gpgpuPositionFrag   from './shaders/gpgpu-position.frag?raw';
import gpgpuVelocityFrag   from './shaders/gpgpu-velocity.frag?raw';
import simulationVert      from './shaders/simulation.vert?raw';
import spectralFrag        from './shaders/spectral.frag?raw';

import './style.css';

// ───────────────────────────────────────────────────────
// Configuration
// ───────────────────────────────────────────────────────
const isMobile      = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
const TEXTURE_WIDTH = isMobile ? 512 : 1024;          // 262 144  or  1 048 576 particles
const PARTICLE_COUNT = TEXTURE_WIDTH * TEXTURE_WIDTH;

// ───────────────────────────────────────────────────────
// Renderer
// ───────────────────────────────────────────────────────
const canvas   = document.getElementById('canvas');
const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: false,
    powerPreference: 'high-performance',
});
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.outputColorSpace = THREE.SRGBColorSpace;

if (!renderer.capabilities.isWebGL2) {
    document.getElementById('overlay').innerHTML =
        '<div style="text-align:center;padding:2em;color:#f44">' +
        '<h2>WebGL 2 Required</h2><p>Your browser does not support WebGL 2.</p></div>';
    throw new Error('WebGL 2 not available');
}

// WebGL context loss / recovery
canvas.addEventListener('webglcontextlost', (e) => {
    e.preventDefault();
    document.getElementById('phase-label').textContent = 'CONTEXT LOST — RECOVERING…';
}, false);

canvas.addEventListener('webglcontextrestored', () => {
    location.reload();
}, false);

// ───────────────────────────────────────────────────────
// Scene & Camera
// ───────────────────────────────────────────────────────
const scene  = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
    60,
    window.innerWidth / window.innerHeight,
    0.1,
    10000,
);
camera.position.set(0, 0, 120);

// Phase-specific camera target distances
const cameraTargets = {
    0: 30,     // singularity  — close-up
    1: 250,    // inflation    — pull back to see expansion
    2: 350,    // cooling      — wide view of filaments
    3: 400,    // structure    — full galaxy survey
};

// Desktop: orbit controls with gentle auto-rotate
const controls = new OrbitControls(camera, canvas);
controls.enableDamping   = true;
controls.dampingFactor   = 0.04;
controls.minDistance      = 10;
controls.maxDistance      = 800;
controls.autoRotate      = true;
controls.autoRotateSpeed = 0.15;

// ───────────────────────────────────────────────────────
// Background star field (static ambient depth cue)
// ───────────────────────────────────────────────────────
{
    const count   = 8000;
    const starPos = new Float32Array(count * 3);
    const starCol = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
        const i3 = i * 3;
        starPos[i3]     = (Math.random() - 0.5) * 2800;
        starPos[i3 + 1] = (Math.random() - 0.5) * 2800;
        starPos[i3 + 2] = (Math.random() - 0.5) * 2800;
        // Slight colour variation (warm white → cool blue)
        const temp = Math.random();
        starCol[i3]     = 0.8 + temp * 0.2;
        starCol[i3 + 1] = 0.85 + temp * 0.15;
        starCol[i3 + 2] = 0.95 + temp * 0.05;
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(starPos, 3));
    geo.setAttribute('color',    new THREE.BufferAttribute(starCol, 3));
    const mat = new THREE.PointsMaterial({
        size: 0.5,
        vertexColors: true,
        transparent: true,
        opacity: 0.3,
        depthWrite: false,
        sizeAttenuation: true,
    });
    scene.add(new THREE.Points(geo, mat));
}

// ───────────────────────────────────────────────────────
// Nebula dust cloud (soft volumetric depth cue)
// ───────────────────────────────────────────────────────
let nebulaPoints;
{
    const count = 400;
    const npos   = new Float32Array(count * 3);
    const ncol   = new Float32Array(count * 3);
    const nsizes = new Float32Array(count);
    for (let i = 0; i < count; i++) {
        const i3 = i * 3;
        const r = 40 + Math.random() * 300;
        const theta = Math.random() * Math.PI * 2;
        const phi   = Math.acos(2 * Math.random() - 1);
        npos[i3]     = r * Math.sin(phi) * Math.cos(theta);
        npos[i3 + 1] = r * Math.sin(phi) * Math.sin(theta);
        npos[i3 + 2] = r * Math.cos(phi);
        // Nebula hues: deep purple, teal, warm orange
        const hue = Math.random();
        if (hue < 0.33) {
            ncol[i3] = 0.25; ncol[i3+1] = 0.05; ncol[i3+2] = 0.35;
        } else if (hue < 0.66) {
            ncol[i3] = 0.05; ncol[i3+1] = 0.2;  ncol[i3+2] = 0.3;
        } else {
            ncol[i3] = 0.35; ncol[i3+1] = 0.15; ncol[i3+2] = 0.05;
        }
        nsizes[i] = 15 + Math.random() * 40;
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(npos, 3));
    geo.setAttribute('color',    new THREE.BufferAttribute(ncol, 3));
    geo.setAttribute('size',     new THREE.BufferAttribute(nsizes, 1));

    const mat = new THREE.ShaderMaterial({
        vertexShader: /* glsl */ `
            attribute float size;
            varying vec3 vColor;
            void main() {
                vColor = color;
                vec4 mv = modelViewMatrix * vec4(position, 1.0);
                gl_Position = projectionMatrix * mv;
                gl_PointSize = size * (200.0 / max(1.0, -mv.z));
                gl_PointSize = clamp(gl_PointSize, 2.0, 120.0);
            }
        `,
        fragmentShader: /* glsl */ `
            varying vec3 vColor;
            void main() {
                float d = length(gl_PointCoord - 0.5);
                float alpha = smoothstep(0.5, 0.0, d) * 0.07;
                gl_FragColor = vec4(vColor, alpha);
            }
        `,
        transparent:  true,
        depthWrite:   false,
        blending:     THREE.AdditiveBlending,
        vertexColors: true,
    });
    nebulaPoints = new THREE.Points(geo, mat);
    scene.add(nebulaPoints);
}

// ═══════════════════════════════════════════════════════
// GPGPU COMPUTATION  (FBO ping-pong particle physics)
// ═══════════════════════════════════════════════════════
const gpuCompute = new GPUComputationRenderer(TEXTURE_WIDTH, TEXTURE_WIDTH, renderer);

if (isMobile) gpuCompute.setDataType(THREE.HalfFloatType);

// Initial data textures
const dtPosition = gpuCompute.createTexture();
const dtVelocity = gpuCompute.createTexture();

function fillSingularitySeed() {
    const pArr = dtPosition.image.data;
    const vArr = dtVelocity.image.data;
    for (let i = 0; i < PARTICLE_COUNT; i++) {
        const i4    = i * 4;
        const r     = Math.pow(Math.random(), 0.5) * 2.0;
        const theta = Math.random() * Math.PI * 2;
        const phi   = Math.acos(2 * Math.random() - 1);

        pArr[i4 + 0] = r * Math.sin(phi) * Math.cos(theta);
        pArr[i4 + 1] = r * Math.sin(phi) * Math.sin(theta);
        pArr[i4 + 2] = r * Math.cos(phi);
        pArr[i4 + 3] = 0;                                  // age

        vArr[i4 + 0] = (Math.random() - 0.5) * 0.5;
        vArr[i4 + 1] = (Math.random() - 0.5) * 0.5;
        vArr[i4 + 2] = (Math.random() - 0.5) * 0.5;
        vArr[i4 + 3] = 0.5 + Math.random() * 1.5;         // mass
    }
}
fillSingularitySeed();

// Prepend noise library to shaders that need it
const velocityShaderFull = noiseGlsl + '\n' + gpgpuVelocityFrag;

const positionVariable = gpuCompute.addVariable(
    'texturePosition', gpgpuPositionFrag, dtPosition,
);
const velocityVariable = gpuCompute.addVariable(
    'textureVelocity', velocityShaderFull, dtVelocity,
);

gpuCompute.setVariableDependencies(positionVariable, [positionVariable, velocityVariable]);
gpuCompute.setVariableDependencies(velocityVariable, [positionVariable, velocityVariable]);

// Position shader uniforms
const posU = positionVariable.material.uniforms;
posU.uDeltaTime = { value: 0 };
posU.uPhase     = { value: 0 };
posU.uTime      = { value: 0 };

// Velocity shader uniforms
const velU = velocityVariable.material.uniforms;
velU.uTime            = { value: 0 };
velU.uDeltaTime       = { value: 0 };
velU.uExpansionRate   = { value: 0 };
velU.uTemperature     = { value: 1e12 };
velU.uGravityStrength = { value: 0 };
velU.uGyro            = { value: new THREE.Vector3() };
velU.uAudioLevel      = { value: 0 };
velU.uAudioBass       = { value: 0 };
velU.uPhase           = { value: 0 };
velU.uMouseWorldPos   = { value: new THREE.Vector3() };
velU.uMouseStrength   = { value: 0 };
velU.uMouseActive     = { value: 0 };

// Texture wrapping
positionVariable.wrapS = THREE.RepeatWrapping;
positionVariable.wrapT = THREE.RepeatWrapping;
velocityVariable.wrapS = THREE.RepeatWrapping;
velocityVariable.wrapT = THREE.RepeatWrapping;

const gpuError = gpuCompute.init();
if (gpuError) console.error('GPUComputationRenderer:', gpuError);

// ═══════════════════════════════════════════════════════
// PARTICLE MESH
// ═══════════════════════════════════════════════════════
const particleGeo = new THREE.BufferGeometry();
const refs = new Float32Array(PARTICLE_COUNT * 3);
for (let i = 0; i < PARTICLE_COUNT; i++) {
    // Store UV coordinates into the GPGPU textures
    refs[i * 3 + 0] = (i % TEXTURE_WIDTH + 0.5) / TEXTURE_WIDTH;
    refs[i * 3 + 1] = (Math.floor(i / TEXTURE_WIDTH) + 0.5) / TEXTURE_WIDTH;
    refs[i * 3 + 2] = 0;
}
particleGeo.setAttribute('position', new THREE.BufferAttribute(refs, 3));

const particleMat = new THREE.ShaderMaterial({
    vertexShader:   simulationVert,
    fragmentShader: noiseGlsl + '\n' + spectralFrag,
    uniforms: {
        uPositionTexture: { value: null },
        uVelocityTexture: { value: null },
        uPixelRatio:      { value: renderer.getPixelRatio() },
        uPointSize:       { value: isMobile ? 1.5 : 2.0 },
        uTime:            { value: 0 },
        uTemperature:     { value: 1e12 },
        uPhase:           { value: 0 },
    },
    transparent: true,
    blending:    THREE.AdditiveBlending,
    depthWrite:  false,
    depthTest:   true,
});

const particles = new THREE.Points(particleGeo, particleMat);
scene.add(particles);

// ═══════════════════════════════════════════════════════
// POST-PROCESSING — Unreal Bloom + Film Grain
// ═══════════════════════════════════════════════════════
const composer = new EffectComposer(renderer);
composer.addPass(new RenderPass(scene, camera));

const bloomPass = new UnrealBloomPass(
    new THREE.Vector2(window.innerWidth, window.innerHeight),
    1.8,    // strength
    0.6,    // radius
    0.05,   // threshold
);
composer.addPass(bloomPass);

const grainPass = createGrainPass();
composer.addPass(grainPass);

// ═══════════════════════════════════════════════════════
// CONTROLLERS
// ═══════════════════════════════════════════════════════
const bangCtrl    = new BigBangController();
const sensors     = new SensorHub();
const cosmicAudio = new CosmicAudio();
const mouseField  = new MouseField(camera, canvas);

// ═══════════════════════════════════════════════════════
// FPS COUNTER
// ═══════════════════════════════════════════════════════
let fpsFrames = 0;
let fpsTime   = 0;
let fpsValue  = 0;

function updateFPS(dt) {
    fpsFrames++;
    fpsTime += dt;
    if (fpsTime >= 0.5) {
        fpsValue = Math.round(fpsFrames / fpsTime);
        fpsFrames = 0;
        fpsTime   = 0;
    }
}

// ═══════════════════════════════════════════════════════
// UI
// ═══════════════════════════════════════════════════════
const overlay    = document.getElementById('overlay');
const hud        = document.getElementById('hud');
const phaseLabel = document.getElementById('phase-label');
const statsEl    = document.getElementById('stats');

function startSimulation() {
    sensors.init();
    cosmicAudio.init();
    bangCtrl.start();
    overlay.classList.add('hidden');
    hud.classList.add('visible');
    sensors.pulseHaptic(50);
    clock.start();
}

function restartSimulation() {
    bangCtrl.restart();
    // Re-seed particle data (GPUComputationRenderer re-init)
    fillSingularitySeed();
    gpuCompute.renderTexture(dtPosition, gpuCompute.getCurrentRenderTarget(positionVariable));
    gpuCompute.renderTexture(dtVelocity, gpuCompute.getCurrentRenderTarget(velocityVariable));
    elapsed = 0;
    camera.position.set(0, 0, 30);
    sensors.pulseHaptic(50);
}

document.getElementById('start-btn').addEventListener('click', startSimulation);

// Keyboard shortcuts
window.addEventListener('keydown', (e) => {
    if (e.key === 'r' || e.key === 'R') {
        if (bangCtrl.started) restartSimulation();
    }
});

// ═══════════════════════════════════════════════════════
// RESIZE
// ═══════════════════════════════════════════════════════
function onResize() {
    const w = window.innerWidth;
    const h = window.innerHeight;
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h);
    composer.setSize(w, h);
    bloomPass.resolution.set(w, h);
    particleMat.uniforms.uPixelRatio.value = renderer.getPixelRatio();
}
window.addEventListener('resize', onResize);

// ═══════════════════════════════════════════════════════
// RENDER LOOP
// ═══════════════════════════════════════════════════════
const clock = new THREE.Clock(false);
let elapsed = 0;

function animate() {
    requestAnimationFrame(animate);

    const dt = Math.min(clock.getDelta(), 0.05);       // cap spikes
    elapsed += dt;

    // ─── FPS ───
    updateFPS(dt);

    // ─── Update controllers ───
    bangCtrl.update(dt);
    sensors.update();

    // ─── Push state into GPGPU uniforms ───
    posU.uDeltaTime.value = dt;
    posU.uPhase.value     = bangCtrl.phase;
    posU.uTime.value      = elapsed;

    velU.uTime.value            = elapsed;
    velU.uDeltaTime.value       = dt;
    velU.uExpansionRate.value   = bangCtrl.expansionRate;
    velU.uTemperature.value     = bangCtrl.temperature;
    velU.uGravityStrength.value = bangCtrl.gravityStrength;
    velU.uPhase.value           = bangCtrl.phase;

    // Sensors → GPU
    velU.uGyro.value.set(sensors.gyro.x, sensors.gyro.y, sensors.gyro.z);
    velU.uAudioLevel.value = sensors.audioLevel;
    velU.uAudioBass.value  = sensors.audioBass;

    // Mouse / touch → GPU
    velU.uMouseWorldPos.value.copy(mouseField.worldPos);
    velU.uMouseStrength.value = mouseField.strength;
    velU.uMouseActive.value   = mouseField.active ? 1.0 : 0.0;

    // ─── CAMERA CHOREOGRAPHY ───
    if (sensors.hasGyro) {
        // Mobile — gyroscope drives camera
        controls.autoRotate = false;
        camera.position.x += (sensors.gyro.x * 80 - camera.position.x) * 0.02;
        camera.position.y += (sensors.gyro.y * 60 - camera.position.y) * 0.02;
        const targetZ = cameraTargets[bangCtrl.phase] || 400;
        camera.position.z += (targetZ - camera.position.z) * 0.015;
        camera.lookAt(0, 0, 0);
    } else {
        // Desktop — smooth cinematic dolly tied to epoch
        const targetZ = cameraTargets[bangCtrl.phase] || 400;
        const lerpRate = bangCtrl.phase === 1 ? 0.03 : 0.008;
        camera.position.z += (targetZ - camera.position.z) * lerpRate;
        // Increase auto-rotate speed during structure formation
        controls.autoRotateSpeed = bangCtrl.phase >= 3 ? 0.35 : 0.15;
    }

    // ─── GPGPU compute step ───
    if (bangCtrl.started) gpuCompute.compute();

    // Push GPGPU output into particle material
    const posTex = gpuCompute.getCurrentRenderTarget(positionVariable).texture;
    const velTex = gpuCompute.getCurrentRenderTarget(velocityVariable).texture;
    particleMat.uniforms.uPositionTexture.value = posTex;
    particleMat.uniforms.uVelocityTexture.value = velTex;
    particleMat.uniforms.uTime.value            = elapsed;
    particleMat.uniforms.uTemperature.value     = bangCtrl.temperature;
    particleMat.uniforms.uPhase.value           = bangCtrl.phase;

    // Haptic echo during inflation
    if (bangCtrl.shouldPulseHaptic()) sensors.pulseHaptic(12);

    // ─── Procedural cosmic audio ───
    cosmicAudio.update(bangCtrl.phase, bangCtrl.temperature, bangCtrl.time);

    // ─── Post-processing dynamics ───
    bloomPass.strength = 0.8 + Math.min(bangCtrl.temperature / 1e10, 1.5);
    grainPass.uniforms.uTime.value = elapsed;
    // Grain intensity: higher during singularity/inflation for drama
    grainPass.uniforms.uIntensity.value = bangCtrl.phase < 2 ? 0.08 : 0.04;

    // ─── Nebula slow drift ───
    nebulaPoints.rotation.y = elapsed * 0.003;
    nebulaPoints.rotation.x = Math.sin(elapsed * 0.002) * 0.1;

    controls.update();
    composer.render();

    // ─── HUD ───
    phaseLabel.textContent = bangCtrl.phaseName;
    const sensorIcons =
        (sensors.hasGyro  ? ' · GYRO'  : '') +
        (sensors.hasAudio ? ' · MIC'   : '') +
        (mouseField.active ? ' · TOUCH' : '');
    statsEl.textContent =
        `${(PARTICLE_COUNT / 1e6).toFixed(2)}M particles · ` +
        `T = ${bangCtrl.temperature.toExponential(1)} K · ` +
        `${fpsValue} FPS` +
        sensorIcons;
}

animate();
