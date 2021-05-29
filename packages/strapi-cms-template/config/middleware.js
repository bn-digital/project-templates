module.exports = {
  settings: {
    cors: {
      enabled: process.env.NODE_ENV === 'production',
      origin: [
        'http://localhost:3000',
        'http://localhost:4000',
        'http://localhost:8000',
        'http://localhost:1337',
        'http://localhost:1337/',
        'https://026b406c7dfe.ngrok.io',
        'https://bndigital.bndigital.dev',
        'https://projector.bndigital.dev',
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
