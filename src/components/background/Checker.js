import createBackground from "gl-checker-background";

export default class Checker {
  constructor(gl) {
    this.gl = gl;
  }

  init() {
    this.background = createBackground(this.gl);
  }

  draw() {
    this.background.draw();
  }
}
