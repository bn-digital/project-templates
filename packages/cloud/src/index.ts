import { getStack } from "@pulumi/pulumi"
import { DotenvConfigOutput, config as envConfig } from "dotenv"

import { Environment as Staging } from "./staging"

const env: DotenvConfigOutput = envConfig()
process.env = { ...process.env, ...env.parsed }

switch (getStack()) {
  case "staging":
    new Staging().connect().then(env => env.provision())
    break
  case "production":
  default:
    break
}
