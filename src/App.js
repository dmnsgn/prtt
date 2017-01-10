import AppView from './view/AppView';
import AppUI from './view/AppUI';

import config from './config';

export default class App {
  constructor(element, options) {
    this.element = element;
    this.options = Object.assign({
      debug: config.parameters.has('debug'),
    }, options);

    this.initView();
    if (this.options.debug || config.parameters.has('capture')) this.initUI();
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
