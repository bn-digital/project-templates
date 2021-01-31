ARG version=15.7
FROM node:${version}-alpine
USER root
WORKDIR /usr/local/src
ADD .yarn .yarn
ADD .yarnrc.yml .yarnclean package.json yarn.lock ./
RUN yarn install
COPY . .
RUN yarn rebuild
