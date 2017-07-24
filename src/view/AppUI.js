import ControlKit from "controlkit";

import config from "Root/config";

import capturer from "Util/capturer";

export default class AppUI {
  constructor(app) {
    this.app = app;
  }

  init() {
    this.initControls();
  }

  initControls() {
    const controlKit = new ControlKit();

    const panel = controlKit.addPanel({ label: "Debug UI", align: "left" });

    const controlsGroup = panel.addGroup({ label: "Controls" });
    controlsGroup.addButton("STUFF", () => {
      console.log("STUFF");
    });
    controlsGroup.addButton("THING", () => {
      console.log("THING");
    });

    if (config.parameters.has("capture")) {
      const captureGroup = panel.addGroup({ label: "Capture" });
      captureGroup.addButton("Start", () => {
        capturer.start();
      });
    }
  }
}
