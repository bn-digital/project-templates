module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/pages/:id',
      handler: 'page.findOne',
      config: {
        policies: [],
      },
    },
  ],
}
