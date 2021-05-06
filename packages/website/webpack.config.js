const CracoLessPlugin = require('craco-less')
const WebpackBar = require('webpackbar')

module.exports = {
  webpack: {
    plugins: [new WebpackBar({ profile: false, fancy: true })],
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        sourceMap: false,
        lessLoaderOptions: {
          lessOptions: {
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
}
