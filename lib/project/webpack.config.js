/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");
const nodeExternals = require("webpack-node-externals");

module.exports = {
  mode: "production",
  entry: {
    server: "./src/index.ts",
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].bundle.js",
    clean: true,
  },
  resolve: {
    extensions: [".ts"],
    fallback: {
      fs: require.resolve("fs"),
    },
    alias: {
      "@constants": path.resolve(__dirname, "src/constants"),
      "@controllers": path.resolve(__dirname, "src/controllers"),
      "@de": path.resolve(__dirname, "src/de"),
      "@entities": path.resolve(__dirname, "src/entities"),
      "@repositories": path.resolve(__dirname, "src/repositories"),
      "@services": path.resolve(__dirname, "src/services"),
      "@utils": path.resolve(__dirname, "src/utils"),
    },
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: "ts-loader",
      },
    ],
  },
  optimization: {
    runtimeChunk: "single",
    minimize: true,
  },
  externals: [nodeExternals()],
  target: "node",
};
