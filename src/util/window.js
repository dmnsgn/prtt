const w = {
  init() {
    this.onResize(this.updateDimensions.bind(this));
    this.updateDimensions();
  },

  width: null,
  height: null,
  center: null,
  devicePixelRatio: window.devicePixelRatio || 1,

  updateDimensions() {
    this.width =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;
    this.height =
      window.innerHeight ||
      document.documentElement.clientHeight ||
      document.body.clientHeight;
    this.center = {
      x: this.width / 2,
      y: this.height / 2
    };
  },

  onResize(listener, options = false) {
    window.addEventListener("debouncedResize", listener, options);
  },

  offResize(listener, options = false) {
    window.removeEventListener("debouncedResize", listener, options);
  },

  onScroll(listener, options = false) {
    window.addEventListener("debouncedScroll", listener, options);
  },

  offScroll(listener, options = false) {
    window.removeEventListener("debouncedScroll", listener, options);
  },

  onTouchMove(listener, options = false) {
    window.addEventListener("debouncedTouchmove", listener, options);
  },

  offTouchMove(listener, options = false) {
    window.removeEventListener("debouncedTouchmove", listener, options);
  },

  get physicalWidth() {
    return this.width * this.devicePixelRatio;
  },

  get physicalHeight() {
    return this.height * this.devicePixelRatio;
  }
};

w.init();

export default w;
