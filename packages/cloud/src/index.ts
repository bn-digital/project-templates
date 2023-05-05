import { digitalocean, github, harbor, postgresql, vault } from "@bn-digital/pulumi"
import { Config, Output, Resource, all, getStack } from "@pulumi/pulumi"
import { kv } from "@pulumi/vault"
import * as path from "path"

const config = new Config()
const name = config.name
const environment = getStack()

const infrastructure = {
  /**
   * Creates a DigitalOcean project with a Spaces bucket, Kubernetes cluster, and DNS domain inside customer's production environment
   */
  production(): Resource[] {
    const { region, domain } = config.requireObject<Partial<digitalocean.ProductionConfig>>("digitalocean")
    const bucket = digitalocean.createBucket({ name, region })
    const cluster = digitalocean.createCluster({ name, region })
    const dns = digitalocean.createDomain({ name: domain ?? `${name}.bndigital.ai` })
    const project = digitalocean.createProject({
      name,
      environment,
      resources: [bucket.bucketUrn, cluster.clusterUrn, dns.domainUrn],
    })
    return [project, bucket, cluster, dns]
  },

  /**
   * Creates container registry & database inside bndigital staging environment
   *
   * TODO: Extend with extra staging steps required (e.g. Vault/Github secrets provisioning)
   */
  staging(): Resource[] {
    const requiredSecrets: { [key: string]: { [key: string]: string[] } } = config.requireObject("secrets")
    const containerRegistry: Resource = harbor.createProject({ name })
    const database: Resource = postgresql.createDatabase({ name })
    const resources = [containerRegistry, database]
    Object.entries(requiredSecrets).forEach(([path, mapping]) =>
      kv.getSecretOutput({ path }).apply(result => {
        const config = result.dataJson ? JSON.parse(result.dataJson)?.data : {}
        Object.entries(mapping).forEach(([key, envVars]) =>
          envVars
            .map<[string, string | null]>(envVar => [envVar, config[key]?.toString() ?? null])
            .forEach(([key, value]) => value && resources.push(github.createSecret({ key, value })))
        )
      })
    )

    return resources
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
