# syntax=docker/dockerfile:latest

ARG version=2.12.0
FROM dcr.bndigital.dev/library/yarn:${version} AS build
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
COPY packages/cms/package.json packages/cms/package.json
COPY packages/website/package.json packages/website/package.json
COPY packages/cloud/package.json packages/cloud/package.json
RUN pnpm install
COPY packages packages
RUN pnpm run -r build

FROM gcr.io/distroless/nodejs18-debian11:nonroot
WORKDIR /usr/local/src
COPY --from=build /usr/local/src/node_modules packages/cms/node_modules
COPY --from=build /usr/local/src/packages/cms .
COPY --from=build /usr/local/src/packages/website/build public
ENV NODE_ENV=production \
    HOST=0.0.0.0 \
    PORT=5000
EXPOSE 5000
CMD ["node_modules/@strapi/strapi/bin/strapi.js", "start"]
