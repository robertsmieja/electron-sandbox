const common = require("./webpack.common")
const babelRendererConfig = require("./babel.renderer.config")
const { merge } = require("webpack-merge")

module.exports = merge(common, {
  devtool: "cheap-module-eval-source-map",
  module: {
    rules: [
      {
        test: /\.m?[jt]sx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: babelRendererConfig,
        },
      },
      {
        test: /\.css$/,
        use: [{ loader: "style-loader" }, { loader: "css-loader" }],
      },
    ],
  },
  optimization: {
    noEmitOnErrors: true,
  },
  resolve: {
    extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".css"],
  },
  target: "electron-renderer",
})
