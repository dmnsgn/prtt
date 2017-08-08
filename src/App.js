import AsyncPreloader from "async-preloader";

import AppView from "Containers/AppView";
import AppUI from "Containers/AppUI";

import store, { subscribe } from "State/store";
import { PRELOAD_STATUS, preload, getLoadingState } from "State/reducers/ui";

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

    this.preload();
  }

  preload() {
    subscribe(getLoadingState, state => {
      this.view.start();
    });

    const pItems = AsyncPreloader.loadItems([]);
    pItems
      .then(items => {
        store.dispatch(preload(PRELOAD_STATUS.get("LOADED")));
      })
      .catch(error => console.error("Error loading items", error));
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
