import { printSchema } from 'graphql'

import uploadFileUrl from './resolvers/upload-file/url'

function generateGraphqlSchema(strapi: Strapi.Strapi): void {
  const schema = getContentApiService(strapi).buildSchema()
  strapi.fs.writeAppFile('./src/graphql/schema.graphqls', printSchema(schema))
  strapi.log.info('[GraphQL] Schema generated')
}

function getExtensionService(strapi: Strapi.Strapi): Strapi.GraphqlPlugin.ExtensionService {
  return strapi.plugin('graphql').service('extension')
}

function getContentApiService(strapi: Strapi.Strapi): Strapi.GraphqlPlugin.ContentApiService {
  return strapi.plugin('graphql').service('content-api')
}

function getSchemaExtension() {
  return () => ({
    resolvers: {
      UploadFile: {
        url: uploadFileUrl,
      },
    },
  })
}

export { generateGraphqlSchema, getExtensionService, getSchemaExtension }
