import { configureReact } from "@bn-digital/vite"export default configureReact(  {},  {    react: { swc: { enabled: true }, svg: { enabled: true } },    buildInfo: {      enabled: true,      meta: {        gitCommit: process.env.GITHUB_SHA ?? "",        gitBranch: process.env.GITHUB_REF ?? "",        env: process.env.APP_ENV ?? "",        buildTime: new Date().toUTCString(),      },    },    lint: { enabled: true, enableBuild: false },    graphql: { enabled: true },    analytics: { enableDev: false },    fonts: {      google: {        preconnect: true,        families: [{ name: "Lato", styles: "wght@400;500;600;700;800;900" }],        display: "auto",      },    },  })