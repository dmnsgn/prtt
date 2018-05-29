const path = require("path");
const MinifyPlugin = require("babel-minify-webpack-plugin");

const src = "./src";

const NODE_ENV = process.env.NODE_ENV;

module.exports = {
  entry: src + "/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  mode: ["production", "development"].includes(NODE_ENV)
    ? NODE_ENV
    : "production",
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
  plugins: [NODE_ENV === "production" ? new MinifyPlugin() : undefined].filter(
    Boolean
  ),
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
                "@babel/preset-env",
                {
                  targets: {
                    browsers: ["last 2 versions", "safari >= 7"]
                  }
                }
              ]
            ],
            plugins: [
              "@babel/plugin-transform-modules-commonjs",
              ["@babel/plugin-proposal-decorators", { legacy: true }],
              "@babel/plugin-proposal-class-properties",
              "@babel/plugin-proposal-object-rest-spread",
              "@babel/plugin-transform-runtime"
            ]
          }
        }
      }
    ]
  }
};
