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


## Documentation & References

- [React Documentation](https://react.dev/reference/react)
- [Strapi CMS Documentation](https://docs.strapi.io/developer-docs/latest/getting-started/introduction.html)
- [Ant Design Components](https://ant.design/components/overview/)
- [Github Actions](https://docs.github.com/en/actions)
- [Build and run as Docker container](docs/docker.md)
- [Environment variables](docs/env-variables.md)
- [Backend object storage](docs/storage.md)

## Environment

### Sandbox

[Run in sandbox](https://codesandbox.io/p/github/bn-digital/project-templates/latest)

### Operations tools

- [docker](https://docs.docker.com/)
- [kubectl](https://github.com/kubernetes/kubectl)
- [helm](https://github.com/helm/helm)
- [helmfile](https://github.com/helmfile/helmfile)
- [doctl](https://github.com/digitalocean/doctl)
- [pulumi](https://github.com/pulumi/pulumi)
