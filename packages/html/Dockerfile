# syntax = docker/dockerfile:latest
FROM node:15-alpine AS build
WORKDIR /usr/local/src
COPY package.json .
RUN yarn install \
      --pure-lockfile \
      --ignore-engines
COPY . .
RUN yarn build

FROM dcr.bndigital.dev/library/http:latest
WORKDIR /usr/local/src
COPY --from=build /usr/local/src/build .
CMD ["."]
