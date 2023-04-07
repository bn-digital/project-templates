import { configureReact } from "@bn-digital/vite"

export default configureReact(
  {},
  {
    //  react: { swc: true },
    buildInfo: { enabled: true, meta: { APP_ENV: process.env.APP_ENV ?? "staging" } },
    lint: { enabled: true },
    graphql: { enabled: true },
    analytics: { enableDev: false },
    fonts: {
      google: {
        preconnect: true,
        families: [{ name: "Lato", styles: "wght@400;500;600;700;800;900" }],
        display: "auto",
      },
    },
  }
)
