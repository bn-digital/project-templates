const name = require('./name')

const sqlite = {
  connector: 'bookshelf',
  settings: {
    client: 'sqlite',
    filename: process.env.DATABASE_FILE ?? `data/db/${name}.db`,
  },
  options: {
    useNullAsDefault: true,
  },
}

const postgres = {
  connector: 'bookshelf',
  settings: {
    client: 'postgres',
    database: process.env.DATABASE_NAME ?? name,
    schema: process.env.DATABASE_SCHEMA ?? 'public',
    username: process.env.DATABASE_USERNAME ?? name,
    password: process.env.DATABASE_PASSWORD ?? '',
    port: process.env.DATABASE_PORT ?? 5432,
    host: process.env.DATABASE_HOST ?? 'postgresql',
  },
  options: {
    useNullAsDefault: true,
  },
}

const mysql = {
  connector: 'bookshelf',
  settings: {
    client: 'mysql',
    database: process.env.DATABASE_NAME ?? name,
    username: process.env.DATABASE_USERNAME ?? name,
    password: process.env.DATABASE_PASSWORD ?? '',
    port: process.env.DATABASE_PORT ?? 3306,
    host: process.env.DATABASE_HOST ?? 'mysql',
  },
  options: {
    useNullAsDefault: true,
  },
}

const db = {
  mysql,
  sqlite,
  postgres,
}

module.exports = {
  defaultConnection: 'default',
  connections: {
    default: process.env.DATABASE_CLIENT ? db[process.env.DATABASE_CLIENT] || db.sqlite : db.sqlite,
    sqlite,
  },
}
