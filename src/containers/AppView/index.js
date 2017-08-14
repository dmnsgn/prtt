import Engine from "raf-loop";
import getContext from "get-canvas-context";

import WebGL from "Containers/WebGL";

import w, { BindEvent } from "Utils/window";
import capturer from "Utils/capturer";

import config from "Root/config";

export default class AppView {
  constructor(app) {
    this.app = app;
  }

  init() {
    // Context
    this.gl = getContext("webgl");
    this.app.element.appendChild(this.gl.canvas);

    // Engine
    this.engine = new Engine();
    this.engine.on("tick", this.tick.bind(this));

    // Components
    this.webGL = new WebGL(this.gl);
    this.webGL.init();

    this.onResize();
  }

  start() {
    this.engine.start();
  }

  stop() {
    this.engine.stop();
  }

  tick() {
    this.webGL.render();

    if (config.parameters.has("capture")) {
      capturer.capture(this.gl.canvas);
    }
  }

  @BindEvent("resize")
  onResize(event) {
    this.gl.canvas.width = w.width;
    this.gl.canvas.height = w.height;
    this.gl.canvas.style.width = `${w.width}px`;
    this.gl.canvas.style.height = `${w.height}px`;

    this.webGL.resize();
  }
}
