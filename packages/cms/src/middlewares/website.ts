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
  'js',
  'css',
  'ttf',
  'woff',
  'jpg',
  'jpeg',
  'bmp',
  'png',
  'ico',
  'svg',
  'gif',
  'tiff',
  'mp4',
  'mov',
  'pdf',
]
export default () => (ctx: Context, next: Next) => {
  if (
    ctx.method.toLowerCase() === 'get' &&
    !ctx.URL.pathname.match(new RegExp(`/(${strapiRoutes.join('|')})(.*).(${extensions.join('|')})`))
  ) {
    if (ctx.response.status === 404 || ctx.url === '/') {
      ctx.url = '/index.html'
      ctx.type = 'html'
      return next()
    }
  } else {
    return next()
  }
}
