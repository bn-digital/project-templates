const { printSchema } = require('graphql')

function generateGraphqlSchema(strapi) {
  const schema = strapi.plugin('graphql').service('content-api').buildSchema()
  strapi.fs.writeAppFile('./src/graphql/schema.graphqls', printSchema(schema))
  strapi.log.info('[GraphQL] Schema generated')
}

function getExtensionService(strapi) {
  return strapi.plugin('graphql').service('extension')
}

function getSchemaExtension() {
  return () => ({
    resolvers: {
      UploadFile: {
        url: async root => {
          console.log(root)
          let url = new URL(root.url)
          if (process.env.S3_PUBLIC_URL) {
            url = new URL(`${process.env.S3_PUBLIC_URL}${url.pathname}`)
          }
          return url.toString()
        },
      },
    },
  })
}

module.exports = { getSchemaExtension, getExtensionService, generateGraphqlSchema }
