import { name } from '../config'
import { generateGraphqlSchema, getExtensionService, getSchemaExtension } from './graphql'

export default {
  register({ strapi }: Global) {
    strapi.log.info(`[strapi] Project name resolved as ${name}`)
    const extensionService = getExtensionService(strapi)
    // Disabling CUD operations for public-facing APIs
    const readOnlyEntities: EntityUID[] = [
      'api::email.email',
      'api::post.post',
      'api::translation.translation',
      'api::website.website',
      'plugin::email-designer.email-template',
      'plugin::i18n.locale',
      'plugin::menus.menu',
      'plugin::menus.menu-item',
      'plugin::users-permissions.permission',
      'plugin::users-permissions.role',
    ]
    const writeOnlyEntities: EntityUID[] = ['api::contact.contact']
    readOnlyEntities.forEach(entity => extensionService.shadowCRUD(entity).disableMutations())
    writeOnlyEntities.forEach(entity => extensionService.shadowCRUD(entity).disableQueries())
    // Decorating schema with custom fields, resolvers and extensions
    extensionService.use(getSchemaExtension())
  },

  bootstrap({ strapi }: Global) {
    if (process.env.NODE_ENV !== 'production') {
      generateGraphqlSchema(strapi)
    }
  },
}
