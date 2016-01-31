import loop from 'raf-loop'

import AppUI from './AppUI'


export default class AppView {
  constructor(app, el) {
    this.app = app;
    this.el = el;
  }

  init() {
    this.engine = loop(this.tick.bind(this));

    this.engine.start();

    if (this.app.DEBUG) {
      this.initUI();
    }

    return;
  }

  tick(dt) {

    // console.log(dt);

    return;
  }

  initUI() {

    this.ui = new AppUI();

    return;
  }

};
