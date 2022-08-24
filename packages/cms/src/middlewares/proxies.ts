import axios, { type Method,AxiosError } from 'axios'
import type { Context } from 'koa'
import { parse } from 'url'

export default ({ proxies }: { proxies: { [key: string]: string } }) =>
  async (ctx: Context, next: CallableFunction) => {
    if (
      ctx.URL.pathname.startsWith('/api/proxy') &&
      (ctx.headers.accept.match(/application\/(json|graphql|xml)/) || ctx.headers['content-type'].match(/application\/(json|graphql|xml)/))
    ) {
      const chunks = ctx.URL.pathname.replace('/api/proxy/', '').split('/')
      const key = chunks.shift()
      try {
        const baseURL = parse(proxies?.[key], false)
        if (baseURL) {
          const response = await axios
            .request({
              baseURL: baseURL.href,
              method: ctx.method as Method,
              params: ctx.URL.search,
              url: ctx.URL.pathname.replace(`/api/proxy/${key}/`, '/'),
              data: ctx.request.body,
              headers: Object.entries(ctx.request.headers).reduce((headers, [key, value]) => ({ ...headers, [key]: value }), {}),
            })
            .catch((error: AxiosError) => error.response)
          ctx.response.body = response.data
          ctx.response.status = response.status
        }
      } catch (e) {
        strapi.log.error(`[proxy] Failed to parse url: ${e?.message}`)
      }
    }
    return await next()
  }
