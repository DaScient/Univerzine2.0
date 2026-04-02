// ────────────────────────────────────────────────────────
// GPGPU Position Compute — updates particle positions
// Reads: texturePosition, textureVelocity (auto-injected)
// Writes: vec4(position.xyz, age)
// Enhanced with phase-aware integration and soft boundary.
// ────────────────────────────────────────────────────────

uniform float uDeltaTime;
uniform float uPhase;
uniform float uTime;

void main() {
    vec2 uv = gl_FragCoord.xy / resolution.xy;
    vec4 pos = texture2D(texturePosition, uv);
    vec4 vel = texture2D(textureVelocity, uv);

    if (uPhase < 0.5) {
        // SINGULARITY — particles barely drift, swirling in place
        pos.xyz += vel.xyz * uDeltaTime * 0.04;
    } else if (uPhase > 6.5) {
        // HEAT DEATH — slow drift, particles scatter and fade
        pos.xyz += vel.xyz * uDeltaTime * 0.3;
    } else {
        // INFLATION / COOLING / STRUCTURE / GALAXIES / STELLAR / SUPERNOVA
        pos.xyz += vel.xyz * uDeltaTime;
    }

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
