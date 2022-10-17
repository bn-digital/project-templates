interface AppEnv extends ImportMetaEnv {
  readonly WEBSITE_SENTRY_DSN: string
  readonly WEBSITE_API_URL: string
  readonly WEBSITE_MARKER_ID: string
  readonly DEV: boolean
  readonly PROD: boolean
}

interface ImportMeta {
  readonly env: AppEnv
}
