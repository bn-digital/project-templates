terraform {
  required_providers {
    digitalocean = {
      source = "digitalocean/digitalocean"
    }
  }
  backend "s3" {
    endpoint                    = "fra1.digitaloceanspaces.com"
    key                         = "terraform/app/terraform.tfstate"
    bucket                      = "bn-digital"
    region                      = "us-east-1"
    skip_credentials_validation = true
    skip_metadata_api_check     = true
  }
}

variable "domain" {
  type = string
  default = ""
}

variable "cloud" {
  type = string
  description = "Cloud Provider (one of: digitalocean)"
  default = "digitalocean"
}

variable "environment" {
  type = string
  default = "production"
}

locals {
  project = basename(dirname("${path.cwd}/../../"))
  domain = var.domain == "" ? "${local.project}.bndigital.ai" : var.domain
}

module "digitalocean" {
  count = var.cloud == "digitalocean" ? 1 : 0
  source = "github.com/bn-digital/terraform//digitalocean?ref=latest"

  project     = local.project
  domain      = local.domain
  environment = var.environment
}