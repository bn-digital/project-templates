const { generateGraphqlSchema, getExtensionService, getSchemaExtension } = require('./graphql')
const { createSuperAdmin } = require('./helpers')

module.exports = {
  register({ strapi }) {
    const extensionService = getExtensionService(strapi)
    // Disabling CUD operations for public-facing APIs
    const readOnlyEntities = ['website']
    readOnlyEntities.forEach(entity => extensionService.shadowCRUD(`api::${entity}.${entity}`).disableMutations())
    // Decorating schema with custom fields, resolvers and extensions
    extensionService.use(getSchemaExtension(strapi))
    strapi.log.info('[GraphQL] Schema extensions applied..')
  },

  bootstrap({ strapi }) {
    createSuperAdmin(strapi).then(user => strapi.log.info(`[Strapi] Admin user: ${user.username}`))
    generateGraphqlSchema(strapi)
  },
}
