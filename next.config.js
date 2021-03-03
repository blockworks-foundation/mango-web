/* eslint-disable */
const withAntdLess = require("next-plugin-antd-less");

module.exports = withAntdLess({
  // optional
  lessVarsFilePath: "./styles/theme.less",
  cssLoaderOptions: {},

  // Other Config Here...

  webpack(config) {
    return config;
  },
});
