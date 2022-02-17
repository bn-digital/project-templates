# syntax = docker/dockerfile:latest
ARG version=1.6.0
FROM dcr.bndigital.dev/library/yarn:${version} AS build
RUN yarn
COPY . .
RUN yarn build

FROM dcr.bndigital.dev/library/nodejs:${version}
COPY --chown=node --from=build /usr/local/src/build .