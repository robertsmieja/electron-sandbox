const rules = require("./webpack.rules")
const plugins = require("./webpack.plugins")

rules.push({
  test: /\.css$/,
  use: [{ loader: "style-loader" }, { loader: "css-loader" }],
})

module.exports = {
  devtool: "cheap-module-eval-source-map",
  module: {
    rules,
  },
  plugins: plugins,
  resolve: {
    extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".css"],
  },
}
