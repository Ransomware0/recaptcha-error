import type { NextConfig } from "next";
const createNextIntlPlugin = require('next-intl/plugin');

 const withNextIntl = createNextIntlPlugin('./src/app/i18n/request.ts');
 
const nextConfig: NextConfig = {
  /* config options here */
};

module.exports = withNextIntl(nextConfig);
