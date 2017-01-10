import loop from 'raf-loop';
import getContext from 'get-canvas-context';

import WebGLView from './WebGLView';

import config from '../config';

import w from '../util/window';
import capturer from '../util/capturer';

export default class AppView {
  constructor(app) {
    this.app = app;
  }

  init() {
    // Context
    this.gl = getContext('webgl');
    this.app.element.appendChild(this.gl.canvas);

    // Engine
    this.engine = loop(this.tick.bind(this));

    // Listeners
    w.onResize(this.onResize.bind(this));

    // Views
    this.webGLView = new WebGLView(this.gl);
    this.webGLView.init();

    this.onResize();
    this.engine.start();
  }

  tick() {
    this.webGLView.render();

    if (config.parameters.has('capture')) capturer.capture(this.gl.canvas);
  }

  onResize() {
    this.gl.canvas.width = w.width;
    this.gl.canvas.height = w.height;
    this.gl.canvas.style.width = `${w.width}px`;
    this.gl.canvas.style.height = `${w.height}px`;

    this.webGLView.resize();
  }
}
