const { printSchema } = require('graphql')

function generateGraphqlSchema(strapi) {
  const schema = strapi.plugin('graphql').service('content-api').buildSchema()
  strapi.fs.writeAppFile('./src/graphql/schema.graphqls', printSchema(schema))
  strapi.log.info('[GraphQL] Schema generated')
}

module.exports = { generateGraphqlSchema }
