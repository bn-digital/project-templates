import * as path from 'path'
import { Configuration, ProvidePlugin } from 'webpack'
import * as fs from 'fs'
import { Configuration as DevServerConfiguration } from 'webpack-dev-server'
import * as HtmlWebpackPlugin from 'html-webpack-plugin'
import { CleanWebpackPlugin } from 'clean-webpack-plugin'
import * as MiniCssExtractPlugin from 'mini-css-extract-plugin'
import * as TerserPlugin from 'terser-webpack-plugin'
import * as autoprefixer from 'autoprefixer'
import * as DotEnv from 'dotenv-webpack'
// eslint-disable-next-line @typescript-eslint/no-var-requires
const WebpackBarPlugin = require('webpackbar')

const config: Configuration & { devServer: DevServerConfiguration } = {
  entry: './src/index.tsx',
  target: 'web',
  devtool: 'inline-source-map',
  mode: (process.env.NODE_ENV as 'development' | 'production') ?? 'development',
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
    compress: true,
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
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
      },
      {
        test: /\.tsx?$/,
        use: 'awesome-typescript-loader',
      },
      {
        test: /\.(css|less)$/,
        use: [
          MiniCssExtractPlugin.loader,
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
    new DotEnv(),
    new WebpackBarPlugin({ fancy: true, profile: true }),
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
export default config
