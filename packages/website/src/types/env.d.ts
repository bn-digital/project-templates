interface AppEnv extends ImportMetaEnv {
  readonly WEBSITE_SENTRY_DSN: string
  readonly WEBSITE_TUNNEL_URL: string
  readonly WEBSITE_MARKER_ID: string
}

interface ImportMeta {
  readonly env: AppEnv
}
