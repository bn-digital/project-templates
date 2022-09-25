import { extendSchema, generateSchema } from './graphql'
import { appInfo, exportConfigs, generateTypeDefinitions, importConfigs } from './hooks'

export default {
  register({ strapi }: Global) {
    appInfo(strapi)
    extendSchema(strapi)
  },

  bootstrap({ strapi }: Global) {
    if (process.env.NODE_ENV !== 'production') {
      generateSchema(strapi)
      generateTypeDefinitions(strapi)
      exportConfigs(strapi)
    } else {
      importConfigs(strapi)
    }
  },
} as Strapi.Strapi
