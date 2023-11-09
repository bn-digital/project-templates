import { existsSync, readFileSync } from "fs"
import { Context, Next } from "koa"
import { join } from "path"

class RouteResolver {
  private readonly ctx: Context

  private constructor(ctx: Context) {
    this.ctx = ctx
  }

  public get shouldRedirectToIndex(): boolean {
    return !this.isStrapiInternal && !this.isGraphql && !this.isStatic && !this.isWellKnown && this.spaEntryExists
  }

  private get isGraphql(): boolean {
    return this.strapiRoutePrefixes().some(prefix => this.ctx.url.startsWith(prefix))
  }

  private get isStrapiInternal(): boolean {
    return this.strapiRoutePrefixes().some(prefix => this.ctx.url.startsWith(prefix))
  }

  private get isStatic(): boolean {
    return new RegExp(/[0-9a-z_-]+\.[a-z0-9]{2,5}/i).test(this.ctx.path) || this.ctx.method.toLowerCase() !== "get"
  }

  private get isWellKnown(): boolean {
    return this.ctx.response.status !== 404
  }

  private get spaEntryExists(): boolean {
    return existsSync(join(strapi.dirs.static.public, `index.html`))
  }

  public static fromContext(ctx: Context): RouteResolver {
    return new RouteResolver(ctx)
  }

  private strapiRouteMatcher(route: Server.Route): boolean {
    const methodsToIgnore = ["POST", "PUT", "DELETE", "PATCH"]
    return !methodsToIgnore.some(method => route.methods.includes(method))
  }

  private urlPrefixMatcher(path: string): boolean {
    const pathsToIgnore = ["/]*)", "/index.html", "/", "/]*)", "/((?!uploads"]

    return !pathsToIgnore.some(one => path === one)
  }

  private distinctValues<T>(value: T, index: number, self: T[]): boolean {
    return self.indexOf(value) === index
  }

  private strapiRouteToPrefix(route: Server.Route): string {
    return route.opts.prefix?.length > 1 ? route.opts.prefix : `/${route.path.split("/")[1]}`
  }

  private strapiRoutePrefixes() {
    return (strapi.server as Strapi.ServerApp)
      .listRoutes()
      .filter(this.strapiRouteMatcher)
      .map(this.strapiRouteToPrefix)
      .filter(this.distinctValues)
      .filter(this.urlPrefixMatcher)
  }
}

export default () =>
  (ctx: Context, next: Next): void | Promise<unknown> => {
    const resolver = RouteResolver.fromContext(ctx)
    if (!resolver.shouldRedirectToIndex) {
      return next()
    } else {
      ctx.url = "/index.html"
      ctx.type = "html"
      ctx.status = 200
      ctx.body = readFileSync(join(strapi.dirs.static.public, `index.html`))
    }
  }
