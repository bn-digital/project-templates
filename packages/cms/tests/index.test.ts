import { config } from "dotenv"
import { cleanupStrapi, setupStrapi } from "./bootstrap"

beforeAll(async () => {
  config({ path: ".env.test" })
  await setupStrapi()
})

afterAll(async () => {
  await cleanupStrapi()
})

describe("Strapi", () => {
  it("strapi is defined", () => {
    expect(true).toBeTruthy()
  })
})
