import { extendSchema } from './graphql'
import app, { appInfo, exportConfigs, generateTypeDefinitions, importConfigs } from './hooks'

export default {
  register({ strapi }: Global) {
    appInfo({ ...app, database: strapi.config.database.connection.client })
    extendSchema(strapi)
  },

  bootstrap({ strapi }: Global) {
    generateTypeDefinitions(strapi)
    process.env.NODE_ENV !== 'production' ? exportConfigs(strapi) : importConfigs(strapi)
  },
} as Strapi.Strapi
