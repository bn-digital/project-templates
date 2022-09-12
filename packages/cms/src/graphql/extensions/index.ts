import resolvers from '../resolvers'

const readOnlyEntities: Readonly<EntityUID[]> = [
  'api::email.email',
  'api::post.post',
  'api::translation.translation',
  'api::website.website',
  'plugin::email-designer.email-template',
  'plugin::i18n.locale',
  'plugin::menus.menu',
  'plugin::menus.menu-item',
  'plugin::users-permissions.permission',
  'plugin::users-permissions.role',
] as const

const writeOnlyEntities: Readonly<EntityUID[]> = ['api::contact.contact'] as const

const schemaExtension: Strapi.Graphql.ExtensionCallback = ({ nexus }) => ({
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
})

export { schemaExtension, readOnlyEntities, writeOnlyEntities }
