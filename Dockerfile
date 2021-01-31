ARG version=15.7
FROM node:${version}-alpine
WORKDIR /usr/local/src
ADD .yarn .yarn
ADD .yarnrc.yml .yarnclean package.json yarn.lock ./
RUN apk add --no-cache \
      build-base \
      gcc \
      autoconf \
      automake \
      zlib-dev \
      libpng-dev \
      nasm \
      bash \
 && yarn install
COPY . .
RUN yarn rebuild
