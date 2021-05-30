module.exports = {
  settings: {
    cors: {
      enabled: process.env.NODE_ENV === 'production',
      origin: ['*'],
      headers: ['*'],
    },
    poweredBy: { enabled: false },
    responseTime: { enabled: false },
  },
}
