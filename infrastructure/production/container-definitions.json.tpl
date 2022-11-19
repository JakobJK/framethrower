[
  {
    "name": "api",
    "image": "${api_image}",
    "essential": true,
    "memoryReservation": 512,
    "environment": [
      {
        "name": "PGHOST",
        "value": "${db_host}"
      },
      {
        "name": "PGDATABASE",
        "value": "${db_name}"
      },
      {
        "name": "REDIS_HOST",
        "value": "${redis_host}"
      },
      {
        "name": "REDIS_PORT",
        "value": "${redis_port}"
      },
      {
        "name": "PGPORT",
        "value": "5432"
      },
      {
        "name": "PGUSER",
        "value": "${db_user}"
      },
      {
        "name": "PGPASSWORD",
        "value": "${db_pass}"
      },
      {
        "name": "NODE_ENV",
        "value": "production"
      },
      {
        "name": "JWT_SECRET",
        "value": "${jwt_secret}"
      }
    ],
    "logConfiguration": {
      "logDriver": "awslogs",
      "options": {
        "awslogs-group": "${log_group_name}",
        "awslogs-region": "${log_group_region}",
        "awslogs-stream-prefix": "api"
      }
    },
    "portMappings": [
      {
        "containerPort": 5000,
        "hostPort": 5000
      }
    ]
  }
]
