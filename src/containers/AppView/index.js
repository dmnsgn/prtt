import Engine from "raf-loop";
import getContext from "get-canvas-context";

import ThreeView from "Containers/ThreeView";

import w, { BindEvent } from "Utils/window";
import capturer from "Utils/capturer";

import config from "Root/config";

export default class AppView {
  constructor(app) {
    this.app = app;
  }

  init() {
    // Engine
    this.engine = new Engine();
    this.engine.on("tick", this.tick.bind(this));

    // Components
    this.threeView = new ThreeView(this.app.element, this.app.options);
    this.threeView.init();
  }

  start() {
    this.engine.start();
  }

  stop() {
    this.engine.stop();
  }

  tick() {
    this.threeView.render();

    if (config.parameters.has("capture")) {
      capturer.capture(this.threeView.canvas);
    }
  }
}
