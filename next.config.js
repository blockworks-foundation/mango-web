const { i18n } = require('./next-i18next.config')
const webpack = require('webpack')

/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['gsap'],
  i18n,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com/**',
      },
      {
        protocol: 'https',
        hostname: 'arweave.net/**',
      },
      {
        protocol: 'https',
        hostname: 'img.fotofolio.xyz/**',
      },
    ],
  },
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/explore',
        destination: '/explore/tokens',
        // 308 redirect
        permanent: true,
      },
    ]
  },
  webpack: (config, opts) => {
    if (!opts.isServer) {
      // don't resolve 'fs' module on the client to prevent this error on build --> Error: Can't resolve 'fs'
      config.resolve.fallback = {
        fs: false,
      }
    }

    config.plugins.push(
      new webpack.DefinePlugin({
        'process.env': {
          BUILD_ID: JSON.stringify(opts.buildId),
        },
      }),
    )

    return config
  },
}

module.exports = nextConfig
