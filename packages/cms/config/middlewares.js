module.exports = () => [
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
  'strapi::ip',
  'strapi::body',
  'strapi::favicon',
  'strapi::public',
]
