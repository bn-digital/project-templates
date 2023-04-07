import { Database, Provider as PostgresProvider } from "@pulumi/postgresql"
import { Config } from "@pulumi/pulumi"
import { Provider as VaultProvider, kv } from "@pulumi/vault"
import { Provider as HarborProvider, Project, getRegistryOutput } from "@pulumiverse/harbor"

class Environment {
  private readonly vault: VaultProvider
  private harbor?: HarborProvider
  private postgres?: PostgresProvider

  constructor() {
    this.vault = new VaultProvider("infrastructure", {
      address: process.env.VAULT_URL as string,
      token: process.env.VAULT_TOKEN as string,
    })
  }

  async connect() {
    await Promise.all([
      kv.getSecret({ path: "/accounts/data/dcr.bndigital.dev" }, { provider: this.vault }),
      kv.getSecret({ path: "/infrastructure/data/bndigital/staging/postgresql" }, { provider: this.vault }),
    ]).then(([harbor, postgres]) => {
      this.harbor = new HarborProvider("infrastructure", JSON.parse(harbor.dataJson).data)
      this.postgres = new PostgresProvider("infrastructure", JSON.parse(postgres.dataJson).data)
    })
    return this
  }

  private get name(): string {
    return new Config().name
  }

  public provision() {
    new Project(
      Project.name.toLowerCase(),
      {
        name: this.name,
        vulnerabilityScanning: true,
        storageQuota: 10,
        registryId: getRegistryOutput({ name: "projects" }, { provider: this.harbor }).registryId,
      },
      { provider: this.harbor, deleteBeforeReplace: true }
    )
    new Database(Database.name.toLowerCase(), { name: this.name, encoding: "UTF8" }, { provider: this.postgres })
  }
}

export { Environment }
