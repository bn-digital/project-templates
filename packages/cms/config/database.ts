import { Knex } from "knex"

import app, { workdirResolve } from "../src/hooks"

export default ({ env }: Strapi.Env): Knex.Config => {
  const client = env("DATABASE_CLIENT", "sqlite")
  const config: Knex.Config =
    client === "sqlite"
      ? {
          connection: {
            filename: workdirResolve(
              ...(env<string>("DATABASE_FILENAME") ?? ["database", `${env("NODE_ENV")}.sqlite`])
            ),
          },
          jsonbSupport: true,
          useNullAsDefault: true,
        }
      : {
          connection: {
            ssl: env.bool("DATABASE_SSL", false),
            ...(env("DATABASE_URL", "")
              ? { connectionString: env("DATABASE_URL") }
              : {
                  user: env("DATABASE_USERNAME", "postgres"),
                  password: env("DATABASE_PASSWORD", "password"),
                  database: env("DATABASE_NAME", env("APP_NAME", app.name)),
                  host: env("DATABASE_HOST", "database"),
                  port: env.int("DATABASE_PORT", 5432),
                }),
          },
        }
  return { connection: { client, ...config } }
}
