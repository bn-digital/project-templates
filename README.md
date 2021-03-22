# Brand New App

## Installation

### CMS

Run

```bash
yarn start
```

from `packages/cms` package.json script.

Strapi will be accessible on [http://localhost:1337/admin]. Content should be there with local database.
You can find it in[http://localhost:8080/admin/plugins/content-manager/singleType/application::website.website](Website type) in left sidebar menu
Content fallback backed up in website in case of API unavailability.

### Website

To use content from API, use hook

```ts
import { useContent } from 'packages/website/src/containers/CMS'

const {
  website: { navigation, sections, sliders, pages },
} = useContent()
```
