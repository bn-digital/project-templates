# Environment variables

## Common

| Name     | Default value | Environments            | Description                                        | 
|----------|---------------|-------------------------|----------------------------------------------------|
| APP_NAME | -             | `staging`, `production` | This repository name, used as docker registry name |
| APP_ENV  | -             | `staging`, `production` | One of: staging, production                        |
| DOMAIN   | -             | `staging`, `production` | Public DNS (e.g. `careerhub.cloud`)                |

## CMS

### Database

| Name                | Default value                                      | Environments            | Description                       | 
|---------------------|----------------------------------------------------|-------------------------|-----------------------------------|
| `DATABASE_CLIENT`   | `sqlite`                                           | `staging`, `production` | One of: mysql, postgresql, sqlite |
| `DATABASE_HOST`     | `postgresql`                                       | `staging`, `production` |                                   |
| `DATABASE_PORT`     | `5432`                                             | `staging`, `production` |                                   |
| `DATABASE_NAME`     | `app` field from root [package.json](package.json) | `staging`, `production` |                                   |
| `DATABASE_SCHEMA`   | `public`                                           | `staging`, `production` |                                   |
| `DATABASE_USERNAME` | `postgres`                                         | `staging`, `production` |                                   |
| `DATABASE_PASSWORD` | ``                                                 | `staging`, `production` |                                   |

### S3 Object Storage

| Name                   | Default value      | Environments            | Description | 
|------------------------|--------------------|-------------------------|-------------|
| `S3_ACCESS_KEY_ID`     | ``                 | `staging`, `production` |             |
| `S3_SECRET_ACCESS_KEY` | ``                 | `staging`, `production` |             |
| `S3_REGION`            | ``                 | `staging`, `production` |             |
| `S3_ENDPOINT`          | ``                 | `staging`, `production` |             |
| `S3_BUCKET`            | `bn-dev/$APP_NAME` | `staging`, `production` |             |

