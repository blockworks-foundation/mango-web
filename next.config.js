module.exports = {
  target: 'serverless',
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })
    config.node = {
      fs: 'empty',
      module: 'empty',
    }

    return config
  },
}
