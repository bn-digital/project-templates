import { digitalocean, github, harbor, postgresql, vault } from "@bn-digital/pulumi"
import { Config, Resource, getStack } from "@pulumi/pulumi"

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
    const requiredSecrerts: { [key: string]: string } = {
      DOCKER_REGISTRY: "infrastructure/data/registry/url",
      DOCKER_USERNAME: "infrastructure/data/registry/username",
      DOCKER_PASSWORD: "infrastructure/data/registry/password",
      KUBERNETES_CLUSTER: "infrastructure/data/digitalocean/kubernetes",
      DIGITALOCEAN_TOKEN: "infrastructure/data/digitalocean/token",
      AWS_ACCESS_KEY_ID: "infrastructure/data/spaces/access-key-id",
      AWS_SECRET_ACCESS_KEY: "infrastructure/data/spaces/secret-access-key",
      SPACES_ACCESS_KEY_ID: "infrastructure/data/spaces/access-key-id",
      SPACES_SECRET_ACCESS_KEY: "infrastructure/data/spaces/secret-access-key",
      SONAR_HOST_URL: "infrastructure/data/sonarqube/url",
      SONAR_TOKEN: "infrastructure/data/sonarqube/token",
    }
    const containerRegistry: Resource = harbor.createProject({ name })
    const database: Resource = postgresql.createDatabase({ name })
    const secrets = Object.entries(requiredSecrerts)
      .map(([key, path]) => ({ [key]: vault.getSecret(path) }))
      .flatMap(Object.entries)
      .map(([key, value]) => github.createSecret({ key, value }))

    return Array.of(containerRegistry, database, ...secrets)
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
