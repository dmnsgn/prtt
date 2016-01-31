import loop from 'raf-loop'
import getContext from 'get-canvas-context'

import AppUI from './AppUI'

import * as Window from '../utils/window'

export default class AppView {

  constructor(app, el) {
    this.app = app;
    this.el = el;
  }

  init() {

    // Context
    this.ctx = getContext('2d');
    this.el.appendChild(this.ctx.canvas);

    // Engine
    this.engine = loop(this.tick.bind(this));
    this.engine.start();

    Window.addResizeCallback(this.onResize.bind(this));
    this.onResize();

    if (this.app.DEBUG) {
      this.initUI();
    }

    return;
  }

  initUI() {

    this.ui = new AppUI();

    return;
  }

  tick(dt) {

    // console.log(dt);

    return;
  }

  onResize() {

    this.ctx.canvas.width = Window.getWidth() * Window.sizeFactor;
    this.ctx.canvas.height = Window.getHeight() * Window.sizeFactor;
    this.ctx.canvas.style.width = Window.getWidth() + 'px';
    this.ctx.canvas.style.height = Window.getHeight() + 'px';

    return;
  }

};
