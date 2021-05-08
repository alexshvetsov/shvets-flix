
provider "aws" {
  region     = "eu-west-2"
}

terraform {
  backend "s3" {
    bucket     = "app-shvets-tf-state"
    key        = "app-shvets.tfstate"
    region     = "eu-west-2"
    encrypt    = true
  }
}

locals {
  prefix = "${var.prefix}-${terraform.workspace}"
  common_tags = {
    Environment = terraform.workspace
    Project     = var.project
    ManangeBy   = "Terraform"
    Owner       = "Alex Shvetsov"
  }
}