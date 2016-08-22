import AppView from './view/AppView';
import AppUI from './view/AppUI';

export default class App {
  constructor(element, options) {
    this.element = element;
    this.options = Object.assign({
      debug: true,
    }, options);

    this.initView();
    this.initUI();
  }

  initView() {
    this.view = new AppView(this, this.element);
    this.view.init();
  }

  initUI() {
    this.ui = new AppUI();
    this.ui.init();
  }
}
