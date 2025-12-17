/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // External images (Unsplash etc.)
  images: {
    domains: ["images.unsplash.com"],
  },

  // Useful for future deploys
  trailingSlash: false,

  // Disable X-Powered-By header (security)
  poweredByHeader: false,
};

module.exports = nextConfig;
