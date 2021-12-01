# syntax = docker/dockerfile:latest
FROM dcr.bndigital.dev/library/nodejs:1.0.1 AS nodejs

FROM dcr.bndigital.dev/library/nodejs:1.0.1 AS cms
COPY --chown=node packages/cms .
ENTRYPOINT ["yarn"]
CMD ["strapi", "start"]

FROM dcr.bndigital.dev/library/nodejs:1.0.1 AS website
COPY --chown=node packages/website/build .