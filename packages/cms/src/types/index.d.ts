interface ProcessEnv {
  APP_NAME: string
  APP_ENV: "development" | "staging" | "production"
  DOMAIN: string
  APP_VERSION: string
  DATABASE_CLIENT: Database.Client
  NODE_ENV: "development" | "production"
}
declare global {
  declare namespace Strapi {}
  const strapi: Strapi.Strapi
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
}
interface Global {
  strapi: Strapi.StrapiInterface & Strapi.Strapi
}
