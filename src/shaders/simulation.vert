// ────────────────────────────────────────────────────────
// Particle Vertex Shader — reads GPGPU textures for position
// ────────────────────────────────────────────────────────

uniform sampler2D uPositionTexture;
uniform sampler2D uVelocityTexture;
uniform float uPixelRatio;
uniform float uPointSize;
uniform float uTime;

varying float vSpeed;
varying float vAge;
varying float vDistFromCenter;

void main() {
    // position.xy stores the UV into the GPGPU data textures
    vec2 uv = position.xy;

    vec4 posData = texture2D(uPositionTexture, uv);
    vec4 velData = texture2D(uVelocityTexture, uv);

    vec3 pos = posData.xyz;
    vAge             = posData.w;
    vSpeed           = length(velData.xyz);
    vDistFromCenter  = length(pos);

    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
    gl_Position = projectionMatrix * mvPosition;

    // Dynamic point sizing — fast / nearby particles are larger
    float basePx    = uPointSize * uPixelRatio;
    float speedBoost = 1.0 + smoothstep(0.0, 20.0, vSpeed) * 2.0;
    float depthScale = 250.0 / max(1.0, -mvPosition.z);

    gl_PointSize = basePx * speedBoost * depthScale;
    gl_PointSize = clamp(gl_PointSize, 0.5, 80.0);
}
