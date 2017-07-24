"use strict";

var _fs = require("fs");

function concatFiles(opts) {
  var out = opts.src.map(function(filePath) {
    return _fs.readFileSync(filePath).toString();
  });
  _fs.writeFileSync(opts.dest, out.join("\n"));
}

module.exports = {
  concatFiles: concatFiles
};
