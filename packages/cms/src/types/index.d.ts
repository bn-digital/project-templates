import { Context, Middleware } from 'koa'
declare module '@strapi/typescript-utils'

declare global {
  export namespace Strapi {
    import { type Context, type Middleware } from 'koa'

    namespace Middleware {
      type CspDirective = 'default-src' | 'script-src' | 'style-src' | 'connect-src' | 'img-src' | 'frame-src'

      type UIDs = `strapi::${string}` | `global::${string}` | `plugin::${string}.${string}`

      type Definition<ID = UIDs, T = unknown> = { config?: T; name: ID } | Middleware<Context> | ID
    }
    namespace App {
      type Metadata = {
        name: string
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
