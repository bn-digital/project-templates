namespace Strapi {
  import { GenericService } from '@strapi/strapi/lib'
  type Env = { env: EnvFunction & TypedEnvFunction }

  namespace Db {
    type Client = 'sqlite' | 'postgres' | 'mysql'
  }

  namespace ConfigSync {
    type Plugin = {
      service<T>(name: 'main'): T
    }
    type MainService = {
      importAllConfig(): void
      exportAllConfig(): void
    }
  }

  namespace TypeScript {
    type Generator = {
      generateSchemasDefinitions(options: { strapi: Strapi.Strapi; outDir?: string; file?: string }): Promise<void>
    }
  }

  namespace Graphql {
    import { default as Nexus, FieldResolver, core } from 'nexus'
    import { ParameterizedContext } from 'koa'

    type Plugin = { service<T = any>(name: 'extension' | 'content-api' | 'type-registry'): T }
    type ResolverContext = ParameterizedContext<Strapi.UsersPermissions.AuthContext>

    interface SchemaExtension {
      types: ReturnType<typeof core.objectType>[]
      resolvers?: { [key: string]: { [key: string]: FieldResolver } }
    }

    type ExtensionCallback = ({ nexus }: { nexus: typeof Nexus }) => Strapi.Graphql.SchemaExtension

    type ExtensionService = GenericService & {
      use(schemaExtensionCallback: ExtensionCallback): void
      shadowCRUD(entityName: EntityUID): {
        disableMutations()
        disableQueries()
        disable()
      }
    }
    type ContentApiService = { buildSchema(): core.NexusGraphQLSchema }
    type TypeRegistryService = { new: () => { types: any[] } }
  }

  namespace UsersPermissions {
    type UserEntity = {
      id: string
      username: string
      email: string
      resetPasswordToken?: string
      password?: string
    }
    type ChangePasswordPayload = {
      oldPassword: string
      newPassword: string
    }
    type AuthContext = { user: UserEntity }
    type UserService = GenericService & {
      validatePassword(hash: string, newPassword: string): Promise<boolean>
      edit(id: string, params: Partial<UserEntity>): Promise<any>
      fetch(id: string, params?: { populate?: (keyof UserEntity | string)[] | string }): Promise<UserEntity | null>
    }
  }

  type PluginsConfig = { [key: string]: Partial<{ enabled: boolean; resolve: string; config: Record<string, unknown> }> }
}
