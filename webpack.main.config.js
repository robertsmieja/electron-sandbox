const common = require("./webpack.common")
const babelMainConfig = require("./babel.main.config")
const { merge } = require("webpack-merge")

module.exports = merge(common, {
  /**
   * This is the main entry point for your application, it's the first file
   * that runs in the main process.
   */
  entry: "./src/index.ts",
  // Put your normal webpack config below here
  devtool: "cheap-module-eval-source-map",
  module: {
    rules: [
      {
        test: /\.m?[jt]sx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: babelMainConfig,
        },
      },
    ],
  },
  optimization: {
    noEmitOnErrors: true,
  },
  resolve: {
    extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".css", ".json"],
  },
  target: "electron-main",
})
