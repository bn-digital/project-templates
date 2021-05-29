module.exports = {
  settings: {
    cors: {
      enabled: process.env.NODE_ENV === 'production',
      origin: [
        '*',
        'http://localhost:3000',
      ],
    },
    poweredBy: { enabled: false },
    responseTime: { enabled: false },
  },
}
