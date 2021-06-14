const { sanitizeEntity } = require('strapi-utils')
const _ = require('lodash')

module.exports = {
  async findOneBySlug(ctx) {
    let data = await strapi.query('category', 'blog').findOne({ slug: ctx.params.slug })
    ctx.body = data ? sanitizeEntity(data, { model: strapi.query('category', 'blog').model }) : data
  },
  async findOne(ctx) {
    let data = await strapi.query('category', 'blog').findOne({ slug: ctx.params.id })
    ctx.body = data
      ? sanitizeEntity({ ...data, id: data.slug }, { model: strapi.query('category', 'blog').model })
      : data
  },
  async find(ctx, populate = {}) {
    let data

    if (_.has(ctx.query, '_q')) {
      data = await strapi.query('category', 'blog').search(ctx.query, populate)
    } else {
      data = await strapi.query('category', 'blog').find(ctx.query, populate)
    }

    ctx.body = data.map(it => sanitizeEntity({ ...it, id: it.slug }, { model: strapi.query('category', 'blog').model }))
  },
}
