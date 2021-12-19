const { printSchema } = require('graphql')
const path = require('path')

/**
 * Generates GraphQL schema and dumps into src/graphql/schema.graphql file
 * @param {Strapi} strapi
 */
function generateGraphqlSchema(strapi) {
  const schema = strapi.plugin('graphql').service('content-api').buildSchema()
  strapi.fs.writeAppFile('./src/graphql/schema.graphql', printSchema(schema))
  strapi.log.info('[GraphQL] Schema generated')
}

module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register({ strapi }) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap({ strapi }) {
    generateGraphqlSchema(strapi)
  },
}