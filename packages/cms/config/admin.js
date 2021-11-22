module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'c8c036c43da279fccb02af9ef8b0ad97'),
  },
})