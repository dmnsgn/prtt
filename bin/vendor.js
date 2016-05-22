'use strict';

var path = require('path');

var utils = require('./utils');

var pkg = require('../package.json');

console.log(pkg.vendor);

utils.concatFiles({
  src: pkg.vendor,
  dest: path.join('static/vendor.js')
});
