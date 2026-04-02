// GPGPU Position Compute Shader — enhanced with quantum
// space-time fabric distortion and hyperspace dimensional folds.
export default /* glsl */`
uniform float uDeltaTime;
uniform float uPhase;
uniform float uTime;
uniform float uTimeDilation;

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

    // Increment particle age (w channel)
    pos.w += uDeltaTime;

    // Soft boundary — prevent particles from drifting to infinity
    float r = length(pos.xyz);
    float maxR = 500.0 + uPhase * 50.0;
    if (r > maxR) {
        pos.xyz *= maxR / r;
    }

    gl_FragColor = pos;
}
`;
