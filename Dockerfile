ARG version=15.9
FROM node:${version}-alpine AS base
ENV HUSKY_SKIP_INSTALL=true \
    SKIP_PREFLIGHT_CHECK=true \
    CI=true
USER root
WORKDIR /usr/shared/src
ADD .yarn .yarn
ADD .yarnrc.yml .yarnclean package.json yarn.lock ./
RUN yarn
COPY . .
RUN yarn rebuild
ENTRYPOINT ["yarn"]


FROM base AS strapi
RUN yarn dlx strapi
