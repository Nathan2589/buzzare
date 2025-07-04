/** @type {import('next').NextConfig} */
const nextConfig = {
  // Add these settings for faster page transitions
  pageExtensions: ['js', 'jsx'],
  poweredByHeader: false,
  compress: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Optional: Enable SWC minification instead of Terser
  swcMinify: true
};

export default nextConfig;
