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
  upload: {
    provider: 'aws-s3',
    providerOptions: {
      accessKeyId: env('AWS_ACCESS_KEY_ID'),
      secretAccessKey: env('AWS_ACCESS_SECRET'),
      region: env('AWS_REGION', 'fra1'),
      endpoint: env('AWS_S3_ENDPOINT', `fra1.digitaloceanspaces.com`),
      params: {
        Bucket: env('AWS_BUCKET', 'bn-dev/app/uploads'),
      },
    },
  },
  email: {
    provider: 'mailgun',
    providerOptions: {
      apiKey: env('MAILGUN_API_KEY'),
      domain: env('MAILGUN_DOMAIN'),
      host: env('MAILGUN_HOST', 'api.eu.mailgun.net'),
    },
    settings: {
      defaultFrom: env('MAILGUN_MAIL_FROM', 'dev@bndigital.co'),
      defaultReplyTo: env('MAILGUN_MAIL_TO', 'dev@bndigital.co'),
    },
  },
})
