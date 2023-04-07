import { extendSchema } from "./graphql"
import { default as app, appInfo, generateTypeDefinitions } from "./hooks"

export default {
  register({ strapi }: Global) {
    appInfo(strapi)
    extendSchema(strapi)
  },

  bootstrap({ strapi }: Global) {
    app.env.isDev() && generateTypeDefinitions(strapi)
  },
}
