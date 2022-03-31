import * as path from 'path'

export default [
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: false,
    },
  },
  'strapi::cors',
  'strapi::logger',
  'strapi::query',
  'strapi::session',
  'strapi::body',
  'strapi::public',
  { name: 'strapi::favicon', config: { path: path.join(__dirname, '..', 'public', 'favicon.ico') } },
]
