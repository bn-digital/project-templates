import { printSchema } from 'graphql'

import uploadFileUrl from './resolvers/upload-file/url'

function generateGraphqlSchema(strapi: Strapi.Strapi) {
  const schema = strapi.plugin('graphql').service('content-api').buildSchema()
  strapi.fs.writeAppFile('./src/graphql/schema.graphqls', printSchema(schema))
  strapi.log.info('[GraphQL] Schema generated')
}

function getExtensionService(strapi: Strapi.Strapi) {
  return strapi.plugin('graphql').service('extension')
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
