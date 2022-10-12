export default {
  '* * * * *': ({ strapi }: Global) => (strapi.service('plugin::email-emitter.emitter') as Strapi.EmailEmitter.EmitterService).sendScheduled(),
}
