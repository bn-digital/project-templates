module.exports = ({ env }) => ({
  graphql: {
    endpoint: '/graphql',
    shadowCRUD: true,
    playgroundAlways: env('NODE_ENV', 'development') === 'development',
    depthLimit: 7,
    amountLimit: 100,
    apolloServer: {
      tracing: env('NODE_ENV', 'development') === 'development',
    },
  },
  sentry: {
    dsn: env('SENTRY_DSN'),
    sendMetadata: true,
    init: {},
  },
  upload: {
    provider: 'aws-s3',
    providerOptions: {
      accessKeyId: env('S3_ACCESS_KEY_ID'),
      secretAccessKey: env('S3_SECRET_ACCESS_KEY'),
      region: env('S3_REGION', 'fra1'),
      endpoint: env('S3_ENDPOINT', `fra1.digitaloceanspaces.com`),
      params: {
        Bucket: `${env('S3_BUCKET', 'bn-dev/app')}/uploads`,
      },
    },
  },
  email: {
    provider: 'mailgun',
    providerOptions: {
      apiKey: env('MAILGUN_API_KEY'),
      domain: env('MAILGUN_DOMAIN', 'mg.bndigital.dev'),
      host: env('MAILGUN_HOST', 'api.eu.mailgun.net'),
    },
    settings: {
      defaultFrom: env('MAILGUN_MAIL_FROM', `support@${env('MAILGUN_DOMAIN', 'mg.bndigital.dev')}`),
      defaultReplyTo: env('MAILGUN_MAIL_TO', `no-reply@${env('MAILGUN_DOMAIN', 'mg.bndigital.dev')}`),
    },
  },
})
