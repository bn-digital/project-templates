export default {
  '0 * * * *': ({ strapi }: Global) => {
    strapi.log.info('[cron] Executing hourly cron job')
  },
}
