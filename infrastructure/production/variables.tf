variable "prefix" {
  default = "ft"
}

variable "project" {
  default = "framethrower"
}

variable "contact" {
  default = "jake@framethrower.io"
}

variable "db_username" {
  description = "Username for our database across all stages"
}

variable "db_password" {
  description = "Password for our main user of the database"
}

variable "jwt_secret" {
  description = "JWT token secret for GraphQL API"
}

variable "ecr_image_api" {
  description = "ECR image for API"
  default     = "376621194508.dkr.ecr.us-east-1.amazonaws.com/framethrower-staging-api:latest"
}

variable "dns_zone_name" {
  description = "Domain name"
  default     = "framethrower.io"
}

variable "subdomain" {
  description = "Subdomain per environment"
  type        = map(string)
  default = {
    production = "www"
    staging    = "ft-staging"
    dev        = "ft-dev"
  }
}

variable "api_subdomain" {
  description = "Subdomain per environment"
  type        = map(string)
  default = {
    production = "api"
    staging    = "ft-staging-api"
    dev        = "ft-dev-api"
  }
}

variable "sls_subdomain" {
  description = "This is our Serverless Functions per Environment"
  type        = map(string)
  default = {
    production = "sls"
    staging    = "ft-staging-sls"
    dev        = "ft-dev-sls"
  }
}

variable "openvpn_ami_id" {
  default     = "ami-037ff6453f0855c46"
  description = "The ID of the openVPN access server image from AWS MarketPlace"
}
