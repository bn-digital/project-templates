declare global {
  import { providers, stacks } from "@bn-digital/pulumi"

  type ConfigSpec = stacks.InfrastructureConfig & providers.helm.AppConfig
}

export {}