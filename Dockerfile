# syntax = docker/dockerfile:latest
FROM dcr.bndigital.dev/library/nodejs:1.0.0 AS nodejs

FROM nodejs AS cms
COPY packages/cms .
ENTRYPOINT ["yarn"]
CMD ["strapi", "start"]

FROM nodejs AS website
COPY packages/website/build .
