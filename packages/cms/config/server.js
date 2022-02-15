const tasks = require('./cron')

module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  admin: { autoOpen: false },
  cron: {
    enabled: true,
    tasks,
  },
  app: {
    keys: env.array('SESSION_KEY', ['c8daa387-fd1a-495f-ab66-285f37cc5c8a']),
  },
})
