import type { Context, Middleware } from 'koa'

export default () =>
  (async (ctx, next) => {
    if (ctx.method.match(/get/i)) {
      try {
        ctx.url = '/index.html'
        ctx.status = 404
      } catch (e) {
        strapi.log.error(`[404] Not found`)
      }
    }
    return await next()
  }) as Middleware<Context>
