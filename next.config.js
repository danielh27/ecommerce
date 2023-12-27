/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.getduna.com',
      }
    ]
  },
}

module.exports = nextConfig
