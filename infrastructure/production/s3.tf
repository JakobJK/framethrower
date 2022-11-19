

resource "aws_s3_bucket" "static" {
  bucket = "${lookup(var.subdomain, terraform.workspace)}.framethrower.io"
  acl    = "public-read"
  cors_rule {
    allowed_headers = ["*"]
    allowed_methods = ["GET", "PUT", "POST", "DELETE"]
    allowed_origins = ["*"]
    expose_headers  = []
    max_age_seconds = 0
  }

  website {
    index_document = "index.html"
    error_document = "index.html"
  }

  tags = merge(
    local.common_tags,
    map("Name", "${local.prefix}-static")
  )
}

resource "aws_s3_bucket" "video" {
  bucket = "${local.prefix}-video"
  acl    = "public-read"

  cors_rule {
    allowed_headers = ["*"]
    allowed_methods = ["GET", "PUT"]
    allowed_origins = ["*"]
    expose_headers  = []
    max_age_seconds = 0
  }

  tags = merge(
    local.common_tags,
    map("Name", "${local.prefix}-video")
  )
}


resource "aws_s3_bucket" "anim_bucket" {
  bucket = "${local.prefix}-animation"
  acl    = "public-read"

  cors_rule {
    allowed_headers = ["*"]
    allowed_methods = ["GET", "PUT"]
    allowed_origins = ["*"]
    expose_headers  = []
    max_age_seconds = 0
  }

  tags = merge(
    local.common_tags,
    map("Name", "${local.prefix}-animation")
  )
}

resource "aws_s3_bucket" "private" {
  bucket = "${local.prefix}-private"
  acl    = "private"

  # We want version control, as this bucket is to
  # keep track of all of our internal documents.

  versioning {
    enabled = true
  }

  tags = merge(
    local.common_tags,
    map("Name", "${local.prefix}-private")
  )
}

resource "aws_vpc_endpoint" "s3" {
  vpc_id       = aws_vpc.main.id
  service_name = "com.amazonaws.us-east-1.s3"

  route_table_ids = [aws_route_table.public_a.id, aws_route_table.public_b.id]

  tags = merge(local.common_tags, map("Name", "${local.prefix}-endpoint"))
}
