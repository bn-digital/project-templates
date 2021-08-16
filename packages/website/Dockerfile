# syntax = docker/dockerfile:latest
FROM dcr.bndigital.dev/library/nodejs:latest AS build
COPY package.json .
RUN yarn
COPY . .
RUN yarn build

FROM dcr.bndigital.dev/library/http:latest
WORKDIR /usr/local/src
COPY --from=build /runner/build .
CMD ["--single"]
