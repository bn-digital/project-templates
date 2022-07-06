export default ({ env }: Strapi.Env) => [
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],
          'img-src': [
            "'self'",
            'data:',
            'blob:',
            `https://${env('S3_BUCKET')}.s3.amazonaws.com`,
            env('S3_ENDPOINT', `https://${env('S3_REGION')}.digitaloceanspaces.com`),
          ],
          'media-src': [
            "'self'",
            'data:',
            'blob:',
            `https://${env('S3_BUCKET')}.s3.amazonaws.com`,
            env('S3_ENDPOINT', `https://${env('S3_REGION')}.digitaloceanspaces.com`),
          ],
          'upgradeInsecureRequests': null,
        },
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
