# syntax=docker/dockerfile:latest

# Base images

ARG version=2.0.0
FROM dcr.bndigital.dev/library/yarn:${version} AS build
COPY .yarn .yarn
COPY package.json yarn.lock .yarnrc.yml ./
COPY ./packages/cms/package.json ./packages/cms/package.json
COPY ./packages/website/package.json ./packages/website/package.json
RUN yarn

FROM dcr.bndigital.dev/library/nodejs:${version} AS runtime

# Build artifact images

FROM build AS build-website
WORKDIR /usr/local/src/packages/website
COPY ./packages/website .
RUN yarn build

FROM build AS build-cms
WORKDIR /usr/local/src/packages/cms
COPY ./packages/cms .
RUN yarn build

# Runtime images

FROM runtime AS website
COPY --from=build-website --chown=node /usr/local/src/packages/website/build .

FROM runtime AS cms
COPY --from=build-cms --chown=node /usr/local/src/packages/cms .
ENTRYPOINT ["yarn"]
CMD ["strapi", "start"]