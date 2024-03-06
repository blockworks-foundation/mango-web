const webpack = require('webpack')

/** @type {import('next').NextConfig} */
const nextConfig = {
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
      {
        protocol: 'https',
        hostname: 'images.ctfassets.net/**',
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
      {
        source: '/explore/categories/governanace',
        destination: '/explore/categories/governance',
        // 308 redirect
        permanent: true,
      },
      {
        source: '/explore/categories/perps',
        destination: '/explore/categories/derivatives',
        // 308 redirect
        permanent: true,
      },
      {
        source: '/explore/categories/oracle',
        destination: '/explore/categories',
        // 308 redirect
        permanent: true,
      },
      {
        source: '/explore/categories/tokenized-asset',
        destination: '/explore/categories',
        // 308 redirect
        permanent: true,
      },
      {
        source: '/explore/categories/yield-bearing',
        destination: '/explore/categories',
        // 308 redirect
        permanent: true,
      },
      {
        source: '/explore/categories/options',
        destination: '/explore/categories',
        // 308 redirect
        permanent: true,
      },
      {
        source: '/explore/categories/layer-2',
        destination: '/explore/categories',
        // 308 redirect
        permanent: true,
      },
      {
        source: '/explore/categories/dog-coin',
        destination: '/explore/categories',
        // 308 redirect
        permanent: true,
      },
      {
        source: '/explore/categories/amm',
        destination: '/explore/categories',
        // 308 redirect
        permanent: true,
      },
      {
        source: '/explore/categories/gambling',
        destination: '/explore/categories',
        // 308 redirect
        permanent: true,
      },
      {
        source: '/explore/categories/domains',
        destination: '/explore/categories',
        // 308 redirect
        permanent: true,
      },
      {
        source: '/explore/categories/social',
        destination: '/explore/categories',
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
