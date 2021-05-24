module.exports = {
  settings: {
    cors: {
      enabled: process.env.NODE_ENV === 'production',
      origin: [
        'http://localhost:3000',
        'http://localhost:1337',
        'https://projector.bndigital.co',
        'https://bndigital.co',
        'https://www.bndigital.co',
        'https://bndigital.dev',
      ],
    },
    poweredBy: { enabled: false },
    responseTime: { enabled: false },
  },
}
