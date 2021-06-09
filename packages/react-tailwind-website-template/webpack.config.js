const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { DefinePlugin } = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const DotEnvWebpack = require('dotenv-webpack')
const tailwindcss = require('@tailwindcss/jit')
const autoprefixer = require('autoprefixer')

module.exports = {
  entry: './src/index.tsx',
  target: 'web',
  mode: process.env.NODE_ENV ?? 'development',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  stats: 'errors-warnings',
  devtool: 'eval',
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
  devServer: {
    historyApiFallback: true,
    open: false,
    compress: true,
    hot: true,
    port: 3000,
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-react', '@babel/preset-env'],
        },
      },
      {
        test: /\.tsx?$/,
        use: 'awesome-typescript-loader',
      },
      {
        test: /\.(css|scss|sass)$/,
        exclude: /\.module\.(scss|sass)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: require.resolve('css-loader'),
            options: {
              modules: {
                compileType: 'icss',
              },
              importLoaders: 3,
            },
          },
          {
            loader: require.resolve('postcss-loader'),
            options: {
              postcssOptions: {
                plugins: [tailwindcss, autoprefixer],
              },
            },
          },
          { loader: 'sass-loader' },
        ],
      },
      {
        test: /\.module\.(scss|sass)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: require.resolve('css-loader'),
            options: {
              modules: {
                auto: true,
                exportLocalsConvention: 'camelCase',
                compileType: 'module',
              },
              importLoaders: 3,
            },
          },
          {
            loader: require.resolve('postcss-loader'),
            options: {
              postcssOptions: {
                plugins: [tailwindcss, autoprefixer],
              },
            },
          },
          { loader: require.resolve('sass-loader') },
        ],
      },
      {
        test: /\.(jpg|png|svg)$/i,
        loader: 'url-loader',
      },
    ],
  },
  plugins: [
    new DotEnvWebpack(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html'),
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
      chunkFilename: '[id].[contenthash].css',
    }),
  ],
}
