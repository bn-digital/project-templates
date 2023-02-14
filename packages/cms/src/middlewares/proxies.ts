import type { Context, Next } from 'koa'

export default () => async (ctx: Context, next: Next) => {
  if (ctx.method.match(/get/i)) {
    try {
      ctx.url = '/index.html'
      ctx.body = strapi.middlewares['strapi::public'](ctx)
    } catch (e: unknown) {
      strapi.log.error(`[proxy] Failed to parse url: ${e}`)
    }
  }
  return await next()
}
