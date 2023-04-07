interface ProcessEnv {
  APP_NAME: string
  APP_ENV: "development" | "staging" | "production"
  DOMAIN: string
  APP_VERSION: string
  DATABASE_CLIENT: Strapi.Database.Client
  NODE_ENV: "development" | "production"
}
declare global {
  namespace Strapi {
    import { Strapi, StrapiDirectories } from "@strapi/strapi"
    import koa from "koa"

    interface StrapiInterface extends Strapi {
      app: koa.Application
      dirs: StrapiDirectories
    }
  }
}
namespace App {
  type Mode = "development" | "staging" | "production"
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
    database?: "sqlite" | "postgres" | "mysql"
  } & { [key: string]: unknown }

  type PluginUIDs = "users-permissions" | "graphql" | "email" | "import-export-entries" | "upload" | string

  type PluginConfig<T = any> = {
    enabled: boolean
    resolve?: string
    config?: T
  }

  type PluginConfiguration<ID extends PluginUIDs = PluginUIDs> = {
    [key in ID]: PluginConfig
  }
}
