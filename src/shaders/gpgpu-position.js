// GPGPU Position Compute Shader — enhanced with quantum
// space-time fabric distortion and hyperspace dimensional folds.
export default /* glsl */`
uniform float uDeltaTime;
uniform float uPhase;
uniform float uTime;
uniform float uTimeDilation;

// Black hole awareness for event horizon effects
uniform float uBlackHoleStrength;
uniform float uNumBlackHoles;
uniform float uBlackHoleSeed;

// Deterministic hash for matching black hole positions
float _hash11(float p) {
    p = fract(p * 0.1031);
    p *= p + 33.33;
    p *= p + p;
    return fract(p);
}
vec3 _hash31(float p) {
    vec3 p3 = fract(vec3(p) * vec3(0.1031, 0.1030, 0.0973));
    p3 += dot(p3, p3.yzx + 33.33);
    return fract((p3.xxy + p3.yzz) * p3.zyx);
}

void main() {
    vec2 uv = gl_FragCoord.xy / resolution.xy;
    vec4 pos = texture2D(texturePosition, uv);
    vec4 vel = texture2D(textureVelocity, uv);

    // ─── Quantum space-time fabric distortion ───────
    // Each region of space experiences a locally different flow of time,
    // creating visible ripples in the fabric of the simulation.
    float fabricX = sin(pos.x * 0.015 + uTime * 0.23) * cos(pos.z * 0.018 + uTime * 0.17);
    float fabricY = cos(pos.y * 0.012 + uTime * 0.19) * sin(pos.x * 0.021 + uTime * 0.13);
    float fabricZ = sin(pos.z * 0.017 + uTime * 0.29) * cos(pos.y * 0.014 + uTime * 0.11);
    float localTimeDilation = 1.0 + (fabricX + fabricY + fabricZ) * 0.4 * uTimeDilation;

    // ─── Hyperspace dimensional fold ────────────────
    // Particles subtly traverse hidden-dimension manifolds,
    // creating organic warping patterns in their trajectories.
    float foldIntensity = smoothstep(0.5, 3.0, uPhase) * (1.0 - smoothstep(6.5, 7.5, uPhase)) * 0.5;
    vec3 dimensionalFold = vec3(
        sin(pos.y * 0.01 + pos.z * 0.008 + uTime * 0.15),
        cos(pos.x * 0.01 + pos.z * 0.009 + uTime * 0.12),
        sin(pos.x * 0.008 + pos.y * 0.01 + uTime * 0.18)
    ) * foldIntensity;

    // ─── Phase-aware integration ────────────────────
    float phaseSpeed;
    if (uPhase < 0.5) {
        phaseSpeed = 0.04;
    } else if (uPhase > 6.5) {
        phaseSpeed = 0.3;
    } else {
        phaseSpeed = 1.0;
    }

    pos.xyz += vel.xyz * uDeltaTime * phaseSpeed * localTimeDilation;
    pos.xyz += dimensionalFold * uDeltaTime;

    // ─── Black hole gravitational time dilation ─────
    // Particles near black holes experience extreme time slowdown
    // and spatial compression, warping their trajectories.
    if (uBlackHoleStrength > 0.01) {
        float bhTimeFactor = 1.0;
        for (int i = 0; i < 16; i++) {
            if (float(i) >= uNumBlackHoles) break;
            float fi = float(i);
            vec3 bhSeed = _hash31(fi * 173.7 + uBlackHoleSeed);
            float bhSpread = 60.0 + uPhase * 40.0;
            vec3 bhCenter = (bhSeed - 0.5) * bhSpread * 2.0;
            bhCenter += vec3(
                sin(uTime * 0.03 + fi * 2.1),
                cos(uTime * 0.025 + fi * 1.7),
                sin(uTime * 0.02 + fi * 3.3)
            ) * 15.0;

            float sizeClass = _hash11(fi * 59.3 + uBlackHoleSeed);
            float eventHorizon = sizeClass < 0.33 ? 3.0 : (sizeClass < 0.66 ? 8.0 : 18.0);

            float bhDist = length(bhCenter - pos.xyz);
            // Gravitational time dilation: time slows near event horizon
            float dilation = smoothstep(0.0, eventHorizon * 4.0, bhDist);
            bhTimeFactor = min(bhTimeFactor, 0.05 + 0.95 * dilation);

            // Spatial lensing: slight position warp near black holes
            if (bhDist < eventHorizon * 3.0) {
                vec3 toBH = normalize(bhCenter - pos.xyz);
                float warpStr = (1.0 - bhDist / (eventHorizon * 3.0)) * uBlackHoleStrength * 0.5;
                pos.xyz += toBH * warpStr * uDeltaTime;
            }
        }
        // Scale total velocity contribution by time dilation
        pos.xyz *= mix(1.0, bhTimeFactor, uBlackHoleStrength * 0.3);
    }

    // Increment particle age (w channel)
    pos.w += uDeltaTime;

    // Soft boundary — prevent particles from drifting to infinity
    float r = length(pos.xyz);
    float maxR = 600.0 + uPhase * 60.0;
    if (r > maxR) {
        pos.xyz *= maxR / r;
    }

    gl_FragColor = pos;
}
`;
