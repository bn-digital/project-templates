# syntax=docker/dockerfile:latest

ARG version=2.9.0
FROM dcr.bndigital.dev/library/yarn:${version} AS build
COPY .yarn .yarn
COPY package.json yarn.lock .yarnrc.yml ./
COPY packages/cms/package.json packages/cms/package.json
COPY packages/website/package.json packages/website/package.json
ENV YARN_CHECKSUM_BEHAVIOR=ignore
RUN yarn
COPY packages packages
RUN yarn build

FROM gcr.io/distroless/nodejs18-debian11:nonroot
COPY --from=build --chown=node /usr/local/src/packages/cms .
COPY --from=build --chown=node /usr/local/src/packages/website/build public
ENTRYPOINT ["node_modules/.bin/strapi"]
CMD ["start"]
