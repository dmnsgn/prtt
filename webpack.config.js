var path = require("path");

var src = "./src";

module.exports = {
  entry: src + "/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  devServer: {
    contentBase: "./dist"
  },
  devtool: "inline-source-map",
  resolve: {
    alias: {
      Root: path.resolve(src),
      View: path.resolve(src, "view/"),
      Shader: path.resolve(src, "shader/"),
      Util: path.resolve(src, "util/")
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["env"],
            plugins: [
              "transform-decorators-legacy",
              "transform-class-properties",
              "transform-object-rest-spread",
              "glslify"
            ]
          }
        }
      }
    ]
  }
};
