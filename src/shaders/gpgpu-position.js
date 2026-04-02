// GPGPU Position Compute Shader — no noise dependency.
export default /* glsl */`
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
    } else {
        // INFLATION / COOLING / STRUCTURE — full velocity integration
        pos.xyz += vel.xyz * uDeltaTime;
    }

    // Increment particle age (w channel)
    pos.w += uDeltaTime;

    gl_FragColor = pos;
}
`;
