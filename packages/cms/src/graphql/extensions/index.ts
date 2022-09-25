import resolvers, { resolversConfig } from '../resolvers'

const readOnlyEntities: Readonly<Strapi.EntityUID[]> = [
  'api::email.email',
  'api::post.post',
  'api::website.website',
  'plugin::email-designer.email-template',
  'plugin::i18n.locale',
  'plugin::menus.menu',
  'plugin::menus.menu-item',
  'plugin::users-permissions.permission',
  'plugin::users-permissions.role',
] as const

const writeOnlyEntities: Readonly<Strapi.EntityUID[]> = ['api::contact.contact'] as const

const schemaExtension: Strapi.Graphql.ExtensionCallback = ({ nexus }) => ({
  types: [
    nexus.extendType({
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
        t.nonNull.boolean('changePassword', {
          args: {
            input: nexus.arg({ type: 'ChangePasswordInput' }),
          },
        })
      },
    }),
    nexus.extendType<'UsersPermissionsUser'>({
      type: 'UsersPermissionsUser',
      definition: t => {
        t.nonNull.id('id')
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
  resolversConfig,
})

export { readOnlyEntities, schemaExtension, writeOnlyEntities }
