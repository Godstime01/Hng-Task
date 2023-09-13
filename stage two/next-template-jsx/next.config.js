/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'api.themoviedb.org',
            port: '',
            pathname: '/3/**',
          },
        ],
      },
}

module.exports = nextConfig
