# syntax = docker/dockerfile:1.2
FROM node:alpine AS base-build
WORKDIR /usr/local/src
ENV HUSKY=false
COPY .yarn .yarn
COPY package.json .yarnrc.yml yarn.lock *rc *ignore ./
RUN yarn

FROM base-build AS base-runtime
EXPOSE 1337
ENTRYPOINT ["yarn", "workspace", "@app/cms", "run"]

FROM base-build AS build
WORKDIR /usr/local/src
COPY packages/cms packages/cms
RUN yarn workspaces focus @app/cms \
 && NODE_ENV=production yarn workspace @app/cms run build --clean

FROM base-runtime
COPY --from=build /usr/local/src/packages/cms packages/cms
ENV NODE_ENV=production \
    STRAPI_TELEMETRY_DISABLED=true \
    STRAPI_LOG_LEVEL=warn \
    STRAPI_HIDE_STARTUP_MESSAGE=true \
    STRAPI_DISABLE_EE=true \
    STRAPI_DISABLE_UPDATE_NOTIFICATION=true \
    STRAPI_SHOW_TUTORIALS=false
CMD ["run"]
