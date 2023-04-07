import { GraphQLFieldResolver } from "graphql"

function getUserService(): Strapi.UsersPermissions.UserService {
  return strapi.plugin("users-permissions").service("user")
}

const me: GraphQLFieldResolver<null, Strapi.Graphql.ResolverContext, null> = async (root, args, ctx) => {
  const userService = getUserService()
  const user = await userService.fetch(ctx.state.user.id, { populate: "*" })
  if (!user) return null

  return {
    ...user,
    id: ctx.state.user.id,
  }
}

export { me }
