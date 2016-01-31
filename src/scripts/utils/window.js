let _windowData = {
  width: undefined,
  height: undefined
};

var optimizedResize = (function() {

  var callbacks = [],
    running = false;

  // fired on resize event
  function resize() {

    if (!running) {
      running = true;

      if (window.requestAnimationFrame) {
        window.requestAnimationFrame(runCallbacks);
      } else {
        setTimeout(runCallbacks, 66);
      }
    }

  }

  // run the actual callbacks
  function runCallbacks() {

    callbacks.forEach(function(callback) {
      callback();
    });
    running = false;
  }

  // adds callback to loop
  function addCallback(callback) {
    if (callback) {
      callbacks.push(callback);
    }
  }

  return {
    // public method to add additional callback
    add: function(callback) {
      if (!callbacks.length) {
        window.addEventListener('resize', resize);
      }
      addCallback(callback);
    }
  }
}());

function _updateDimensions() {
  _windowData.width =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;
  _windowData.height =
    window.innerHeight ||
    document.documentElement.clientHeight ||
    document.body.clientHeight;
}

export function addResizeCallback(callback, immediateExecution) {
  if (immediateExecution) {
    callback();
  }
  optimizedResize.add(callback);
}

export function getWidth() {
  return _windowData.width;
}

export function getHeight() {
  return _windowData.height;
}

export const sizeFactor = window.devicePixelRatio;

optimizedResize.add(_updateDimensions);
_updateDimensions();
