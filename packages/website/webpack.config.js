const { mergeWithReact } = require('@bn-digital/webpack/index')
const path = require('path')
const dotenv = require('dotenv')
const packageJson = require('./package.json')

const webpackConfig = {
  entry: './src/index.tsx',
  resolve: {
    fallback: { path: false },
    extensions: ['.ts', '.js', '.tsx', '.jsx', '*'],
    alias: {
      src: path.join(__dirname, 'src'),
    },
  },
}

module.exports = mergeWithReact(webpackConfig, {
  env: dotenv.config().parsed,
  devServer: {
    proxy: [
      {
        context: ['/graphql', 'upload', '/uploads'],
        target: packageJson.proxy ?? 'http://localhost:1337',
      },
    ],
  },
  html: {
    template: path.join(__dirname, 'src', 'index.html.ejs'),
    templateParameters: {
      options: { title: 'React App' },
      version: '1.0',
    },
  },
})
