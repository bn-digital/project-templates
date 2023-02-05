export default {
  // '* * * * *': ({ strapi }) => {
  //   console.log('Running cron job every minute')
  // },
} as Record<string, ({ strapi }: { strapi: Strapi.Strapi }) => void>
