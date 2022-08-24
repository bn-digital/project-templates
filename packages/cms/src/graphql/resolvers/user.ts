import { hashSync } from 'bcryptjs'

function getUserService() {
  return strapi.service<Strapi.UsersPermissions.UserService>('plugin::users-permissions.user')
}

async function changePassword(root, args: { input: Strapi.UsersPermissions.ChangePasswordPayload }, ctx: Strapi.Graphql.ResolverContext): Promise<boolean> {
  if (!ctx.state.user) return ctx.throw(401)
  const userId = ctx.state.user.id
  const currentPassword = ctx.state.user.password
  const oldPassword = args.input.oldPassword
  const newPassword = args.input.newPassword

  const userService = getUserService()

  try {
    const validPassword = await userService
      .validatePassword(oldPassword, currentPassword)
      .then(validPassword => validPassword && userService.edit(userId, { resetPasswordToken: null, password: hashSync(newPassword, 10) }))
    return !!validPassword
  } catch (err) {
    return ctx.throw(400, err.message)
  }
}

async function me(root, args, ctx: Strapi.Graphql.ResolverContext): Promise<Strapi.UsersPermissions.UserEntity> {
  const userService = getUserService()
  const user = await userService.fetch(ctx.state.user.id, { populate: '*' })
  if (!user) return null

  return {
    ...user,
    id: ctx.state.user.id,
  }
}

export { changePassword, me }
