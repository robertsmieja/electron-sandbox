module.exports = {
  presets: [
    "@babel/typescript",
    "@babel/preset-react",
    [
      "@babel/env",
      {
        // targets: {
        //   electron: "current",
        // },
      },
    ],
  ],
}
