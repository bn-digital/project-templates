# syntax=docker/dockerfile:latest

# Base images

ARG version=1.8.0
FROM dcr.bndigital.dev/library/yarn:${version} AS build
COPY .yarn .yarn
COPY package.json yarn.lock .yarnrc.yml ./
RUN yarn

FROM dcr.bndigital.dev/library/nodejs:${version} AS runtime

# Build artifact images

FROM build AS build-website
COPY ./packages/website/package.json ./packages/website/package.json
RUN yarn
COPY ./packages/website ./packages/website
WORKDIR /usr/local/src/packages/website
RUN yarn build

FROM build AS build-cms
COPY ./packages/cms/package.json ./packages/cms/package.json
RUN yarn
COPY ./packages/cms ./packages/cms
WORKDIR /usr/local/src/packages/cms
RUN yarn build

# Runtime images

FROM runtime AS website
COPY --from=build-website --chown=node /usr/local/src/packages/website/build .

FROM runtime AS cms
COPY --from=build-cms --chown=node /usr/local/src/packages/cms .
ENTRYPOINT ["yarn"]
CMD ["strapi", "start"]