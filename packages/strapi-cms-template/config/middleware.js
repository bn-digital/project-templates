module.exports = {
  settings: {
    cors: {
      enabled: process.env.NODE_ENV === 'production',
      origin: ['*'],
      headers: ['*'],
    },
    cache: { enabled: true },
    poweredBy: { enabled: false },
    responseTime: { enabled: false },
  },
}
