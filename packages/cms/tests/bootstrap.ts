import Strapi from "@strapi/strapi"
import * as fs from "fs"

let instance

async function setupStrapi() {
  if (!instance) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    await Strapi().load()
    instance = strapi
  }
  await instance.server.mount()

  return instance
}

async function cleanupStrapi() {
  const dbSettings = strapi.config.get("database.connection")
  console.log(dbSettings)
  //close server to release the db-file
  await strapi.server.httpServer.close()

  // close the connection to the database before deletion
  await strapi.db.connection.destroy()

  //delete test database after all tests have completed
  if (dbSettings && dbSettings.connection && dbSettings.connection.filename) {
    const tmpDbFile = dbSettings.connection.filename
    if (fs.existsSync(tmpDbFile)) {
      fs.unlinkSync(tmpDbFile)
    }
  }
}

export { setupStrapi, cleanupStrapi }
