module.exports = require('@bn-digital/webpack/react').mergeWithReact(
  {},
  {
    plugins: {
      html: { template: 'src/index.html' },
    },
  },
)
