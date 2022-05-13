import * as path from 'path'

export default [
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        defaults: true,
        dangerouslyDisableDefaultSrc: true,
      },
    },
  },
  'strapi::cors',
  'strapi::logger',
  'strapi::query',
  'strapi::session',
  'strapi::body',
  'strapi::public',
  'strapi::favicon',
]
