terraform {
  backend "s3" {
    bucket = "bn-digital"
    key = "github/app/terraform.tfstate"
    endpoint = "fra1.digitaloceanspaces.com"
    region = "us-east-1"
    skip_region_validation = true
    skip_credentials_validation = true
    skip_metadata_api_check = true
  }
  required_version = ">= 0.14"
}
