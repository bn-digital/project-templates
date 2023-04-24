import { cspDirectives } from "../src/hooks"

export default () => {
  return [
    { name: "strapi::errors" },
    {
      name: "strapi::security",
      config: {
        contentSecurityPolicy: {
          useDefaults: false,
          directives: {
            upgradeInsecureRequests: null,
            ...cspDirectives,
          },
        },
      },
    },
    { name: "strapi::logger" },
    { name: "strapi::cors" },
    { name: "strapi::query" },
    { name: "strapi::body" },
    { name: "strapi::favicon" },
    { name: "global::website" },
    { name: "strapi::public", config: { defer: true } },
  ]
}
