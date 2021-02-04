ARG version=15.7
FROM node:${version}-alpine
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
