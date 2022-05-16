type EnvVar<T = string | number | null | boolean | Array<string>> = T
type TypedEnvFunction = {
  int(key: string, defaultValue?: number): number
  bool(key: string, defaultValue?: boolean): boolean
  array(key: string, defaultValue?: string[]): string[]
}
type EnvFunction = <T = EnvVar>(key: string, defaultValue?: T) => T

declare namespace Strapi {
  import { Strapi as StrapiInterface } from '@strapi/strapi'
  import { IStrapi } from 'strapi-typed'
  import { PathLike } from 'fs'

  namespace Db {
    type CLient = 'sqlite' | 'pg' | 'postgres' | 'postgresql' | 'mysql'
  }

  type Strapi = StrapiInterface &
    IStrapi & {
      fs: {
        writeAppFile(path: string | PathLike, content: Buffer | string): void
      }
      log: {
        info(...args: string[]): void
      }
    }
  type PluginsConfig = { [key: string]: Partial<{ enabled: boolean; resolve: string; config: Record<string, unknown> }> }
}

declare global {
  const strapi: Strapi.Strapi
}
