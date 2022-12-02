import { extendSchema } from './graphql'
import { appInfo, exportConfigs, generateTypeDefinitions, importConfigs } from './hooks'

export default {
  register({ strapi }: Global) {
    appInfo(strapi)
    extendSchema(strapi)
  },

  bootstrap({ strapi }: Global) {
    if (process.env.STRAPI_GENERATE_TYPES) generateTypeDefinitions(strapi)
    process.env.NODE_ENV !== 'production' ? exportConfigs(strapi) : importConfigs(strapi)
  },
} as Strapi.Strapi
