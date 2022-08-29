import { printSchema } from 'graphql'

import resolvers from './resolvers'

function generateGraphqlSchema(strapi: Strapi.Strapi): void {
  const schema = getContentApiService(strapi).buildSchema()
  strapi.fs.writeAppFile('./src/graphql/schema.graphqls', printSchema(schema))
  strapi.log.info('[graphql] Schema generated')
}

function getGraphqlPlugin(strapi: Strapi.Strapi): Strapi.Graphql.Plugin {
  return strapi.plugin('graphql')
}

function getExtensionService(strapi: Strapi.Strapi): Strapi.Graphql.ExtensionService {
  return strapi.service('plugin::graphql.extension')
}

function getContentApiService(strapi: Strapi.Strapi): Strapi.Graphql.ContentApiService {
  return getGraphqlPlugin(strapi).service('content-api')
}

function getSchemaExtension(): Strapi.Graphql.ExtensionCallback {
  return ({ nexus }) => {
    return {
      types: [
        nexus.extendType<'Query'>({
          type: 'Query',
          definition: t => {
            t.field('me', {
              type: 'UsersPermissionsUser',
            })
          },
        }),
        nexus.extendType<'Mutation'>({
          type: 'Mutation',
          definition: t => {
            t.field('changePassword', {
              type: 'Boolean',
              args: {
                input: nexus.arg({ type: 'ChangePasswordInput' }),
              },
            })
          },
        }),
        nexus.extendType<'UsersPermissionsUser'>({
          type: 'UsersPermissionsUser',
          definition: t => {
            t.field('id', {
              type: 'ID',
            })
          },
        }),
        nexus.inputObjectType<'ChangePasswordInput'>({
          name: 'ChangePasswordInput',
          definition: t => {
            t.nonNull.string('oldPassword')
            t.nonNull.string('newPassword')
          },
        }),
      ],
      resolvers,
    }
  }
}

export { generateGraphqlSchema, getExtensionService, getSchemaExtension }
