export default ({ env }: Strapi.Env) => {
  const bucket = env('S3_BUCKET', 'bn-dev')
  const region = env('S3_REGION', 'fra1')
  return [
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
              `https://dl.airtable.com`,
              `https://${bucket}.s3.amazonaws.com`,
              `https://${bucket}.${region}.digitaloceanspaces.com`,
            ],
            'media-src': [
              "'self'",
              'data:',
              'blob:',
              `https://dl.airtable.com`,
              `https://${bucket}.s3.amazonaws.com`,
              `https://${bucket}.${region}.digitaloceanspaces.com`,
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
}
