namespace Strapi {
  import { CollectionTypeService } from '@strapi/strapi/lib/core-api/service'
  import {} from '@strapi/strapi/lib/types'

  type Env = { env: EnvFunction & TypedEnvFunction }

  type LogLevel = 'info' | 'warn' | 'error'

  type Primitive = string | number | null | boolean | unknown

  type EnvVar<T = Primitive> = T

  type EnvFunction = <T = EnvVar>(key: string, defaultValue?: T) => T

  type TypedEnvFunction = Partial<{
    int(key: string, defaultValue?: number): number
    date(key: string, defaultValue?: Date): number
    float(key: number, defaultValue?: number): number
    bool(key: string, defaultValue?: boolean): boolean
    array<T = EnvVar>(key: string, defaultValue?: T[]): T[]
    json<T = { [key: string]: any }>(key: string, defaultValue?: T): T
  }>

  type EntityUID = Strapi.SingleTypeUIDs | Strapi.CollectionTypeUIDs

  type Context = {
    state: Strapi.UsersPermissions.AuthContext
    args: any
  }
  type Config = {
    server: Strapi.ServerConfig
    admin: Strapi.AdminConfig
    database: Strapi.Database.Config
    api: Strapi.ApiConfig
    get(path: string): any
  }
  type ServerConfig = {
    host: string
    port: number
    proxy?: boolean
    cron?: { enabled: boolean; tasks: { [key: string]: unknown } }
    admin?: { autoOpen?: boolean }
    dirs?: { public?: string }
    url?: string
    app: { keys: string[] }
  }
  type AdminConfig = {
    auth: { secret: string }
    apiToken: { salt: string }
    watchIgnoreFiles?: string[]
    forgotPassword?: {
      from: string
      replyTo: string
      emailTemplate: unknown
    }
    url?: string
    path?: string
  }
  type ApiConfig = {
    rest: {
      prefix: string
      defaultLimit: number
      maxLimit: null
      withCount: boolean
    }
  }
  type Service = CollectionTypeService

  type PluginsConfig = { [key: string]: Partial<{ enabled: boolean; resolve: string; config: Record<string, unknown> }> }
}
