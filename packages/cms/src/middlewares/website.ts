import { join } from "node:path"

import { existsSync, readFileSync } from "fs"
import { Context, Next } from "koa"

const STATIC_FILES_REGEX = new RegExp(/\/[\da-z]+\.[a-z]{2,4}/i)

function strapiRouteMatcher(route: Strapi.Server.Route): boolean {
  const methodsToIgnore = ["POST", "PUT", "DELETE", "PATCH"]
  return !methodsToIgnore.some(method => route.methods.includes(method))
}

function urlPrefixMatcher(path: string): boolean {
  const pathsToIgnore = ["/]*)", "/index.html", "/", "/]*)", "/((?!uploads"]

  return !pathsToIgnore.some(one => path === one)
}

function distinctValues<T>(value: T, index: number, self: T[]): boolean {
  return self.indexOf(value) === index
}

function strapiRouteToPrefix(route: Strapi.Server.Route): string {
  return route.opts.prefix?.length > 1 ? route.opts.prefix : `/${route.path.split("/")[1]}`
}

function strapiRoutePrefixes(server: Strapi.Server.App) {
  return server
    .listRoutes()
    .filter(strapiRouteMatcher)
    .map(strapiRouteToPrefix)
    .filter(distinctValues)
    .filter(urlPrefixMatcher)
}

function isStrapiRoute(ctx: Context): boolean {
  return strapiRoutePrefixes(strapi.server).some(prefix => ctx.url.startsWith(prefix))
}

function isStaticRoute(ctx: Context): boolean {
  return STATIC_FILES_REGEX.test(ctx.url) || ctx.method.toLowerCase() !== "get"
}

function isWellKnownRoute(ctx: Context): boolean {
  return ctx.response.status !== 404
}

function isDefaultIndexAvailable(): boolean {
  return existsSync(join(strapi.dirs.static.public, `index.html`))
}

export default () => (ctx: Context, next: Next) => {
  if (isStrapiRoute(ctx) || isStaticRoute(ctx) || isWellKnownRoute(ctx) || !isDefaultIndexAvailable()) {
    return next()
  } else {
    ctx.url = "/index.html"
    ctx.type = "html"
    ctx.status = 200
    ctx.body = readFileSync(join(strapi.dirs.static.public, `index.html`))
  }
}
