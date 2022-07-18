variable "domain" {
  type    = string
  default = ""
}

variable "cloud" {
  type        = string
  description = "Cloud Provider (one of: digitalocean)"
  default     = "digitalocean"
}

variable "environment" {
  type    = string
  default = "production"
}

locals {
  project = basename(dirname("${path.cwd}/../../"))
  domain  = var.domain == "" ? "${local.project}.bndigital.ai" : var.domain
}
