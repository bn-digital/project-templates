data "github_actions_public_key" "this" {
  repository = var.repository
}
resource "github_actions_secret" "this" {
  for_each = var.secrets
  secret_name = each.key
  plaintext_value = each.value
  repository = var.repository
}
