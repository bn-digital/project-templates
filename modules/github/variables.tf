variable "secrets" {
  type = map(string)
  default = {}
}
variable "repository" {
  type = string
  default = "app"
}
