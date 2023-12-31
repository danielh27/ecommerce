/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.getduna.com',
      },
      {
        protocol: 'https',
        hostname: 'images-staging.getduna.com',
      }
    ]
  },
}

module.exports = nextConfig
