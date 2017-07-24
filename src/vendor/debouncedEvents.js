// https://developer.mozilla.org/en-US/docs/Web/Events/resize
(function() {
  const throttle = (type, name, obj) => {
    obj = obj || window; // eslint-disable-line no-param-reassign
    let running = false;
    const func = () => {
      if (running) {
        return;
      }
      running = true;
      requestAnimationFrame(() => {
        obj.dispatchEvent(new CustomEvent(name));
        running = false;
      });
    };
    obj.addEventListener(type, func);
  };

  /* init - you can init any event */
  throttle("resize", "debouncedResize");
  throttle("scroll", "debouncedScroll");
  throttle("touchmove", "debouncedTouchmove");
})();
