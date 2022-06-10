/** @type {import('next').NextConfig} */

const withReactSvg = require('next-react-svg');
const path = require('path');

module.exports = withReactSvg({
  compiler: {
    reactStrictMode: true,
    styledComponents: true,
  },
  include: path.resolve(__dirname, '/public/assets/'),
  webpack(config, options) {
    return config;
  },
});
