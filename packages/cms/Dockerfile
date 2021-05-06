# syntax = docker/dockerfile:latest
FROM node:15-alpine AS base
WORKDIR /usr/local/src

FROM base AS build
COPY package.json .
RUN yarn install \
      --pure-lockfile \
      --ignore-engines \
      --production
COPY . .
RUN yarn build \
      --clean

FROM base
ENV NODE_ENV=production \
    STRAPI_TELEMETRY_DISABLED=true \
    STRAPI_LOG_LEVEL=warn \
    STRAPI_HIDE_STARTUP_MESSAGE=true \
    STRAPI_DISABLE_EE=true \
    STRAPI_DISABLE_UPDATE_NOTIFICATION=true \
    STRAPI_SHOW_TUTORIALS=false
COPY --from=build /usr/local/src .
ENTRYPOINT ["yarn"]
CMD ["strapi", "start"]
