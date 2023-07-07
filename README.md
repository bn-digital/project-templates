# Brand New App

## Table of contents

- [CI/CD Workflows](#cicd-workflows)
- [Documentation & References](#documentation--references)
- [Environment](#environment)

## CI/CD Workflows

### Bootstrap checklist

- [ ] Github Secrets created for `VAULT_TOKEN` and `VAULT_ENDPOINT` (see: https://vault.bndigital.dev)

### Integration Checklist

- [ ] Docker Repository created with same name as Github repository (see: https://dcr.bndigital.dev)
- [ ] Postgres Database created with same name as Github repository (see: jdbc:postgresql://bndigital.dev:5432/)

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
