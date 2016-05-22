import loop from 'raf-loop';
import getContext from 'get-canvas-context';

import w from '../util/window';

import WebGLView from './WebGLView';

export default class AppView {
  constructor(app, el) {
    this.app = app;
    this.el = el;
  }

  init() {
    // Context
    this.gl = getContext('webgl');
    this.el.appendChild(this.gl.canvas);

    // Engine
    this.engine = loop(this.tick.bind(this));
    this.engine.start();

    // Listeners
    w.onResize(this.onResize.bind(this));
    this.onResize();

    // Entities
    this.webGLView = new WebGLView(this.gl);
    this.webGLView.init();
  }

  tick() {
    this.webGLView.render();
  }

  onResize() {
    this.gl.canvas.width = w.physicalWidth;
    this.gl.canvas.height = w.physicalHeight;
    this.gl.canvas.style.width = `${w.width}px`;
    this.gl.canvas.style.height = `${w.height}px`;
  }
}
