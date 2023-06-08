import { configure, providers, stacks } from "@bn-digital/pulumi"
import { Image } from "@pulumi/docker"
import { Config } from "@pulumi/pulumi"
import { join } from "path"
import "./types"
const image = new Image("app", {
  imageName: "app",
  registry: { server: "dcr.bndigital.dev/project-templates", username: "github", password: "44-0026@e4BEa12e40f5" },
  build: {
    dockerfile: join(process.cwd(), "..", "..", "Dockerfile"),
    context: join(process.cwd(), "..", ".."),
  },
})

const spec = new Config("project").requireObject<ConfigSpec>("spec")

configure(spec).cloud(stacks.digitalocean.CloudNativeWebApp).deploy(providers.helm.WebAppDeployment).release()
