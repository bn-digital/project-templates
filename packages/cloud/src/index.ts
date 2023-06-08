import { configure, providers, stacks } from "@bn-digital/pulumi"
import { Config } from "@pulumi/pulumi"
import "./types"

const spec = new Config("project").requireObject<ConfigSpec>("spec")

configure(spec).cloud(stacks.digitalocean.CloudNativeWebApp).deploy(providers.helm.WebAppDeployment).release()
