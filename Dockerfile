ARG version=15.7
FROM node:${version}-alpine AS base
WORKDIR /usr/local/src
ADD .yarn .yarnrc.yml .yarnclean package.json yarn.lock ./
COPY . .
RUN yarn install
