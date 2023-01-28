/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa');

const isProd = process.env.NODE_ENV === 'production';

module.exports = withPWA({
  pwa: {
    dest: 'public',
    register: true,
    skipWaiting: true,
  },
});

module.exports = {
  assetPrefix: isProd ? '/your-github-repo-name/' : '',
  images: {
    unoptimized: true,
  },
};

const nextConfig = {
  experimental: {
    appDir: false,
  },
};

module.exports = nextConfig;
