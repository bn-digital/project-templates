import { GraphQLFieldResolver } from "graphql"

const me: GraphQLFieldResolver<null, Graphql.ResolverContext, null> = async (root, args, ctx) => {
  const userService: UsersPermissions.UserService = strapi.plugin("users-permissions").service("user")
  const user = await userService.fetch(ctx.state.user.id, { populate: "*" })
  if (!user) return null

  return {
    ...user,
    id: ctx.state.user.id,
  }
}

export { me }
