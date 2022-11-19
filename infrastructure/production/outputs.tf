output "db_host" {
  value = aws_db_instance.main.address
}

output "domain" {
  value = data.aws_route53_zone.zone.name
}

output "stage" {
  value = "${terraform.workspace}"
}

# Pass these values to Serverless lambda
output "aws_subnet_private_a" {
  value = aws_subnet.private_a.id
}

# Pass these values to Serverless lambda
output "aws_subnet_private_b" {
  value = aws_subnet.private_b.id
}

output "static_bucket" {
  value = aws_s3_bucket.static.bucket
}

output "lambda_rds_sg" {
  value = aws_security_group.rds.id
}

output "lambda_sg" {
  value = aws_security_group.lambda.id
}

output "cloudfront_distribution_id" {
  value = aws_cloudfront_distribution.cdn.id
}
output "animation_bucket" {
  value = aws_s3_bucket.anim_bucket.bucket
}

output "api_endpoint" {
  value = aws_lb.api.dns_name
}

output "vpn_access_server_dns" {
  value = aws_eip.vpn_access_server.public_dns
}

// Needs to be commented out when deploying a new
output "serverless-endpoint" {
  value = aws_api_gateway_domain_name.sls_domain.domain_name
}

output "redis-reader_endpoint_address" {
  value = aws_elasticache_replication_group.redis.reader_endpoint_address
}
output "redis-primary_endpoint_address" {
  value = aws_elasticache_replication_group.redis.primary_endpoint_address
}
