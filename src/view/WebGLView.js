import Checker from './background/Checker';
import Base from './base/Base';

export default class WebGLView {
  constructor(gl) {
    this.gl = gl;
  }

  init() {
    this.background = new Checker(this.gl);
    this.background.init();

    this.base = new Base(this.gl);
    this.base.init();
  }

  render() {
    this.gl.viewport(0, 0, this.gl.drawingBufferWidth, this.gl.drawingBufferHeight);

    this.gl.clearColor(1.0, 1.0, 0.0, 1.0);
    this.gl.clear(this.gl.COLOR_BUFFER_BIT);

    this.background.draw();
    this.base.draw();
  }
}
