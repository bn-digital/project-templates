const { printSchema } = require('graphql')

function generateGraphqlSchema(strapi) {
  const schema = strapi.plugin('graphql').service('content-api').buildSchema()
  strapi.fs.writeAppFile('./src/graphql/schema.graphql', printSchema(schema))
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
            type: 'Customer',
          })
        },
      }),
      nexus.extendType({
        type: 'Customer',
        definition: t => {
          t.id('id')
        },
      }),
    ],
    resolvers: {
      Query: {
        me: async (root, args, ctx) => {
          const user = await strapi.plugin('users-permissions').service('user').fetch({ id: ctx.state.user.id }, ['customer'])
          const customer = user.customer ?? (await strapi.entityService.create('api::customer.customer', { data: {}, populate: ['*'] }))
          !user.customer && (await strapi.plugin('users-permissions').service('user').edit(root.id, { customer: customer.id }))

          return customer
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
