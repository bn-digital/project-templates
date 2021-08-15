'use strict'
const pluginId = require('../package.json').strapi.name.toLowerCase()

/**
 * feedback.js service
 *
 * @description: A set of functions similar to controller's actions to avoid code duplication.
 */

module.exports = {
  async create(values) {
    return strapi.query('contact', pluginId).create(values)
  },
}
