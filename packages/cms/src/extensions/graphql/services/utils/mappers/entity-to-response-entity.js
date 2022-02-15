'use strict'

const { map } = require('lodash/fp')

const entityToResponseEntity = entity => entity

const entitiesToResponseEntities = map(entityToResponseEntity)

module.exports = () => ({
  entityToResponseEntity,
  entitiesToResponseEntities,
})
