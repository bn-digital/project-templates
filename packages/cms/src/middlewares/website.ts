import { Context, Next } from 'koa'

const strapiRoutes = [
  'admin',
  'api',
  'assets',
  'config-sync',
  'content-manager',
  'content-type-builder',
  'email',
  'email-designer',
  'favicon',
  'graphql',
  'i18n',
  'import-export-entries',
  'sitemap',
  'transfer',
  'upload',
  'uploads',
  'users-permissions',
]
const extensions = [
  'bmp',
  'css',
  'gif',
  'ico',
  'jpeg',
  'jpg',
  'js',
  'mov',
  'mp4',
  'otf',
  'pdf',
  'png',
  'svg',
  'tiff',
  'ttf',
  'woff',
  'woff2',
]
export default () => (ctx: Context, next: Next) => {
  const { method, response, url } = ctx
  if (strapiRoutes.some(it => url.startsWith(`/${it}`) || extensions.some(it => url.endsWith(`.${it}`)))) {
    return next()
  }
  if ((method.toLowerCase() === 'get' && response.status === 404) || url === '/') {
    ctx.url = '/index.html'
    ctx.type = 'html'
    return next()
  }
}
