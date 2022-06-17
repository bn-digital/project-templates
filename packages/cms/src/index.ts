import { generateGraphqlSchema, getExtensionService, getSchemaExtension } from './graphql'

export default {
  register({ strapi }: { strapi: Strapi }) {
    const extensionService = getExtensionService(strapi)
    // Disabling CUD operations for public-facing APIs
    const readOnlyEntities = ['website', 'post', 'translation']
    const writeOnlyEntities = ['contact']
    readOnlyEntities.forEach(entity => extensionService.shadowCRUD(`api::${entity}.${entity}`).disableMutations())
    writeOnlyEntities.forEach(entity => extensionService.shadowCRUD(`api::${entity}.${entity}`).disableQueries())
    // Decorating schema with custom fields, resolvers and extensions
    extensionService.use(getSchemaExtension())
  },

  bootstrap({ strapi }: { strapi: Strapi }) {
    generateGraphqlSchema(strapi)
  },
}
