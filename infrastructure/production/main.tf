terraform {
  backend "s3" {
    bucket         = "framethrower-terraform-remote-state"
    key            = "framethrower.tfstate"
    region         = "us-east-1"
    encrypt        = true
    dynamodb_table = "framethrower-tf-state-lock"
  }
}

provider "aws" {
  region  = "us-east-1"
  version = "~> 3.0"
}

locals {
  prefix = "${var.prefix}-${terraform.workspace}"
  common_tags = {
    Environment = terraform.workspace
    Project     = var.project
    Owner       = var.contact
    ManagedBy   = "Terraform"
  }
}

data "aws_region" "current" {}
