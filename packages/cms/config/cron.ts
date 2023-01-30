export default {
  '* * * * *': ({ strapi }: Global) => {
    const emitter: Strapi.EmailEmitter.EmitterService = strapi.plugin('email-emitter').service('emitter')
    return emitter.sendScheduled()
  },
}
