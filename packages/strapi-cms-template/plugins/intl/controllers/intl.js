const { sanitizeEntity } = require('strapi-utils')
const _ = require('lodash')

module.exports = {
  async findCountry(ctx) {
    let data = await strapi.query('country', 'intl').findOne({ code: ctx.params.id })
    ctx.body = data
      ? sanitizeEntity({ ...data, id: data.code }, { model: strapi.query('country', 'intl').model })
      : data
  },
  async findCountries(ctx, populate = {}) {
    let data

    if (_.has(ctx.query, '_q')) {
      data = await strapi.query('country', 'intl').search(ctx.query, populate)
    } else {
      data = await strapi.query('country', 'intl').find(ctx.query, populate)
    }

    ctx.body = data.map(it => sanitizeEntity({ ...it, id: it.code }, { model: strapi.query('country', 'intl').model }))
  },
  async findCurrency(ctx) {
    let data = await strapi.query('currency', 'intl').findOne({ code: ctx.params.id })
    ctx.body = data
      ? sanitizeEntity({ ...data, id: data.code }, { model: strapi.query('currency', 'intl').model })
      : data
  },
  async findCurrencies(ctx, populate = {}) {
    let data
    if (_.has(ctx.query, '_q')) {
      data = await strapi.query('currency', 'intl').search(ctx.query, populate)
    } else {
      data = await strapi.query('currency', 'intl').find(ctx.query, populate)
    }
    ctx.body = data.map(it => sanitizeEntity({ ...it, id: it.code }, { model: strapi.query('currency', 'intl').model }))
  },
}
