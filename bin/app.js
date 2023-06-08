const path = require("path")
const strapi = require("@strapi/strapi")
strapi({
  appDir: process.env.NODE_ENV === "production" ? process.cwd() : path.join(process.cwd(), "packages", "cms"),
  distDir: path.join(process.cwd(), "packages", "cms", "dist"),
}).start()
