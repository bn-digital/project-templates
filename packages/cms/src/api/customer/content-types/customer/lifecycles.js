const { v4 } = require('uuid')
module.exports = {
  async beforeCreate(event) {
    !event.params.data.uuid && (event.params.data.uuid = v4())
    const stripeResource = await strapi.entityService.create('api::stripe-resource.stripe-resource', { data: { uid: v4(), payload: {} } })
    event.params.data.stripe = stripeResource.id
  },
  async beforeUpdate(event) {
    !event.params.data.uuid && (event.params.data.uuid = v4())
    if (!event.params.data.stripe) {
      const stripeResource = await strapi.entityService.create('api::stripe-resource.stripe-resource', { data: { uid: v4(), payload: {} } })
      event.params.data.stripe = stripeResource.id
    }
  },
  beforeDelete(event) {
    strapi.entityService
      .findOne('api::customer.customer', event.params.where.id, { populate: ['stripe'] })
      .then(result => result.stripe.id && strapi.entityService.delete('api::stripe-resource.stripe-resource', result.stripe.id))
  },
}
