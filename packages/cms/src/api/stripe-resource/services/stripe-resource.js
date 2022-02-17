'use strict';

/**
 * stripe-resource service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::stripe-resource.stripe-resource');
