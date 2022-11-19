resource "aws_elasticache_subnet_group" "main" {

  name = "${local.prefix}-main"

  subnet_ids = [
    aws_subnet.private_a.id,
    aws_subnet.private_b.id
  ]

}

resource "aws_elasticache_replication_group" "redis" {
  replication_group_id          = "tf-rep-group-1"
  availability_zones            = ["${data.aws_region.current.name}a", "${data.aws_region.current.name}b"]
  replication_group_description = "test description"

  engine                = "redis"
  node_type             = "cache.t2.small"
  number_cache_clusters = 2
  parameter_group_name  = "default.redis3.2"
  engine_version        = "3.2.10"
  port                  = 6379
  subnet_group_name     = aws_elasticache_subnet_group.main.name
  security_group_ids    = [aws_security_group.redis.id]

  tags = merge(
    local.common_tags,
    map("Name", "${local.prefix}-redis")
  )
}


resource "aws_security_group" "redis" {
  description = "Allow access to the redis instance"
  name        = "${local.prefix}-redis-inbound-access"
  vpc_id      = aws_vpc.main.id

  ingress {
    protocol  = "tcp"
    from_port = 6379
    to_port   = 6379

    cidr_blocks = ["0.0.0.0/0"]

    security_groups = [
      aws_security_group.ecs_service.id,
    ]
  }
  tags = local.common_tags
}
