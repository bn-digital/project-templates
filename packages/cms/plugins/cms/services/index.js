const _ = require('lodash')
const { sanitizeEntity } = require('strapi-utils')
/** @type {string} */
const pluginId = require('../package.json').strapi.name.toLowerCase()

async function findOne(modelId, ctx, populate = {}) {
  let data = null
  if (_.has(ctx.query, '_q')) {
    data = await strapi.query(modelId, pluginId).search(ctx.query, populate)
  } else {
    data = await strapi.query(modelId, pluginId).findOne({ slug: ctx.query.id })
  }
  ctx.body = data ? sanitizeEntity({ ...data, id: data.slug }, { model: strapi.getModel(modelId, pluginId) }) : null
}

async function find(modelId, ctx, populate = {}) {
  let data = []
  if (_.has(ctx.query, '_q')) {
    data = await strapi.query(modelId, pluginId).search(ctx.query, populate)
  } else {
    data = await strapi.query(modelId, pluginId).find({ slug: ctx.query.id }, populate)
  }
  ctx.body = data.map(datum =>
    sanitizeEntity(
      {
        ...datum,
        id: datum.slug,
      },
      { model: strapi.getModel(modelId, pluginId) },
    ),
  )
}

module.exports = { find, findOne }
