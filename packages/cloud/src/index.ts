import { digitalocean, harbor, postgresql } from "@bn-digital/pulumi"
import { Config, getStack } from "@pulumi/pulumi"

const config = new Config()
const name = config.name
const environment = getStack()

const infrastructure = {
  /**
   * Creates a DigitalOcean project with a Spaces bucket, Kubernetes cluster, and DNS domain inside customer's production environment
   */
  production(): void {
    const { region, domain } = config.requireObject<Partial<digitalocean.ProductionConfig>>("digitalocean")

    digitalocean.createProject({
      name,
      environment,
      resources: [
        digitalocean.createBucket({ name, region }).bucketUrn,
        digitalocean.createCluster({ name, region }).clusterUrn,
        digitalocean.createDomain({ name: domain ?? `${name}.bndigital.ai` }).domainUrn,
      ],
    })
  },

  /**
   * Creates container registry & database inside bndigital staging environment
   *
   * TODO: Extend with extra staging steps required (e.g. Vault/Github secrets provisioning)
   */
  staging(): void {
    harbor.createProject({ name })
    postgresql.createDatabase({ name })
  },
}

switch (environment) {
  case "production":
    infrastructure.production()
    break
  case "staging":
    infrastructure.staging()
    break
  default:
    break
}
