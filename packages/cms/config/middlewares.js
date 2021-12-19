const securePolicies = env => [
  "'self'",
  'data:',
  'blob:',
  `${env('S3_REGION', 'fra1')}.digitaloceanspaces.com`,
  `${env('S3_BUCKET', 'bn-dev')}.${env('S3_REGION', 'fra1')}.digitaloceanspaces.com`,
]

module.exports = ({ env }) => [
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],
          'script-src': ["'self'", 'strapi.io', "'unsafe-inline'", 'cdn.jsdelivr.net'],
          'img-src': securePolicies(env),
          'media-src': securePolicies(env),
          'no-referrer': null,
          'upgradeInsecureRequests': null,
        },
      },
    },
  },
  'strapi::cors',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::favicon',
  'strapi::public',
]