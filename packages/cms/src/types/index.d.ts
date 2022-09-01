type LogLevel = 'info' | 'warn' | 'error'
type Primitive = string | number | null | boolean
type EnvVar<T = Primitive> = T
type EnvFunction = <T = EnvVar>(key: string, defaultValue?: T) => T
type TypedEnvFunction = Partial<{
  int(key: string, defaultValue?: number): number
  date(key: string, defaultValue?: Date): number
  float(key: number, defaultValue?: number): number
  bool(key: string, defaultValue?: boolean): boolean
  array<T = EnvVar>(key: string, defaultValue?: T[]): T[]
  json<T = { [key: string]: any }>(key: string, defaultValue?: T): T
}>
type CustomField = {
  name: string
  plugin: string
  type: string
}
type EntityUID = Strapi.SingleTypeUIDs | Strapi.CollectionTypeUIDs

interface Strapi extends Omit<Strapi.Strapi, 'fs' | 'log'> {
  fs: {
    appendFile(path: string, content: Buffer | string): void
    removeAppFile(path: string): void
    writePluginFile(path: string, content: Buffer | string): void
    writeAppFile(path: string, content: Buffer | string): void
  }
  log: {
    [key in LogLevel]: (...args: unknown[]) => void
  }
  customFields: {
    register(customField: CustomField): void
  }
}

const strapi: Strapi

interface Global {
  strapi: Strapi
}
