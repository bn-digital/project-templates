import { Policy, PolicyContext } from '@strapi/strapi/lib/core/registries/policies'

const policy: Policy = (ctx: Strapi.Context & PolicyContext) => {
  const owner = ctx.state.user
  const target = ctx.args
  return `${owner.id}` === `${target.id}`
}

export { policy as default }
