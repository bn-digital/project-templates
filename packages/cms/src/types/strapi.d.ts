namespace Strapi {
  type App = { strapi: Strapi }
  type Env = { env: EnvFunction & TypedEnvFunction }

  namespace Db {
    type Client = 'sqlite' | 'pg' | 'postgres' | 'postgresql' | 'mysql'
  }

  namespace Graphql {
    import { FieldResolver, core } from 'nexus'

    type Plugin = { service<T = any>(name: 'extension' | 'content-api' | 'type-registry'): T }

    interface SchemaExtension {
      resolvers?: { [key: string]: { [key: string]: FieldResolver } }
    }

    type ExtensionService = {
      use(schemaExtensionCallback: () => any): void
      shadowCRUD(entityName: AllTypes): {
        disableMutations()
        disableQueries()
        disable()
      }
    }
    type ContentApiService = { buildSchema(): core.NexusGraphQLSchema }
    type TypeRegistryService = { new: () => { types: any[] } }
  }
  type PluginsConfig = { [key: string]: Partial<{ enabled: boolean; resolve: string; config: Record<string, unknown> }> }
}
