import { printSchema } from 'graphql'

import uploadFileUrl from './resolvers/upload-file/url'

function generateGraphqlSchema(strapi: Strapi.Strapi): void {
  const schema = getContentApiService(strapi).buildSchema()
  strapi.fs.writeAppFile('./src/graphql/schema.graphqls', printSchema(schema))
  strapi.log.info('[GraphQL] Schema generated')
}

function getGraphqlPlugin(strapi: Strapi.Strapi): Strapi.Graphql.Plugin {
  return strapi.plugin('graphql')
}

function getExtensionService(strapi: Strapi.Strapi) {
  return strapi.service<Strapi.Graphql.ExtensionService>('plugin::graphql.extension')
}

function getContentApiService(strapi: Strapi.Strapi) {
  return getGraphqlPlugin(strapi).service<Strapi.Graphql.ContentApiService>('content-api')
}

function getSchemaExtension(): () => Strapi.Graphql.SchemaExtension {
  return () => ({
    resolvers: {
      UploadFile: {
        url: uploadFileUrl,
      },
    },
  })
}

export { generateGraphqlSchema, getExtensionService, getSchemaExtension }
