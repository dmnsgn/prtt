import AppView from './view/AppView';
import AppUI from './view/AppUI';

export default class App {
  constructor() {
    this.options = {
      debug: true,
    };

    this.initView();
    this.initUI();
  }

  initView() {
    this.view = new AppView(this, document.getElementById('container'));
    this.view.init();
  }

  initUI() {
    this.ui = new AppUI();
    this.ui.init();
  }
}
