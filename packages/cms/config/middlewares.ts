import { cspConfig, publicConfig } from "../src/hooks/config"

export default () => {
  return [
    { name: "strapi::errors" },
    {
      name: "strapi::security",
      config: cspConfig,
    },
    { name: "strapi::logger" },
    { name: "strapi::cors" },
    { name: "strapi::query" },
    { name: "strapi::body" },
    { name: "strapi::favicon" },
    { name: "global::website" },
    {
      name: "strapi::public",
      config: publicConfig,
    },
  ]
}
