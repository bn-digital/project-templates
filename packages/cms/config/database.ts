import { Knex } from 'knex'

import app, { resolvePath } from '../src/hooks'
/**
 *
 * @param {(key: string, defaultValue?: string)=> string} env
 */
export default ({ env }: Strapi.Env): Strapi.Database.Config => {
  const client = env<Strapi.Database.Client>('DATABASE_CLIENT', 'sqlite')
  const connection: Knex.Sqlite3ConnectionConfig | Knex.StaticConnectionConfig =
    client === 'sqlite'
      ? ({
          options: {
            nativeBinding: resolvePath('node_modules', 'better-sqlite3', 'lib'),
          },
          filename: resolvePath(...(env<string>('DATABASE_FILENAME') ?? ['database', 'data.sqlite'])),
        } as Knex.Sqlite3ConnectionConfig)
      : {
          charset: 'utf8',

          ssl: env.bool('DATABASE_SSL', false),
          decimalNumbers: true,
          ...(env('DATABASE_URL')
            ? { connectionString: env('DATABASE_URL') }
            : {
                user: env('DATABASE_USERNAME', 'postgres'),
                password: env('DATABASE_PASSWORD', ''),
                database: env('DATABASE_NAME', app.name),
                host: env('DATABASE_HOST', 'localhost'),
                port: env.int('DATABASE_PORT', 5432),
              }),
        }
  return {
    connection: {
      client,
      connection,
      useNullAsDefault: true,
    },
  }
}
