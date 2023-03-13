import * as fs from 'fs'
import { Context, Next } from 'koa'
import path from 'path'
import { VoidFunctionComponent } from 'react'

import app from '../hooks'

const STRAPI_URL_REGEXP =
  /\/(admin|api|graphql|content-type-builder|content-manager|users-permissions|import-export-entries|config-sync|i18n|upload|email-designer)(.*)/
const ASSET_URL_REGEXP = /^\/(assets|sitemap|uploads)\/(.*).(js|css|ttf|woff|jpg|jpeg|bmp|svg|gif|tiff|mp4|mov|pdf)/i

/**
 * TODO(vlad): This is a temporary solution to serve the SPA.
 */
export default () => (ctx: Context, next: () => void) => {
  if (
    ctx.method.toLowerCase() === 'get' &&
    !ctx.URL.pathname.match(STRAPI_URL_REGEXP) &&
    !ctx.URL.pathname.match(ASSET_URL_REGEXP)
  ) {
    if (ctx.response.status === 404 || ctx.url === '/') {
      ctx.url = '/index.html'
      ctx.type = 'html'
      ctx.body = fs.createReadStream(path.join(app.workingDir, 'public', 'index.html'))

      return next()
    }
  }
  return next()
}
