module.exports = {
  settings: {
    cors: {
      enabled: process.env.NODE_ENV === 'production',
    },
    poweredBy: { enabled: false },
    responseTime: {
      enabled: false,
    },
  },
}
