provider "github" {}

module "github" {
  source = "./modules/github"
  secrets = {
    digitalocean_token = var.digitalocean_token
    docker_registry = var.docker_registry
    docker_username = var.docker_username
    docker_password = var.docker_password
    dockerhub_username = var.dockerhub_username
    dockerhub_token = var.dockerhub_token
    gh_token = var.github_token
  }
}
