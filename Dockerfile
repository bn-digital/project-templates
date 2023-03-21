# syntax=docker/dockerfile:latest

ARG version=3.0.0
FROM dcr.bndigital.dev/library/yarn:${version} AS build
COPY .yarn .yarn
COPY package.json yarn.lock .yarnrc.yml ./
COPY packages/cms/package.json packages/cms/package.json
COPY packages/website/package.json packages/website/package.json
RUN yarn
COPY packages packages
RUN yarn build \
 && rm -rf packages/cms/tsconfig.json \
 && rm -rf packages/cms/src/* \
 && rm -rf packages/cms/config \
 && rm -rf packages/cms/public \
 && mv -v packages/cms/dist/* packages/cms \
 && yarn workspaces focus --production --all

FROM dcr.bndigital.dev/library/nodejs:${version}
WORKDIR /usr/local/src
COPY --from=build --chown=node /usr/local/src/packages/cms .
COPY --from=build --chown=node /usr/local/src/packages/website/build public
ENV NODE_ENV=production \
    HOST=0.0.0.0 \
    PORT=5000
EXPOSE 5000
ENTRYPOINT ["node"]
CMD ["node_modules/@strapi/strapi/bin/strapi.js", "start"]
