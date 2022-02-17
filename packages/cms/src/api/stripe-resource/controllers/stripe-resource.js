'use strict';

/**
 *  stripe-resource controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::stripe-resource.stripe-resource');
