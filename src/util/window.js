const w = {
  init() {
    this.onResize(this.update.bind(this));
    this.update();
  },

  width: null,
  height: null,
  center: null,
  devicePixelRatio: window.devicePixelRatio || 1,

  update() {
    this.width =
      window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    this.height =
      window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    this.center = {
      x: this.width / 2,
      y: this.height / 2
    };
  },

  onResize(listener, options = false) {
    window.addEventListener('optimizedResize', listener, options);
  },

  get physicalWidth() {
    return this.width * this.devicePixelRatio;
  },

  get physicalHeight() {
    return this.height * this.devicePixelRatio;
  },
};

w.init();

export default w;
