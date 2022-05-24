import { optimize } from "webpack";

var PLUGINS = [];
if (process.env.NODE_ENV === "production") {
  PLUGINS.push(new optimize.UglifyJsPlugin());
}

export const entry = "./src/index.js";
export const output = {
  path: __dirname,
  filename: "build/build.js"
};
export const plugins = PLUGINS;
export const devServer = {
  disableHostCheck: true
};
