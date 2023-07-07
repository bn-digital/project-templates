declare module "@strapi/typescript-utils" {
  export const generators: {
    generate: (config: {
      strapi: StrapiGlobal["strapi"]
      pwd: string
      rootDir?: string
      artifacts?: { contentTypes?: boolean; components?: boolean }
    }) => Promise<void>
  }
}

declare namespace App {
  type Mode = "development" | "staging" | "production" | "test"
  type Env = {
    mode: Mode
    development: boolean
    production: boolean
    testing: boolean
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

declare interface StrapiGlobal {
  strapi: Omit<Global["strapi"], keyof Strapi.Strapi> & Strapi.Strapi
}
