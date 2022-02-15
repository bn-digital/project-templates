'use strict';

module.exports = {
  index(ctx) {
    ctx.body = strapi
      .plugin('secrets')
      .service('myService')
      .getWelcomeMessage();
  },
};
