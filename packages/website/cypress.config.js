'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
var cypress_1 = require('cypress')
var dotenv_1 = require('dotenv')
var dotenvConfig = (0, dotenv_1.config)()
var resolveBaseUrl = function () {
  return process.env.APP_ENV !== 'staging'
    ? 'http://localhost:8080'
    : process.env.DOMAIN
    ? 'https://'.concat(process.env.DOMAIN)
    : 'https://'.concat(process.env.APP_NAME, '.bndigital.dev')
}
exports.default = (0, cypress_1.defineConfig)({
  e2e: {
    setupNodeEvents: function (on, config) {
      var _a
      config.baseUrl = resolveBaseUrl()
      config.env = (_a = dotenvConfig.parsed) !== null && _a !== void 0 ? _a : {}
      return config
    },
  },
})
