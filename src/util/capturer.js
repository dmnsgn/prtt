import CCapture from 'ccapture.js';

import config from '../config';

const framerate = 30;

const capturer = new CCapture({
  framerate,
  // motionBlurFrames: (960 / framerate),
  format: 'jpg', // $ convert -delay 6 -loop 0 -layers optimize -resize 10% *.jpg preview.gif
  name: `${config.name}-capture`,
  verbose: false,
  display: config.parameters.has('capture'),
  quality: 100,
  timeLimit: 4,
  frameLimit: 0,
  autoSaveTime: 0,
  onProgress(p) {
    console.log(p);
  },
});

export default capturer;
