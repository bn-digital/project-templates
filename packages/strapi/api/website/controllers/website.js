'use strict'
const { sanitizeEntity } = require('strapi-utils')

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  async findOneByDomain(ctx) {
    console.log(ctx)
    const entity = await strapi.api.website.findOne(ctx.query)
    return entity ? sanitizeEntity(entity, { model: strapi.models.website }) : null
  },
}
