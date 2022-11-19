data "aws_route53_zone" "zone" {
  name = "${var.dns_zone_name}."
}


resource "aws_acm_certificate" "cert" {
  domain_name               = var.dns_zone_name
  validation_method         = "DNS"
  subject_alternative_names = ["*.framethrower.io"]
  tags                      = local.common_tags

  lifecycle {
    create_before_destroy = true
  }
}

resource "aws_route53_record" "ownership" {
  zone_id = data.aws_route53_zone.zone.zone_id
  name    = "_github-challenge-framethrower-io.framethrower.io"
  type    = "TXT"
  ttl     = "300"
  records = ["0d8cc0202b"]
}

resource "aws_route53_record" "api" {
  zone_id = data.aws_route53_zone.zone.zone_id
  name    = "${lookup(var.api_subdomain, terraform.workspace)}.${data.aws_route53_zone.zone.name}"
  type    = "CNAME"
  ttl     = "300"
  lifecycle {
    create_before_destroy = false
  }
  records = [aws_lb.api.dns_name]
}



resource "aws_route53_record" "cert_validation" {

  for_each = {
    for dvo in aws_acm_certificate.cert.domain_validation_options : dvo.domain_name => {
      name   = dvo.resource_record_name
      record = dvo.resource_record_value
      type   = dvo.resource_record_type
    }
  }

  allow_overwrite = true
  name            = each.value.name
  type            = each.value.type
  zone_id         = data.aws_route53_zone.zone.zone_id
  records         = [each.value.record]
  ttl             = "60"
}



resource "aws_acm_certificate_validation" "cert" {
  certificate_arn         = aws_acm_certificate.cert.arn
  validation_record_fqdns = [for record in aws_route53_record.cert_validation : record.fqdn]
}

resource "aws_route53_record" "pwa" {
  zone_id = data.aws_route53_zone.zone.zone_id
  name    = "${lookup(var.subdomain, terraform.workspace)}.${data.aws_route53_zone.zone.name}"
  type    = "A"

  lifecycle {
    create_before_destroy = true
  }

  alias {
    name                   = aws_cloudfront_distribution.cdn.domain_name
    zone_id                = aws_cloudfront_distribution.cdn.hosted_zone_id
    evaluate_target_health = false
  }
}


// Serverless GATEWAY
// Needs to be commented out when deploying a new environment!
data "aws_api_gateway_rest_api" "sls" {
  name = "${terraform.workspace}-serverless"
}

resource "aws_api_gateway_domain_name" "sls_domain" {
  certificate_arn = aws_acm_certificate.cert.arn
  domain_name     = "${lookup(var.sls_subdomain, terraform.workspace)}.${data.aws_route53_zone.zone.name}"
}

resource "aws_api_gateway_base_path_mapping" "base_path_mapping" {
  api_id      = data.aws_api_gateway_rest_api.sls.id
  domain_name = aws_api_gateway_domain_name.sls_domain.domain_name
  stage_name  = terraform.workspace
}

resource "aws_route53_record" "sls_domain" {
  name    = aws_api_gateway_domain_name.sls_domain.domain_name
  type    = "A"
  zone_id = data.aws_route53_zone.zone.zone_id

  lifecycle {
    create_before_destroy = true
  }

  alias {
    evaluate_target_health = true
    name                   = aws_api_gateway_domain_name.sls_domain.cloudfront_domain_name
    zone_id                = aws_api_gateway_domain_name.sls_domain.cloudfront_zone_id
  }
}

