# Cloud Infrastructure

## Requirements

- `pulumi` installed

### DigitalOcean

1. Create DigitalOcean [API Token](https://cloud.digitalocean.com/account/api/tokens/new) with read/write access
2. Create Spaces [Access/Secret Keys](https://cloud.digitalocean.com/account/api/tokens)
3. From `packages/cloud` run:

```bash
cd packages/cloud
pulumi config set digitalocean:token <API Token>
pulumi config set digitalocean:spaces_access_id <Access Key>
pulumi config set digitalocean:space_secret_key <Secret Key>
```

See [provider documentation](https://www.pulumi.com/registry/packages/digitalocean/installation-configuration/) for more details.
