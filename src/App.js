import AppView from "View/AppView";
import AppUI from "View/AppUI";

import config from "Root/config";

export default class App {
  constructor(element, options) {
    this.element = element;
    this.options = {
      ...options,
      debug: config.parameters.has("debug")
    };

    this.initView();

    if (this.options.debug || config.parameters.has("capture")) {
      this.initUI();
    }
  }

  initView() {
    this.view = new AppView(this);
    this.view.init();
  }

  initUI() {
    this.ui = new AppUI(this);
    this.ui.init();
  }
}
