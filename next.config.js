/* eslint-disable @typescript-eslint/no-var-requires */
// const CircularDependencyPlugin = require('circular-dependency-plugin');
/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa');

// const withBundleAnalyzer = require('@next/bundle-analyzer');

module.exports = withPWA({
  pwa: {
    dest: 'public',
    // disable: process.env.NODE_ENV === 'development',
    scope: './pages/index.js',
    register: true,
    skipWaiting: true,
  },
});

const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
// const plugins = [];

// if (process.env.ANALYZE === 'true') {
//   // only load dependency if env `ANALYZE` was set
//   withBundleAnalyzer({
//     enabled: true,
//   });

//   plugins.push(withBundleAnalyzer);
// }

// plugins.push(withPWA);

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   experimental: {
//     appDir: true,
//   },
//   reactStrictMode: true,
//   webpack: (config) => {
//     config.plugins.push(
//       new CircularDependencyPlugin({
//         exclude: /a\.js|node_modules/,
//         include: /src/,
//         failOnError: true,
//         allowAsyncCycles: false,
//         cwd: process.cwd(),
//       }),
//     );

//     return config;
//   },
// };

// module.exports = () => plugins.reduce((acc, next) => next(acc), nextConfig);
