# syntax = docker/dockerfile:latest
FROM dcr.bndigital.dev/library/yarn:1.7.0 AS build
RUN yarn
COPY . .
RUN yarn build

FROM dcr.bndigital.dev/library/nodejs:1.3.0
COPY --chown=node --from=build /usr/local/src .
ENTRYPOINT ["yarn"]
CMD ["strapi", "start"]