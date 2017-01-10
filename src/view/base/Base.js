import glsl from 'glslify';
import createShader from 'gl-shader';

export default class Base {
  constructor(gl) {
    this.gl = gl;
  }

  init() {
    this.shader = createShader(
      this.gl,
      glsl('../../shader/base.vert'),
      glsl('../../shader/base.frag'),
    );

    this.buffer = this.gl.createBuffer();
    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.buffer);
    this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array([
      -0.5, 0, 0,
      0, -1, 0,
      0.5, 0.5, 0,
    ]), this.gl.STATIC_DRAW);
  }

  draw() {
    // Bind shader
    this.shader.bind();

    // Set attributes
    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.buffer);
    this.shader.attributes.position.pointer();

    // Set uniforms
    this.shader.uniforms.t += 0.01;

    // Draw
    this.gl.drawArrays(this.gl.TRIANGLES, 0, 3);
  }
}
