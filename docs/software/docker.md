# Docker

```bash
## docker run [OPTIONS] IMAGE [COMMAND] [ARGS...]
## e.g.
docker run --name your_container_name \
           -it \            ## --interactive (open STDIN) and --tty (allocate a pseudo-TTY)
           -p 80:80 \       ## --publish (map host's port 80 to container's port 80)
           -p 2233:22 \     ## also exposes the container's SSH port 22
           --gpus all \     ## access to GPUs
           ubuntu           ## image name
           # /bin/bash      ## entrypoint of the container [^1]

## press CTRL-p, CTRL-q to detach from the container and leave it running

docker ps -a  ## show all container (default shows just running)

docker stop container_name
docker start container_name
docker attach container_name  ## attach your terminal's STDIN etc. to the running container
## This can appear as if the attach command is hung. Just press any key to continue.

## create a new image from a container
docker commit container_id               ## as shown by "docker ps"
              yzhang/testimage:version1  ## [REPOSITORY[:TAG]]
docker images                            ## list images

docker rm container_name
```

[Docker CLI reference](https://docs.docker.com/engine/reference/run/)

配置 SSH 用于远程连接，以基于 Ubuntu 16.04 的镜像为例

```bash
## By default you are root user in the container
passwd  ## set password

apt update
apt install vim ssh

vim /etc/ssh/sshd_config
## set PermitRootLogin to yes

service ssh start
service ssh status

## start ssh service upon the container start
# systemctl enable ssh  ## this will not work [^1]
vim ~/.bashrc
## add "servive ssh start &> /dev/null"
## as the default entrypoint of the container is /bin/bash

## [1]: https://medium.com/swlh/docker-and-systemd-381dfd7e4628
```

```bash
## ssh to the container from another device
ssh -p 2233 root@host
```
