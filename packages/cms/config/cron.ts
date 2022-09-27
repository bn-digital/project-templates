export default {
  '* * * * *': ({ strapi }: Global) => (strapi.plugin('email-emitter').services.emitter as Strapi.EmailEmitter.EmitterService).sendScheduled(),
}
