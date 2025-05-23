const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.PAGES_BASE_PATH,
  images: {
    loader: 'custom',
    loaderFile: './src/app/image.ts',
  },
};

module.exports = withNextIntl(nextConfig);
