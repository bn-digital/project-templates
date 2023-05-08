declare global {
  namespace NodeJS {
    interface ProcessEnv {
      /**
       * Used by Pulumi to store state files in S3 bucket.
       * @example s3://bn-digital/pulumi/project-templates?endpoint=fra1.digitaloceanspaces.com&profile=digitalocean"
       */
      PULUMI_BACKEND_URL: string
      PULUMI_CONFIG_PASSPHRASE: string
      /**
       * Pulumi S3 backend require AWS-like credentials to access S3 bucket no matter which cloud provider is used.
       */
      AWS_SECRET_ACCESS_KEY: string
      AWS_ACCESS_KEY_ID: string
      AWS_REGION: string
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
       * Used in production environment to manage DigitalOcean Spaces bucket
       */
      SPACES_ACCESS_KEY_ID: string
      SPACE_SECRET_ACCESS_KEY: string
      /**
       * Used in staging to bind any changes in repository to organization by default
       */
      GITHUB_OWNER: string
      /**
       * Used to setup Harbor provider and manage container registry
       */
      HARBOR_USERNAME: string
      HARBOR_PASSWORD: string
      HARBOR_URL: string
    }
  }
}
export {}
