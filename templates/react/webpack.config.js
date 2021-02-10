const CracoAntDesignPlugin = require('craco-antd')
const WebpackBar = require('webpackbar')
const WebpackPwaManifest = require('webpack-pwa-manifest')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

module.exports = {
  webpack: {
    plugins: [
      new WebpackBar({}),
      ...(process.env.NODE_ENV !== 'profile' ? [new BundleAnalyzerPlugin({ openAnalyzer: false })] : []),
      new WebpackPwaManifest({
        inject: true,
        ios: true,
        start_url: '.',
        display: 'standalone',
        background_color: '#222',
        icons: [
        ],
      }),
    ],
  },
  plugins: [
    {
      plugin: CracoAntDesignPlugin,
      options: {
        sourceMap: true,
        lessLoaderOptions: {
          lessOptions: {
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
}