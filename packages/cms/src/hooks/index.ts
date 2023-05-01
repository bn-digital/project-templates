import { join } from "path"

import packageMetadata from "../../package.json"
import { generateSecret } from "./config"

const env: App.Env = {
  get development() {
    return this.mode === "development"
  },
  get production() {
    return this.mode === "production"
  },
  get testing() {
    return this.mode === "staging" || this.mode === "test"
  },
  mode: process.env.NODE_ENV as App.Mode,
}
const name = `${process.env.APP_NAME ?? packageMetadata.name.split("/")?.[0].replace("@", "")}` as const
const dnsZone = `bndigital.dev` as const

const app: App.Metadata = {
  workingDir: `${process.cwd()}`,
  name: process.env.APP_NAME ?? packageMetadata.name.split("/")?.[0].replace("@", ""),
  version: process.env.APP_VERSION ?? "latest",
  domain: process.env.DOMAIN ?? `${name}.${dnsZone}`,
  env,
  dnsZone,
}

const workdirResolve = (...workingDirRelative: string[]): string => {
  return join(app.workingDir, ...workingDirRelative)
}

const randomSecret = (name: string): string => generateSecret(name, app.name)

export { cspDirectives } from "./config"
export { generateTypeDefinitions } from "./typescript"
export { app as default, randomSecret, workdirResolve }
