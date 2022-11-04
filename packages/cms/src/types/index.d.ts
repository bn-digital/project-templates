namespace App {
  type PluginUIDs = 'users-permissions' | 'email-emitter' | 'graphql' | 'email' | 'upload'
}

declare const strapi: Omit<Strapi.Strapi, keyof StrapiExtension> & StrapiExtension
