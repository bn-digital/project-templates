type LogLevel = 'info' | 'warn' | 'error'
type EnvVar<T = string | number | null | boolean | Array<string>> = T
type EnvFunction = <T = EnvVar>(key: string, defaultValue?: T) => T

type TypedEnvFunction = {
  int(key: string, defaultValue?: number): number
  bool(key: string, defaultValue?: boolean): boolean
  array(key: string, defaultValue?: string[]): string[]
}

declare global {
  import { StrapiInterface } from '@strapi/strapi'

  interface Strapi extends StrapiInterface {
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
}

declare const strapi: Strapi
