import { extendSchema, generateSchema } from './graphql'
import { appInfo } from './hooks'
import { exportConfigs, importConfigs } from './hooks/config-sync'
import { generateTypeDefinitions } from './hooks/typescript'

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
} as Global['strapi']
