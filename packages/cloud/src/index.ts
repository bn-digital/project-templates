import { cloud, CloudAppConfiguration, configure, helm } from "@bn-digital/pulumi"
import { Config } from "@pulumi/pulumi"

configure(new Config("project").requireObject<CloudAppConfiguration<"digitalocean">["spec"]>("spec"))
  .cloud(cloud.digitalocean.Provider)
  .deploy(helm.WebAppDeployment)
  .release()
