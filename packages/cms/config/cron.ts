import { differenceInMilliseconds } from 'date-fns'

import ENTITY_UID from '../src/api/email/uid'

export default {
  '* * * * *': ({ strapi }: Global) => {
    const startDate = new Date()
    strapi.log.info(`[email] Batch email delivery each-minute job started`)
    strapi.entityService
      .findMany(ENTITY_UID, {
        filters: {
          publishedAt: {
            $null: true,
          },
        },
      })
      .then(emails => {
        strapi.log.warn(`[email] Found ${emails.length} emails to deliver`)
        emails.forEach(email => strapi.entityService.update(ENTITY_UID, email.id, { data: { publishedAt: new Date() } }))
      })
      .catch(err => strapi.log.error(`[email] Error while delivering emails`, err))
      .finally(() => strapi.log.info(`[email] Delivery finished (${differenceInMilliseconds(new Date(), startDate)} ms)`))
  },
}
