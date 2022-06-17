type LogLevel = 'info' | 'warn' | 'error'
type EnvVar<T = string | number | null | boolean | Array<string>> = T
type EnvFunction = <T = EnvVar>(key: string, defaultValue?: T) => T

type TypedEnvFunction = EnvFunction & {
  int(key: string, defaultValue?: number): number
  bool(key: string, defaultValue?: boolean): boolean
  array(key: string, defaultValue?: string[]): string[]
}

declare global {
  import { StrapiInterface } from '@strapi/strapi'

  interface Strapi extends StrapiInterface {
    fs: {
      writeAppFile(path: string, content: Buffer | string): void
    }
    log: {
      [key in LogLevel]: (...args: string[]) => void
    }
  }
}

declare const strapi: Strapi
