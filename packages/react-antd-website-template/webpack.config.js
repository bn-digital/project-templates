const path = require('path')
const { ProvidePlugin } = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const autoprefixer = require('autoprefixer')
const DotEnvWebpack = require('dotenv-webpack')
const WebpackBarPlugin = require('webpackbar')

const config = {
  entry: './src/index.tsx',
  target: 'web',
  stats: 'errors-warnings',
  devtool: 'eval',
  mode: process.env.NODE_ENV ?? 'development',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
  devServer: {
    historyApiFallback: true,
    open: true,
    hot: true,
    proxy: {
      '/graphql': 'http://localhost:1337',
      '/upload': 'http://localhost:1337',
      '/uploads': 'http://localhost:1337',
    },
    port: 3000,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.ts(x)?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(css|less)$/,
        use: [
          process.env.NODE_ENV === 'development' ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: { sourceMap: true },
          },
          {
            loader: 'less-loader',
            options: {
              sourceMap: true,
              lessOptions: { javascriptEnabled: true },
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                ident: 'postcss',
                plugins: [autoprefixer],
              },
            },
          },
        ],
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
    ],
  },
  plugins: [
    new DotEnvWebpack(),
    new WebpackBarPlugin({ fancy: true, profile: false }),
    new ProvidePlugin({
      process: 'process/browser',
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html'),
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'styles/[name].[contenthash].css',
      chunkFilename: '[id].[contenthash].css',
    }),
  ],
}
module.exports = config
