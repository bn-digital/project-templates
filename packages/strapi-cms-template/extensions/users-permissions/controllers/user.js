module.exports = {
  async employees(ctx) {
    let entities
    entities = await strapi.plugins['users-permissions'].services.user.fetchAll(ctx.query)

    return entities.map(it => ({
      id: it.id,
      firstName: it.firstName,
      lastName: it.lastName,
      occupation: it.occupation.name,
      photo: it.photo,
    }))
  },
}
