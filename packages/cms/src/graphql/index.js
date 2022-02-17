const { printSchema } = require('graphql')

function generateGraphqlSchema(strapi) {
  const schema = strapi.plugin('graphql').service('content-api').buildSchema()
  strapi.fs.writeAppFile('./src/graphql/schema.graphqls', printSchema(schema))
  strapi.log.info('[GraphQL] Schema generated')
}

function getExtensionService(strapi) {
  return strapi.plugin('graphql').service('extension')
}

function getSchemaExtension(strapi) {
  return ({ nexus }) => ({
    types: [
      nexus.extendType({
        type: 'Query',
        definition: t => {
          t.field('me', {
            type: 'UsersPermissionsUser',
          })
        },
      }),
    ],
    resolvers: {
      Query: {
        me: async (root, args, ctx) => {
          return await strapi.plugin('users-permissions').service('user').fetch({ id: ctx.state.user.id })
        },
      },
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
    resolversConfig: {
      'Mutation.updateCustomer': {
        policies: ['global::owner'],
      },
      'Query.customer': {
        policies: ['global::owner'],
      },
    },
    plugins: [],
  })
}

module.exports = { getSchemaExtension, getExtensionService, generateGraphqlSchema }
