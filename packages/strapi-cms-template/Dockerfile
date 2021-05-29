# syntax = docker/dockerfile:latest
FROM dcr.bndigital.dev/library/nodejs AS build
COPY package.json .nvmrc ./
RUN yarn
COPY . .
RUN yarn build

FROM dcr.bndigital.dev/library/http:latest
ENV STRAPI_TELEMETRY_DISABLED=true \
    STRAPI_LOG_LEVEL=warn \
    STRAPI_HIDE_STARTUP_MESSAGE=true \
    STRAPI_DISABLE_EE=true \
    STRAPI_DISABLE_UPDATE_NOTIFICATION=true \
    STRAPI_SHOW_TUTORIALS=false
WORKDIR /usr/local/src
COPY --from=build /usr/local/src .
ENTRYPOINT ["yarn"]
CMD ["strapi", "start"]
