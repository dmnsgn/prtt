attribute vec3 position;
varying vec2 uv;

void main() {
  gl_Position = vec4(position, 1.0);
  uv = position.xy;
}
