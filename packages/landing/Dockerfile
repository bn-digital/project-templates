# syntax = docker/dockerfile:latest
FROM node:16-alpine AS base
WORKDIR /usr/local/src

FROM base AS build
COPY package.json .
RUN yarn install \
      --pure-lockfile \
      --ignore-engines
COPY . .
RUN yarn build

FROM base
ENV NODE_ENV=production
COPY --from=build /usr/local/src/dist .
RUN npm install -g serve
ENTRYPOINT ["serve"]
CMD ["--single", "."]
