import { Knex } from "knex"

import * as process from "process"
import app, { resolvePath } from "../src/hooks"

export default ({ env }: Strapi.Env): Knex.Config => {
  const client = env("DATABASE_CLIENT", "sqlite") ?? "sqlite"
  const config: Knex.Config =
    client === "sqlite"
      ? {
          connection: {
            filename: resolvePath(
              ...(env<string>("DATABASE_FILENAME") ?? ["database", `${process.env.NODE_ENV}.sqlite`])
            ),
          },
          useNullAsDefault: true,
        }
      : {
          jsonbSupport: client === "postgres",
          connection: {
            charset: "utf8",
            ssl: env.bool("DATABASE_SSL", false),
            decimalNumbers: true,
            parseJSON: true,
            options: { useUTC: true },
            supportBigNumbers: true,
            compress: true,
            ...(env("DATABASE_URL")
              ? { connectionString: env("DATABASE_URL") }
              : {
                  user: env("DATABASE_USERNAME", "postgres"),
                  password: env("DATABASE_PASSWORD", ""),
                  database: env("DATABASE_NAME", app.name),
                  host: env("DATABASE_HOST", "localhost"),
                  port: env.int("DATABASE_PORT", 5432),
                }),
          },
          pool: { min: env.int("DATABASE_POOL_MIN", 2), max: env.int("DATABASE_POOL_MAX", 10) },
        }
  return { connection: { client, ...config } }
}
