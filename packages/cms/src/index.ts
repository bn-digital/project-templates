import { name } from '../config'
import { extendSchema, generateSchema } from './graphql'
import { exportConfigs, importConfigs } from './helpers/config-sync'
import { generateTypeDefinitions } from './helpers/typescript'

export default {
  register({ strapi }: Global) {
    strapi.log.info(`[app] Project name resolved as ${name}`)
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
