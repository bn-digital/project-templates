'use strict';

/**
 * stripe-resource router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::stripe-resource.stripe-resource');
