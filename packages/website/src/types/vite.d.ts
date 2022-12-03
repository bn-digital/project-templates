/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />
/// <reference types="vite-plugin-pwa/" />

declare interface ImportMetaEnv extends ImportMetaEnv {
  readonly WEBSITE_API_URL: string
}
