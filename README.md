# Brand New Apps

## Development

### Required IDE plugins

- [GraphQL](https://plugins.jetbrains.com/plugin/8097-js-graphql)
- [.env](https://plugins.jetbrains.com/plugin/9525--env-files-support)
- [.ignore](https://plugins.jetbrains.com/plugin/7495--ignore)

### Starting application

Run corresponding command from root [package.json](package.json) script.

### Required changes

- [ ] sonar-project.properties -- change 'project-template' to 'your project name'
- [ ] package.json -- change "name": "App" to "your project name",
packaje.json -- config script from "start": "concurrently 'yarn:generate' 'yarn:cms' 'yarn:website'" to "start": "'yarn:website'" (optional)
helmfile.yalm -- change releases:- name: app-website to releases:- name: your project name helmfile.yalm -- change chart: bndigital/app to
chart: bndigital/your project name packages/website/package.json -- change "name": "@app/website", to "name": "@homli/website", (the same
for cms folder)
Run yarn install)