declare namespace Strapi {
  import { GraphQLFieldResolver, GraphQLSchema } from 'graphql'

  namespace Db {
    type Client = 'sqlite' | 'pg' | 'postgres' | 'postgresql' | 'mysql'
  }

  namespace Graphql {
    type Plugin = { service<T = any>(name: 'extension' | 'content-api'): T }
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
