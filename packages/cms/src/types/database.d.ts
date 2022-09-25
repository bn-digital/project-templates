namespace Strapi {
  namespace Database {
    import { Knex } from 'knex'
    import { Event } from '@strapi/database/lib/lifecycles'

    type Client = 'sqlite' | 'postgres' | 'mysql'

    type Config = {
      connection: Knex.Config
    }

    type AfterLifecycleEvent<T = any> = Event & {
      result?: T
    }
  }
}
