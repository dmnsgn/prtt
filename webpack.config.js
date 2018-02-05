const path = require("path");

const src = "./src";

const NODE_ENV = process.env.NODE_ENV;

module.exports = {
  entry: src + "/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  devServer: {
    contentBase: "./dist"
  },
  devtool: NODE_ENV !== "production" ? "source-map" : false,
  resolve: {
    alias: {
      Root: path.resolve(src),
      Containers: path.resolve(src, "containers/"),
      Components: path.resolve(src, "components/"),
      Shaders: path.resolve(src, "shaders/"),
      State: path.resolve(src, "state/"),
      Utils: path.resolve(src, "utils/")
    }
  },
  module: {
    rules: [
      {
        test: /\.(glsl|frag|vert)$/,
        use: [
          {
            loader: "raw-loader",
            options: {}
          },
          {
            loader: "glslify-loader",
            options: {}
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [
                "env",
                {
                  modules: false,
                  useBuiltIns: false,
                  targets: {
                    browsers: ["last 2 versions", "safari >= 7"]
                  }
                }
              ]
            ],
            plugins: [
              "transform-es2015-modules-commonjs",
              "transform-decorators-legacy",
              "transform-class-properties",
              "transform-object-rest-spread",
              "glslify"
            ],
            env: {
              production: {
                presets: ["minify"]
              }
            }
          }
        }
      }
    ]
  }
};
