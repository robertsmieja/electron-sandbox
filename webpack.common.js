const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin")

module.exports = {
  module: {
    rules: [
      // Add support for native node modules
      {
        test: /\.node$/,
        use: "node-loader",
      },
      // {
      //   test: /\.js$/,
      //   use: ["source-map-loader"],
      //   enforce: "pre",
      // },
      // {
      //   test: /\.(m?[tj]sx?|node)$/,
      //   parser: { amd: false },
      //   use: {
      //     loader: "@zeit/webpack-asset-relocator-loader",
      //     options: {
      //       outputAssetBase: "native_modules",
      //     },
      //   },
      // },
      // {
      //   test: /\.tsx?$/,
      //   exclude: /(node_modules|\.webpack)/,
      //   use: {
      //     loader: "ts-loader",
      //     options: {
      //       transpileOnly: true,
      //     },
      //   },
      // },
    ],
  },
  plugins: [new ForkTsCheckerWebpackPlugin()],
}
