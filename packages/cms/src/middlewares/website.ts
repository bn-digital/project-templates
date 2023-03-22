import { Context, Next } from 'koa'

const STATIC_FILES_REGEX = new RegExp(/[\da-z]+\.[a-z]{2,4}/i)

function strapiRouteMatcher(route: Strapi.Route): boolean {
  const methodsToIgnore = ['POST', 'PUT', 'DELETE', 'PATCH']
  return !methodsToIgnore.some(method => route.methods.includes(method))
}

function urlPrefixMatcher(path: string): boolean {
  const pathsToIgnore = ['/]*)', '/index.html', '/', '/]*)', '/((?!uploads']

  return !pathsToIgnore.some(one => path === one)
}

function distinctValues<T>(value: T, index: number, self: T[]): boolean {
  return self.indexOf(value) === index
}

function strapiRouteToPrefix(route: Strapi.Route): string {
  return route.opts.prefix?.length > 1 ? route.opts.prefix : `/${route.path.split('/')[1]}`
}

function strapiRoutePrefixes(server: Strapi.Server) {
  return server
    .listRoutes()
    .filter(strapiRouteMatcher)
    .map(strapiRouteToPrefix)
    .filter(distinctValues)
    .filter(urlPrefixMatcher)
}

export default () => (ctx: Context, next: Next) => {
  const { method, response, url } = ctx

  if (strapiRoutePrefixes(strapi.server).some(prefix => url.startsWith(prefix)) || STATIC_FILES_REGEX.test(url)) {
    return next()
  }
  if (method.toLowerCase() === 'get' && response.status === 404) {
    ctx.url = '/index.html'
    ctx.type = 'html'
    return next()
  }
}
