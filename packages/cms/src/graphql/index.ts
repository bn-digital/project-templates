import { readOnlyEntities, schemaExtension, writeOnlyEntities } from "./extensions"

function extendSchema(strapi: Strapi.Strapi) {
  const extensionService = getExtensionService(strapi)
  // Disabling CRUD operations for public-facing APIs
  readOnlyEntities.forEach((entity: Strapi.SingleTypeUIDs) => extensionService.shadowCRUD(entity).disableMutations())
  writeOnlyEntities.forEach((entity: Strapi.SingleTypeUIDs) => extensionService.shadowCRUD(entity).disableQueries())
  // Decorating schema with custom fields, resolvers and extensions
  extensionService.use(schemaExtension)
}

function getExtensionService(strapi: Strapi.Strapi) {
  return strapi.plugin<Graphql.Plugin>("graphql").service<Graphql.ExtensionService>("extension")
}

export { extendSchema }
