# syntax=docker/dockerfile:latest
ARG version=3.7.0
FROM dcr.bndigital.dev/library/yarn:${version} AS build
COPY .yarn .yarn
COPY package.json yarn.lock .yarnrc.yml ./
COPY packages/cms/package.json packages/cms/
COPY packages/website/package.json packages/website/
RUN yarn
COPY . .
RUN yarn build \
 && rm -rf packages/cms/tsconfig.json \
 && rm -rf packages/cms/src/* \
 && rm -rf packages/cms/config \
 && rm -rf packages/cms/public \
 && mv -v packages/cms/dist/* packages/cms \
 && yarn workspaces focus --production --all

## Uncomment the following lines to build a frontend-only image
#FROM dcr.bndigital.dev/library/nodejs:${version}
#WORKDIR /usr/local/src
#COPY --from=build --chown=node /usr/local/src/packages/website/build .
#ENTRYPOINT ["http-server"]
#CMD ["--proxy", "http://localhost:5000?"]

## Comment the following lines to build a frontend-only image
FROM dcr.bndigital.dev/library/nodejs:${version}
WORKDIR /usr/local/src
COPY --from=build --chown=node /usr/local/src/packages/cms .
COPY --from=build --chown=node /usr/local/src/packages/website/build public
ENTRYPOINT ["node"]
CMD ["node_modules/@strapi/strapi/bin/strapi.js", "start"]
