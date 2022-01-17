const { createSuperAdmin, generateGraphqlSchema } = require('./helpers')

module.exports = {
  register() {},

  bootstrap({ strapi }) {
    createSuperAdmin(strapi).then(user => strapi.log.info(`[Strapi] Admin user: ${user.username}`))
    generateGraphqlSchema(strapi)
  },
}
