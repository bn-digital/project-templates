import tasks from "../config/cron"
import { randomSecret } from "../src/hooks"

export default ({ env }: Strapi.Env): Config.Server => {
  const host = env("HOST", "127.0.0.1")
  const port = env.int("PORT", 1337)
  return {
    host,
    port,
    admin: { autoOpen: false },
    cron: {
      enabled: Object.entries(tasks).length > 0,
      tasks,
    },
    app: {
      keys: env.array<string>("APP_KEYS", [randomSecret("APP_KEYS")]),
    },
  }
}
