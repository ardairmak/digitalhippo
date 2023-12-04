/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
      },
      {
        protocol: "https",
        hostname: "digitalhippo-production-1a0a.up.railway.app/",
      },
    ],
  },
};

module.exports = nextConfig;
