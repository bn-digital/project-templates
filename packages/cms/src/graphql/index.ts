import { printSchema } from 'graphql'

import { readOnlyEntities, schemaExtension, writeOnlyEntities } from './extensions'

function generateSchema(strapi: Strapi.Strapi): void {
  const schema = getContentApiService(strapi).buildSchema()
  strapi.fs.writeAppFile('./src/graphql/schema.graphqls', printSchema(schema))
  strapi.log.info('[graphql] Schema generated')
}

function extendSchema(strapi: Strapi.Strapi) {
  const extensionService = getExtensionService(strapi)
  // Disabling CRUD operations for public-facing APIs
  readOnlyEntities.forEach(entity => extensionService.shadowCRUD(entity).disableMutations())
  writeOnlyEntities.forEach(entity => extensionService.shadowCRUD(entity).disableQueries())
  // Decorating schema with custom fields, resolvers and extensions
  extensionService.use(schemaExtension)
}

function getGraphqlPlugin(strapi: Strapi.Strapi): Strapi.Graphql.Plugin {
  return strapi.plugin('graphql')
}

function getExtensionService(strapi: Strapi.Strapi): Strapi.Graphql.ExtensionService {
  return getGraphqlPlugin(strapi).service('extension')
}

function getContentApiService(strapi: Strapi.Strapi): Strapi.Graphql.ContentApiService {
  return getGraphqlPlugin(strapi).service('content-api')
}

export { extendSchema, generateSchema }
