import AsyncPreloader from "async-preloader";

import AppView from "Containers/AppView";
import AppUI from "Containers/AppUI";

import store, { subscribe } from "State/store";
import {
  PRELOAD_STATUS,
  preload,
  preloadingStatusSelector
} from "State/reducers/ui";

import config from "Root/config";

export default class App {
  constructor(element, options) {
    this.element = element;
    this.options = options;
  }

  init() {
    this.initView();

    if (config.parameters.has("debug") || config.parameters.has("capture")) {
      this.initUI();
    }

    subscribe(preloadingStatusSelector, status => {
      if (status === PRELOAD_STATUS.get("LOADED")) this.view.start();
    });
    this.preload();
  }

  initView() {
    this.view = new AppView(this);
    this.view.init();
  }

  initUI() {
    this.ui = new AppUI(this);
    this.ui.init();
  }

  async preload() {
    await AsyncPreloader.loadItems([]);
    store.dispatch(preload(PRELOAD_STATUS.get("LOADED")));
  }
}
