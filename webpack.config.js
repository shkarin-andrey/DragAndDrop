"use strict";
const path = require("path");
const miniCss = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  entry: "./src/js/script.js",
  output: {
    filename: "bundle.js",
    path: __dirname + "/public/js",
  },
  watch: true,

  devtool: "source-map",

  module: {
    rules: [
      {
        test: /\.(s*)css$/,
        use: [
          miniCss.loader,
          "css-loader",
          "sass-loader",
        ],
      },
    ],
  },
  plugins: [
    new miniCss({
      filename: "../css/style.css",
    }),
  ],
};
