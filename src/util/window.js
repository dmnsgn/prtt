import { debounce } from "lodash";

export function BindEvent(value, options = false) {
  return function(target, key, descriptor) {
    return {
      configurable: true,
      enumerable: descriptor.enumerable,
      get: function getter() {
        Object.defineProperty(this, key, {
          configurable: true,
          enumerable: descriptor.enumerable,
          value: debounce(descriptor.value, 500)
        });

        window.addEventListener(value, descriptor.value.bind(this), options);

        return this[key];
      }
    };
  };
}

const w = {
  width: null,
  height: null,
  center: null,
  devicePixelRatio: window.devicePixelRatio || 1,

  init() {
    this.updateDimensions();
  },

  get physicalWidth() {
    return this.width * this.devicePixelRatio;
  },

  get physicalHeight() {
    return this.height * this.devicePixelRatio;
  },

  @BindEvent("resize")
  updateDimensions() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.center = { x: this.width / 2, y: this.height / 2 };
  }
};

w.init();

export default w;
