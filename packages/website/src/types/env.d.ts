declare interface ImportMetaEnv {
  readonly WEBSITE_API_URL?: string
}

interface ProcessEnv {
  readonly APP_ENV?: string
  readonly GITHUB_SHA?: string
  readonly GITHUB_REF?: string
}
