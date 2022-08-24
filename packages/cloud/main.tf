module "digitalocean" {
  count  = var.cloud == "digitalocean" ? 1 : 0
  source = "github.com/bn-digital/terraform//digitalocean?ref=latest"

  project     = local.project
  domain      = var.domain
  environment = var.environment
  region      = "eu"
}
