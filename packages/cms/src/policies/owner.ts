import { UsersPermissions } from '@bn-digital/strapi-types'
import { Policy, PolicyContext } from '@strapi/strapi/lib/core/registries/policies'
import { ParameterizedContext } from 'koa'
import AuthContext = UsersPermissions.AuthContext

const policy: Policy = (ctx: PolicyContext & ParameterizedContext<AuthContext>) => {
  const owner = ctx.state.user
  const target = ctx.args
  return `${owner.id}` === `${target.id}`
}

export { policy as default }
