import { extendSchema } from './graphql'
import { appInfo, generateTypeDefinitions } from './hooks'

export default {
  register({ strapi }: Global) {
    appInfo(strapi)
    extendSchema(strapi)
  },

  bootstrap({ strapi }: Global) {
    generateTypeDefinitions(strapi)
  },
} as Strapi.Strapi
