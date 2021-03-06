// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// }

// module.exports = nextConfig

// next.config.js
// const withLess = require("next-with-less");

// module.exports = withLess({
//   lessLoaderOptions: {
//     /* ... */
//     lessOptions: {
//       /* ... */
//       modifyVars: {
//         "primary-color": "#9FF",
//         "border-radius-base": "2px",
//         /* ... */
//       },
//     },
//   },
// });

const fs = require('fs');
const path = require('path');
const withLess = require('next-with-less');
const lessToJS = require('less-vars-to-js');

const themeVariables = lessToJS(
  fs.readFileSync(
    path.resolve(__dirname, './public/styles/custom.less'),
    'utf8'
  )
);

module.exports = withLess({
  lessLoaderOptions: {
    lessOptions: {
      javascriptEnabled: true,
      modifyVars: themeVariables,
      // modifyVars: {
      //   "primary-color": "#9FF",
      //   "border-radius-base": "2px",
      // },
      localIdentName: '[path]___[local]___[hash:base64:5]',
    },
  },
})