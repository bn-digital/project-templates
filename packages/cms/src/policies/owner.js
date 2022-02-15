'use strict'

module.exports = ctx => {
  const owner = ctx.state.user
  const target = ctx.args
  return `${owner.id}` === `${target.id}`
}
