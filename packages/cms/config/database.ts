/* eslint-disable */
import path from 'path'
import app from '../src/hooks'
import { Knex } from 'knex'

/**
 *
 * @param {(key: string, defaultValue?: string)=> string} env
 */
export default ({ env }: Strapi.Env): Strapi.Database.Config => {
  const client = env<Strapi.Database.Client>('DATABASE_CLIENT', 'sqlite')
  const connection: Knex.Sqlite3ConnectionConfig | Knex.StaticConnectionConfig =
    client === 'sqlite'
      ? {
          filename: path.join(app.workingDir, env<string>('DATABASE_FILENAME', path.join('database', 'data.sqlite'))),
        }
      : {
          charset: 'utf8',
          user: env('DATABASE_USERNAME', 'postgres'),
          password: env('DATABASE_PASSWORD', ''),
          database: env('DATABASE_NAME', app.name),
          ssl: env.bool('DATABASE_SSL', false),
          host: env('DATABASE_HOST', 'localhost'),
          port: env.int('DATABASE_PORT', 5432),
          decimalNumbers: true,
        }
  return {
    connection: {
      client,
      connection,
      useNullAsDefault: true,
    },
  }
}
