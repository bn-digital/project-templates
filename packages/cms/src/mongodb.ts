import { ObjectId } from 'mongodb'
import { existsSync, readFileSync } from 'fs'
import { connect, Connection, ConnectionOptions, Promise } from 'mongoose'
import { resolve } from 'path'
import { MongoMemoryServer } from 'mongodb-memory-server'
import { config } from 'dotenv'

const rootDir = resolve(__dirname, '..')
config({ path: `${rootDir}/.env` })
const dbPath = `${rootDir}/.tmp`
const dbName = process.env.MONGODB_DATABASE ?? 'strapi'
const uri = `mongodb://${process.env.MONGODB_HOST ?? 'localhost'}:${process.env.MONGODB_PORT ?? 27017}`
const port = +(process.env.MONGODB_PORT ?? 27017)

/**
 * Performs connection to database
 * @param mongoServer
 */
function connectToDatabase(mongoServer: MongoMemoryServer): Promise<Connection> {
  const mongooseOpts: ConnectionOptions = {
    promiseLibrary: Promise,
    useUnifiedTopology: true,
    useNewUrlParser: true,
  }
  return mongoServer
    .start()
    .then(() => connect(uri, mongooseOpts))
    .then(mongoose => mongoose.connection.useDb(dbName))
    .finally(() => console.log(`MongoDB successfully connected`))
}

function seedData(db: Connection, collections: string[]) {
  collections.forEach(name => {
    const filePath = `${dataDir}/${name}.json`
    // eslint-disable-next-line
    const data: Record<string, any>[] = existsSync(filePath) ? JSON.parse(readFileSync(filePath, 'utf-8')) : []
    data.forEach(document => {
      Object.keys(document).forEach(key => {
        if (key == '_id') {
          document[key] = new ObjectId(document[key])
        }
      })
      return db.collection(name).findOneAndReplace({ _id: document._id }, document, { upsert: true })
    })
  })
}

const dataDir = `${rootDir}/docker-entrypoint-initdb.d`
const collections = []

connectToDatabase(
  new MongoMemoryServer({
    binary: { downloadDir: `${rootDir}/bin`, version: process.env.MONGODB_VERSION ?? '4.4.0' },
    instance: {
      storageEngine: 'wiredTiger',
      dbName,
      dbPath,
      port,
    },
  }),
).then(db => seedData(db, collections))
