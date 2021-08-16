const { mergeWithReact } = require('@bn-digital/webpack')
const path = require('path')
const packageJson = require('./package.json')

module.exports = mergeWithReact(
  {
    context: __dirname,
    output: {
      path: path.join(__dirname, 'build'),
    },
    resolve: { alias: { src: path.join(__dirname, 'src') }, extensions: ['.tsx', '.jsx', '.js', '.ts', '.json'] },
  },
  {
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
  },
)
