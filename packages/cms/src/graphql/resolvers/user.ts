import { hashSync } from 'bcryptjs'
import { FieldResolver } from 'nexus'

function getUserService(): Strapi.UsersPermissions.UserService {
  return strapi.plugin('users-permissions').service('user')
}

async function changePassword(
  root,
  args: { input: Strapi.UsersPermissions.ChangePasswordPayload },
  ctx: Strapi.Graphql.ResolverContext
): Promise<boolean> {
  const userId = ctx.state.user.id
  const currentPassword = ctx.state.user.password
  const oldPassword = args.input.oldPassword
  const newPassword = args.input.newPassword

  const userService = getUserService()

  try {
    const validPassword = await userService
      .validatePassword(oldPassword, currentPassword)
      .then(
        validPassword =>
          validPassword && userService.edit(userId, { resetPasswordToken: null, password: hashSync(newPassword, 10) })
      )
    return !!validPassword
  } catch (err) {
    return ctx.throw(400, err.message)
  }
}

const me: FieldResolver<'Query', 'me'> = async (root, args: null, ctx: Strapi.Graphql.ResolverContext) => {
  const userService = getUserService()
  const user = await userService.fetch(ctx.state.user.id, { populate: '*' })
  if (!user) return null

  return {
    id: ctx.state.user.id,
    ...user,
  }
}

export { changePassword, me }
