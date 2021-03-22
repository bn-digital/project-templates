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
    provider: env('NODE_ENV', 'development') === 'development' ? 'local' : 'aws-s3',
    providerOptions:
      process.env.NODE_ENV === 'development'
        ? {}
        : {
            accessKeyId: env('AWS_ACCESS_KEY_ID'),
            secretAccessKey: env('AWS_ACCESS_SECRET'),
            region: env('AWS_REGION'),
            endpoint: env('AWS_S3_ENDPOINT'),
            params: {
              Bucket: env('AWS_BUCKET'),
            },
          },
  },
  email: process.env.MAIL_PROVIDER
    ? {
        provider: 'mailgun',
        providerOptions: {
          apiKey: env('MAILGUN_API_KEY'),
          domain: env('MAILGUN_DOMAIN'),
          host: env('MAILGUN_HOST', 'api.eu.mailgun.net'), //Optional. If domain region is Europe use 'api.eu.mailgun.net'
        },
        settings: {
          defaultFrom: 'info@bndigital.co',
          defaultReplyTo: env('MAILGUN_MAIL_TO', 'info@bndigital.co'),
        },
      }
    : {},
})
