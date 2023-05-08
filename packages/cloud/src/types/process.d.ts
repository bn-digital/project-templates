declare global {
  namespace NodeJS {
    interface ProcessEnv {
      /**
       * Used by Pulumi to store state files in S3 bucket.
       * Assumes that aws profile `digitalocean` is configured with credentials from BN Digitalocean.
       * @example s3://bn-digital/pulumi/project-templates?endpoint=fra1.digitaloceanspaces.com&profile=digitalocean"
       */
      PULUMI_BACKEND_URL: string
      PULUMI_CONFIG_PASSPHRASE: string
      /**
       * Used in staging environment to configure Vault provider and fetch secrets from it
       */
      VAULT_ADDR: string
      VAULT_TOKEN: string
      /**
       * Used in staging environment to setup Postgres and create database
       */
      PGHOST: string
      PGPASSWORD: string
      PGUSER: string
      PGSSLMODE: boolean
      /**
       * Used in production to create DigitalOcean project with resources
       */
      DIGITALOCEAN_TOKEN: string
      /**
       * Used in production environment to create DigitalOcean Spaces bucket
       */
      SPACES_ACCESS_KEY_ID: string
      SPACE_SECRET_ACCESS_KEY: string
      /**
       * Used in staging to set repository owner on Github Secrets population
       */
      GITHUB_OWNER: string
      /**
       * Used to setup Harbor provider and create container registry
       */
      HARBOR_USERNAME: string
      HARBOR_PASSWORD: string
      HARBOR_URL: string
    }
  }
}
export {}
