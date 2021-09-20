type Context = {
  params: Record<string, unknown>
}

type Service = {
  find<T = Record<string, unknown>>(params: T): Promise<T>
  findOne<T = Record<string, unknown>>(params: T): Promise<T>
  update<T = Record<string, unknown>>(params: T, entity: T): Promise<T>
  create<T = Record<string, unknown>>(entity: T): Promise<T>
}

type JwtService = {
  issue({ id }: { id: string }): string
}

type UserService = {
  edit<T = Record<string, unknown>>(params: T, entity: T): Promise<T>
  add<T = Record<string, unknown>>(entity: T): Promise<T>
  fetch<T = Record<string, unknown>>(params: T): Promise<T>
  providerLogin<T = Record<string, unknown>>({ username, password }: { username: string; password: string }): Promise<T>
}

type Model = { attributes: Record<string, unknown> }

type Strapi = {
  config: {
    hook: {
      settings: Hooks.Settings
    }
  }
  hook: Record<string, unknown>
  models: { [key: string]: Model }
  services: { [key: string]: Service } & { jwt: JwtService; user: UserService }
}

declare namespace Hooks {
  type Settings = Record<string, unknown> & {
    enabled: true
  }
}

declare namespace global {
  const strapi: Strapi
}
