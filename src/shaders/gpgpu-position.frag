// ────────────────────────────────────────────────────────
// GPGPU Position Compute — updates particle positions
// Reads: texturePosition, textureVelocity (auto-injected)
// Writes: vec4(position.xyz, age)
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
    } else if (uPhase < 1.5) {
        // INFLATION — full velocity integration
        pos.xyz += vel.xyz * uDeltaTime;
    } else {
        // COOLING / STRUCTURE — standard integration
        pos.xyz += vel.xyz * uDeltaTime;
    }

    // Increment particle age (w channel)
    pos.w += uDeltaTime;

    gl_FragColor = pos;
}
