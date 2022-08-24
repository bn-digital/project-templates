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
}

const strapi: Strapi

interface Global {
  strapi: Strapi
}
