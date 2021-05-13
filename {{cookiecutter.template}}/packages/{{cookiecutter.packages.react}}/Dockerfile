# syntax = docker/dockerfile:latest
FROM dcr.bndigital.dev/library/nodejs AS build
COPY package.json .nvmrc ./
RUN yarn
COPY . .
RUN yarn build

FROM dcr.bndigital.dev/library/http:latest
LABEL "org.opencontainers.image.title={{cookiecutter.packages.react}}" \
      "org.opencontainers.image.source=https://github.com/bn-digital/{{cookiecutter.project.name}}"
WORKDIR /usr/local/src
COPY --from=build /usr/local/src/build .
CMD ["--single"]
