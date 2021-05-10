# Brand New App

## Bootstrap

### Create a repository from this template 

- [ ] Click the big green button `Use this template` or [click here](https://github.com/bn-digital/app/generate)
- [ ] Enter a Repository name and click `Create repository from template` 
- [ ] Head over to the created repository and complete the setup. 

### Complete setup 

- [ ] In the a new repository, complete the project setup by editing the cookiecutter.json file. 
- [ ] Hit `[⌘] + [S]` / `[Ctrl] + [S]` and then `[Enter]` to perform a commit (the commit message doesn't really matter). 
- [ ] Wait Setup Repository Action to complete.

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
  website: { navigation, sections, pages },
} = useContent()
```
