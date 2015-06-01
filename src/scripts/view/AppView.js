import AppUI from './AppUI'

export default class AppView {
  constructor(app, el) {
    this.app = app;
    this.el = el;
  }

  init() {
    this.initAnimationLoop();

    this.ctx.start();

    if (this.app.DEBUG) {
      this.initUI();
    }

    return;
  }

  initAnimationLoop() {
    this.ctx = Sketch.create({
      type      : Sketch.WEB_GL,
      container : this.el,
      autostart : false,
      autopause : true
    });

    this.ctx.setup = () => {
    };

    this.ctx.update = () => {
      if (this.app.DEBUG) {
        this.ui.stats.begin();
      }


      if (this.app.DEBUG) {
        this.ui.stats.end();
      }
    };

    this.ctx.draw = () => {

    };
    this.ctx.resize = () => {

    };
    return;
  }

  initUI() {

    this.ui = new AppUI();

    return;
  }

};
