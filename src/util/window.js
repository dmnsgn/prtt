const w = {
  init() {
    this.onResize(this.updateDimensions.bind(this));
    this.updateDimensions();
  },

  width: null,
  height: null,
  devicePixelRatio: window.devicePixelRatio || 1,

  updateDimensions() {
    this.width =
      window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    this.height =
      window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
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
