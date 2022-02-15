'use strict';

/**
 * order-line service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::order-line.order-line');
