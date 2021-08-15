'use strict'

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  async create(data) {
    return await strapi.plugins['feedback'].services.contact.create(data)
  },
}
