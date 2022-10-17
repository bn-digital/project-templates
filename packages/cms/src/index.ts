import { extendSchema } from './graphql'
import { appInfo, exportConfigs, generateTypeDefinitions, importConfigs } from './hooks'

export default {
  register({ strapi }: Global) {
    appInfo(strapi)
    extendSchema(strapi)
  },

  bootstrap({ strapi }: Global) {
    // TODO: Temporary disabled as regression since v4.4.3
    const isStrapiTsIssueFixed = false
    if (process.env.NODE_ENV !== 'production') {
      if (isStrapiTsIssueFixed) {
        generateTypeDefinitions(strapi)
      }
      exportConfigs(strapi)
    } else {
      importConfigs(strapi)
    }
  },
} as Strapi.Strapi
