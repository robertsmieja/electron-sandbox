module.exports = {
  presets: [
    "@babel/preset-typescript",
    [
      "@babel/preset-env",
      {
        corejs: 3,
        shippedProposals: true,
        targets: {
          node: "current",
        },
        useBuiltIns: "entry",
      },
    ],
  ],
  plugins: [
    [
      "@babel/plugin-transform-runtime",
      {
        corejs: 3,
        useESModules: true,
      },
    ],
  ],
}
