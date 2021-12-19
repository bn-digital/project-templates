import type { Strapi as BaseStrapi } from '@strapi/strapi'

declare global {
  export interface Strapi extends BaseStrapi {
    fs: {
      writeAppFile(path: string, content: string): void
    }

    plugin(uid: string): Strapi.Plugin

    log: {
      info(value: string): void
      warning(value: string): void
      error(value: string): void
    }
  }

  declare namespace Strapi {
    type Service =
      | {
          find(params: Record<string, any>): any
        }
      | {
          buildSchema(): any
        }
    type Plugin = {
      service(uid: string): Strapi.Service
    }
  }
}
