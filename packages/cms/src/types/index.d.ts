/// <reference types="@bn-digital/strapi-types" />
/// <reference types="@bn-digital/strapi-plugin-email-emitter" />

namespace App {
  type PluginUIDs = 'users-permissions' | 'email-emitter' | 'graphql' | 'email' | 'upload'

  namespace Entities {
    type Contact = {
      id: string
    }
  }
}

declare const strapi: Omit<Strapi.Strapi, keyof StrapiExtension> & StrapiExtension
