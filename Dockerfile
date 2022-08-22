# syntax=docker/dockerfile:latest

ARG version=2.4.0
FROM dcr.bndigital.dev/library/yarn:${version} AS build
COPY .yarn .yarn
COPY package.json yarn.lock .yarnrc.yml ./
RUN yarn
COPY packages/cms/package.json packages/cms/package.json
COPY packages/website/package.json packages/website/package.json
RUN yarn
COPY packages packages
RUN yarn build

FROM dcr.bndigital.dev/library/yarn:${version} AS test
COPY .yarn .yarn
COPY package.json yarn.lock .yarnrc.yml ./
RUN yarn
COPY packages/website/package.json packages/website/package.json
RUN yarn
WORKDIR /usr/local/src/packages/website
COPY packages/website .
ARG env=staging
ARG name
ARG domain=${name}.bndigital.dev
ENV APP_ENV=${env}
ENV APP_NAME=${name}
ENV DOMAIN=${domain}
RUN yarn run test

FROM dcr.bndigital.dev/library/nodejs:${version} AS website
COPY --from=build --chown=node /usr/local/src/packages/website/build .


FROM dcr.bndigital.dev/library/nodejs:${version} AS cms
COPY --from=build --chown=node /usr/local/src/packages/cms .
ENTRYPOINT ["yarn"]
CMD ["strapi", "start"]
