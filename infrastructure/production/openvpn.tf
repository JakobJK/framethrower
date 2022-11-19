resource "aws_key_pair" "openvpn" {
  key_name   = "openvpn"
  public_key = "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAACAQDCYakLb3OvHId/sRTdlTzJbxaj98hzkHe0rOm6tAJeYQZb9VoJnL/oS6ERtDPLgs0micOGewD0Z8YvH3B0SxpkNSSSnRjGC1NOMYONhP2L8Ad4UC2VsKN6DkappYRLt0Nmg88nIkA9goBwatHCKChNsH+vNN59cnAT3KcnQ30rWXdxgF6qAV8+wUkr4x+hxWDs36oxZ+8CHWNaDBrtgqOYs6tOS5zA6kPU/KHeJp9sBoGt45jCAyxwHwb7ufmIcxeeUBAskqNyUo+TqhSZeeewVjHrVVXCgpgg1KqB3h/ImgLXYu6jv8LmhUqx2gYp/bqt8gSqD9r1Q+So8NH5Fy0IwSFyfwbMfqC2N8S6pRwp7kJGaWVgyJtKFDacUWxJcJhnIgWzNNjhyLrhjggHInZE/2hyCnX86dm4drtP5PB+J0euWFnQ4waQovtU30m8ybuFlayKhTF3xFxuqG/wN7kOuaqOyc36Ge47UyZ2u4TricyfFL+7efdsFIF/Z8RvB+YDkZduB9qqML7XKfwhUBENJvak4FiO0WuUEhDny3D4dqODXCsad1JEz9VQMDu5D5atqenl43un6TBG4/axICOLXW1ZKH+72txEisEF9xGW9UV/qfXTrKVGzIO2rJLAnn4yJ9cCAYTEDnNeFs7ybDnhpllK+hpFmLigTW+UKJTrNw== jake@Jakobs-MBP.fios-router.home"
}


resource "aws_instance" "vpn_access_server" {
  ami                         = var.openvpn_ami_id
  instance_type               = "t2.nano"
  vpc_security_group_ids      = [aws_security_group.vpn_access_server.id]
  associate_public_ip_address = true
  subnet_id                   = aws_subnet.public_a.id
  key_name                    = aws_key_pair.openvpn.key_name


  tags = merge(
    local.common_tags,
    map("Name", "${local.prefix}-openvpn")
  )
}

resource "aws_eip" "vpn_access_server" {
  instance = aws_instance.vpn_access_server.id
  vpc      = true
}


resource "aws_security_group" "vpn_access_server" {
  name        = "${local.prefix}-openaccess"
  description = "Security group for VPN access server"
  vpc_id      = aws_vpc.main.id


  tags = local.common_tags

  ingress {
    protocol    = "tcp"
    from_port   = 22
    to_port     = 22
    cidr_blocks = ["0.0.0.0/0"]
  }
  ingress {
    protocol    = "tcp"
    from_port   = 8080
    to_port     = 8080
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    protocol    = "tcp"
    from_port   = 943
    to_port     = 943
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    protocol    = "tcp"
    from_port   = 443
    to_port     = 443
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    protocol    = "udp"
    from_port   = 1194
    to_port     = 1194
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    protocol    = "-1"
    from_port   = 0
    to_port     = 0
    cidr_blocks = ["0.0.0.0/0"]
  }
}
