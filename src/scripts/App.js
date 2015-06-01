import AppView from './view/AppView'

export default class App {
  constructor() {

    this.DEBUG = true;

    this.initView();
  }

  initView() {
    this.view = new AppView(this, document.getElementById('container'));
    this.view.init();
  }
};
