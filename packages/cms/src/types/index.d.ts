import '@bn-digital/strapi-types'
declare global {
  export namespace Strapi {
    import { type Context, type Middleware } from 'koa'

    interface Route {
      methods: string[]
      opts: { ignoreCaptures: boolean; prefix?: string }
      path: string
    }

    interface Server {
      listRoutes(): Route[]
    }

    namespace Middleware {
      type CspDirectiveType = 'default-src' | 'script-src' | 'style-src' | 'connect-src' | 'img-src' | 'frame-src'
      type CspDirectives = { [key in CspDirectiveType]: string[] }
      type UIDs = `strapi::${string}` | `global::${string}` | `plugin::${string}.${string}`

      type Definition<ID = UIDs, T = unknown> = { config?: T; name: ID } | Middleware<Context> | ID
    }

    namespace App {
      type Mode = 'development' | 'staging' | 'production'
      type Env = {
        mode: Mode
        isDev(): boolean
        isProd(): boolean
        isTest(): boolean
      }
      type Metadata = {
        name: string
        env: Env
        workingDir: string
        version: string
        domain: string
        dnsZone: string
        database?: 'sqlite' | 'postgres' | 'mysql'
      } & { [key: string]: any }

      type Properties<T = unknown> = {}

      type PluginUIDs = 'users-permissions' | 'graphql' | 'email' | 'import-export-entries' | 'upload' | string
      type PluginConfig<T = any> = {
        enabled: boolean
        resolve?: string
        config?: T
      }

      type PluginConfiguration<ID extends PluginUIDs = PluginUIDs> = {
        [key in ID]: PluginConfig
      }

      const strapi: Omit<Strapi.Strapi, keyof StrapiExtension> & StrapiExtension
    }
  }
}
