/* eslint-disable */
const withAntdLess = require("next-plugin-antd-less");
const lessToJS = require("less-vars-to-js");
const fs = require("fs");
const path = require("path");

const themeVariables = lessToJS(
  fs.readFileSync(path.resolve(__dirname, "./styles/theme.less"), "utf8")
);

// module.exports = withCSS({
//   cssModules: true,
//   cssLoaderOptions: {
//     importLoaders: 1,
//     localIdentName: "[local]___[hash:base64:5]",
//   },
//   ...withLess({
//     lessLoaderOptions: {
//       javascriptEnabled: true,
//       modifyVars: themeVariables,
//     },
//   }),
//   webpack: (config, { isServer }) => {
//     if (isServer) {
//       const antStyles = /antd\/.*?\/style.*?/;
//       const origExternals = [...config.externals];
//       config.externals = [
//         (context, request, callback) => {
//           if (request.match(antStyles)) return callback();
//           if (typeof origExternals[0] === "function") {
//             origExternals[0](context, request, callback);
//           } else {
//             callback();
//           }
//         },
//         ...(typeof origExternals[0] === "function" ? [] : origExternals),
//       ];

//       config.module.rules.unshift({
//         test: antStyles,
//         use: "null-loader",
//       });
//     }
//     return config;
//   },
// });

module.exports = withAntdLess({
  // optional
  lessVarsFilePath: "./styles/theme.less",
  cssLoaderOptions: {},

  // Other Config Here...

  webpack(config) {
    return config;
  },
});
