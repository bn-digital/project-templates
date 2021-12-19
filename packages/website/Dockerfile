# syntax = docker/dockerfile:latest
FROM dcr.bndigital.dev/library/yarn:1.2.1 AS build
COPY . .
RUN yarn set version berry \
 && yarn config set nodeLinker node-modules \
 && yarn config set enableGlobalCache true \
 && yarn \
 && yarn build

FROM dcr.bndigital.dev/library/nodejs:1.2.1
COPY --chown=node --from=build /usr/local/src/build .