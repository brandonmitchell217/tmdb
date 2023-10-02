/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["image.tmdb.org", "placehold.co"],
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
