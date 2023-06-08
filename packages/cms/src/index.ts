import { extendSchema } from "./graphql"

import app, { generateTypeDefinitions } from "./hooks"

export default {
  register({ strapi }: StrapiGlobal): void {
    strapi.config.set("app", app)
    extendSchema(strapi)
  },

  bootstrap({ strapi }: StrapiGlobal): void {
    strapi.log.info(`[app] Production domain: ${strapi.config.get("app.domain")}`)
    strapi.log.info(`[app] Application: ${strapi.config.get("app.name")}, version: ${strapi.config.get("app.version")}`)
    strapi.log.info(`[app] Database Engine: ${strapi.config.get("database.connection.client")}`)
    strapi.config.get("app.env.development") && generateTypeDefinitions(strapi)
  },
}
