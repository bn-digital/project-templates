'use strict'

const policy = ctx => {
  const owner = ctx.state.user
  const target = ctx.args
  return `${owner.id}` === `${target.id}`
}

export { policy as default }
