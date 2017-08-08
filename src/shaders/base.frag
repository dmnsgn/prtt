precision highp float;

uniform float t;
varying vec2 uv;

void main() {
  float c = 0.5*(cos(t)+1.0);
  gl_FragColor = vec4(c, c, c, 1.0);
}
