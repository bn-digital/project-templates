# Brand New App

## Table of contents

- [CI/CD Workflows](#cicd-workflows)
- [Documentation & References](#documentation--references)
- [Environment](#environment)

## CI/CD Workflows

### Secrets checklist

To ensure that WFs are working properly, add these GH Secrets right after project creation:
- [ ] Secrets for `VAULT_TOKEN` and `VAULT_ENDPOINT` (copy `github-token` and `url` from [https://vault.bndigital.dev](https://vault.bndigital.dev/ui/vault/secrets/infrastructure/show/vault))
- [ ] Secret for `GH_TOKEN` (copy `github-token` from [https://vault.bndigital.dev](https://vault.bndigital.dev/ui/vault/secrets/accounts/show/github/bn-enginseer))
- [ ] Secret for `HARBOR_TOKEN` (copy `api-token` from [https://vault.bndigital.dev](https://vault.bndigital.dev/ui/vault/secrets/accounts/show/dcr.bndigital.dev))

## Staging Rollout

After setting up **_all_**(!) required secrets, perform these actions:
- [ ] In the `Actions` tab, find WF named `Bootstrap` in the left pane
- [ ] Click on the button `Run workflow` in the top-right corner and in pop-up window click green button `Run workflow`
- [ ] After that open code editor of your choice and replace all occurrences of `"project-templates"` in all `package.json` files with the name of your project, run `yarn install` from every location where you have made changes, then commit and push these changes
- [ ] Wait for the `Staging Deployment` workflow to run and check your staging at `REPO_NAME.bndigital.dev`
- [ ] Go to `REPO_NAME.bndigital.dev/admin` and set up Strapi Admin with [these](https://vault.bndigital.dev/ui/vault/secrets/templates/show/project/staging/strapi) credentials
- [ ] Click on the `Settings` option in the menu on the left and on the page that appeared click `Transfer tokens` and then `+ Create new Transfer Token` button inn the top-right corner
- [ ] In the appeared window enter these values:
- For `Name` any name you like (e.g staging_token)
- For `Token duration` select `30 days`
- For `Description` don't put anything
- For `Token type` select `Full access`
- [ ] Then copy appeared token, press `Save` and save it as a GH secret named `STRAPI_STAGING_TRANSFER_TOKEN`
- [ ] Finally, run workflow named `Transfer` the same way you ran `Bootstrap`
- [ ] Say a few kind words to yourself after completing all steps 🙃
 
## Documentation & References

- [React Documentation](https://react.dev/reference/react)
- [Strapi CMS Documentation](https://docs.strapi.io/developer-docs/latest/getting-started/introduction.html)
- [Ant Design Components](https://ant.design/components/overview/)
- [GitHub Actions](https://docs.github.com/en/actions)
- [Build and run as Docker container](docs/docker.md)
- [Environment variables](docs/env-variables.md)
- [Backend object storage](docs/storage.md)

## Environment

### Sandbox

[Run in sandbox](https://codesandbox.io/p/github/bn-digital/project-templates/latest)

### Official documentation for tools in use

- [docker](https://docs.docker.com/)
- [kubectl](https://github.com/kubernetes/kubectl)
- [helm](https://github.com/helm/helm)
- [helmfile](https://github.com/helmfile/helmfile)
- [doctl](https://github.com/digitalocean/doctl)
- [pulumi](https://github.com/pulumi/pulumi)
