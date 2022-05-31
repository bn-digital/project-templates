type EnvVar<T = string | number | null | boolean | Array<string>> = T
type TypedEnvFunction = {
  int(key: string, defaultValue?: number): number
  bool(key: string, defaultValue?: boolean): boolean
  array(key: string, defaultValue?: string[]): string[]
}
type EnvFunction = <T = EnvVar>(key: string, defaultValue?: T) => T

declare namespace Strapi {
  import { Strapi as StrapiInterface } from '@strapi/strapi'
  import { PathLike } from 'fs'

  namespace Db {
    type Client = 'sqlite' | 'pg' | 'postgres' | 'postgresql' | 'mysql'
  }

  type LogLevel = 'info' | 'warn' | 'error'
  type Strapi = StrapiInterface & {
    fs: {
      writeAppFile(path: string | PathLike, content: Buffer | string): void
    }
    log: {
      [key in LogLevel]: (...args: string[]) => void
    }
  }
  namespace GraphqlPlugin {
    import type { GraphQLSchema, GraphQLFieldResolver } from 'graphql'
    type SchemaExtension = () => { resolvers: { [key: string]: { [key: string]: GraphQLFieldResolver<unknown, unknown> } } }
    type ExtensionService = {
      use(schemaExtension: SchemaExtension): void
      shadowCRUD(entityName: AllTypes): {
        disableMutations()
        disableQueries()
        disable()
      }
    }
    type ContentApiService = { buildSchema(): GraphQLSchema }
  }
  type PluginsConfig = { [key: string]: Partial<{ enabled: boolean; resolve: string; config: Record<string, unknown> }> }
}

declare const strapi: Strapi.Strapi
