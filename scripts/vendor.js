'use strict';

var path = require('path');

var utils = require('./utils');

var pkg = require('../package.json');

function getVendors() {
  var vendors = [];
  for (var key in pkg.vendor) {
    if (pkg.vendor.hasOwnProperty(key)) {
      var vendor = path.join(pkg.paths.vendor, pkg.vendor[key]);
      vendors.push(vendor);
    }
  }
  return vendors;
}

utils.concatFiles({
  src: getVendors(),
  dest: path.join(pkg.paths.dest, 'vendor.js')
});
