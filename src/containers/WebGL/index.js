import Checker from "Components/background/Checker";
import Base from "Components/base/Base";

export default class WebGL {
  constructor(gl) {
    this.gl = gl;

    this.gl.clearColor(0.0, 0.0, 0.0, 1.0);
  }

  init() {
    this.background = new Checker(this.gl);
    this.background.init();

    this.base = new Base(this.gl);
    this.base.init();
  }

  render() {
    this.gl.clear(
      this.gl.COLOR_BUFFER_BIT |
        this.gl.DEPTH_BUFFER_BIT |
        this.gl.STENCIL_BUFFER_BIT
    );

    this.background.draw();
    this.base.draw();
  }

  resize() {
    this.gl.viewport(
      0,
      0,
      this.gl.drawingBufferWidth,
      this.gl.drawingBufferHeight
    );
  }
}
