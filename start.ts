#!/bin/bash

if [ $( docker ps -a | grep backend | wc -l ) -gt 0 ]; then
  docker stop backend
  docker rm backend
  docker rmi 891377328182.dkr.ecr.us-east-1.amazonaws.com/devops-backend:latest
fi

aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin 891377328182.dkr.ecr.us-east-1.amazonaws.com/devops-backend

docker pull 891377328182.dkr.ecr.us-east-1.amazonaws.com/devops-backend:latest

docker run --env-file /opt/devops/backend/.env -dit -p 5000:5000 --restart on-failure:5 --name backend 891377328182.dkr.ecr.us-east-1.amazonaws.com/devops-backend:latest
