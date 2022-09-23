namespace Strapi {
  namespace Graphql {
    import { default as Nexus, PluginConfig, FieldResolver, core } from 'nexus'
    import { ParameterizedContext } from 'koa'
    import { HandlerConfig } from '@strapi/strapi/lib/types/factories'

    type CRUDAction = 'create' | 'find' | 'findOne' | 'update' | 'delete'

    type Plugin = { service<T = any>(name: 'extension' | 'content-api' | 'type-registry'): T }

    type ResolverContext = ParameterizedContext<Strapi.UsersPermissions.AuthContext>

    type ResolverConfig = { [key: string]: Partial<HandlerConfig> }

    interface SchemaExtension {
      types: ReturnType<typeof Nexus.objectType>[]
      typeDefs?: string
      resolvers?: { [key: string]: { [key: string]: FieldResolver } }
      resolversConfig?: ResolverConfig
      plugins?: PluginConfig
    }

    type ExtensionCallback = ({ nexus }: { nexus: typeof Nexus }) => SchemaExtension

    interface ExtensionService {
      use(schemaExtensionCallback: ExtensionCallback): void

      shadowCRUD(entityName: EntityUID): {
        field(name: string): {
          disable(): void
          disableFilters(): void
          disableInput(): void
          disableOutput(): void
          isEnabled(): boolean
          isDisabled(): boolean
        }
        isEnabled(): boolean
        isDisabled(): boolean
        disableMutations()
        disableQueries()
        disableAction(action: CRUDAction)
        disableActions(action: CRUDAction[])
        disable()
      }
    }

    interface ContentApiService {
      buildSchema(): core.NexusGraphQLSchema
    }
  }
}
