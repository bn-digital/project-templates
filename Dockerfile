# syntax=docker/dockerfile:latest

ARG version=3.0.0
FROM dcr.bndigital.dev/library/yarn:${version} AS build
USER root
COPY .yarn .yarn
COPY package.json yarn.lock .yarnrc.yml ./
COPY packages/cms/package.json packages/cms/package.json
COPY packages/website/package.json packages/website/package.json
ENV YARN_CACHE_FOLDER=/root
RUN yarn
COPY packages packages
RUN yarn build

FROM gcr.io/distroless/nodejs18-debian11:nonroot
WORKDIR /usr/local/src
COPY --from=build /usr/local/src/packages/cms .
COPY --from=build /usr/local/src/packages/website/build public
ENV NODE_ENV=production \
    HOST=0.0.0.0 \
    PORT=5000
EXPOSE 5000
CMD ["node_modules/@strapi/strapi/bin/strapi.js", "start"]
