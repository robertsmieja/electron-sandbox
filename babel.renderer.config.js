module.exports = {
  presets: [
    "@babel/preset-react",
    "@babel/preset-typescript",
    [
      "@babel/preset-env",
      {
        corejs: 3,
        shippedProposals: true,
        targets: {
          esmodules: true,
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
