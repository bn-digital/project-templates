const name = require('./name')
const path = require('path')

module.exports = ({env}) => ({
  connection: {
    client: 'sqlite',
    connection: {
      filename: path.join(__dirname, '..', '.tmp', `db.sqlite3`),
      user: env('DATABASE_USERNAME', 'postgres'),
      password: env('DATABASE_PASSWORD'),
      host: env('DATABASE_HOST', 'postgresql'),
      port: env('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', name),
    },
    pool: {min: 0, max: 7},
    acquireConnectionTimeout: 10000,
    useNullAsDefault: true,
  },
})