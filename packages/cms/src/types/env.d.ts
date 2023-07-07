declare global {
  namespace NodeJS {
    interface ProcessEnv {
      APP_NAME: string
      APP_ENV: App.Mode
      APP_VERSION: string
      DOMAIN: string
      DATABASE_HOST: string
      DATABASE_PORT: number
      DATABASE_CLIENT: Database.Client
      NODE_ENV: "development" | "production"
      GITHUB_SHA: string
      GITHUB_REF: string
    }
  }
}
