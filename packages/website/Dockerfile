# syntax = docker/dockerfile:1.2
FROM node:alpine AS base-build
WORKDIR /usr/local/src
ENV HUSKY=false
COPY .yarn .yarn
COPY package.json .yarnrc.yml yarn.lock *rc *ignore ./
RUN yarn

FROM base-build AS base-runtime
RUN npm i -g serve
EXPOSE 5000
ENTRYPOINT ["serve"]

FROM base-build AS build
COPY packages/website packages/website
ENV SKIP_PREFLIGHT_CHECK=true \
    REACT_APP_PUBLIC_URL=https://bndigital.co \
    REACT_APP_API_URL=https://bndigital.co/api
RUN yarn workspaces focus @app/website \
 && yarn workspace @app/website run build

FROM base-runtime
COPY --from=build /usr/local/src/packages/website/build build
CMD ["--single", "build"]
