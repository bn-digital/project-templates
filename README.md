# Brand New App

## Prerequisites

### Docker Engine

#### Debian

1. Older versions of Docker were called docker, docker.io, or docker-engine. If these are installed, uninstall them:

```shell
sudo apt-get remove docker docker-engine docker.io containerd runc
```

2. Update the apt package index and install packages to allow apt to use a repository over HTTPS:

```shell
sudo apt-get update
sudo apt-get install ca-certificates curl gnupg lsb-release
```

3. Add Docker’s official GPG key:

```shell
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o
/usr/share/keyrings/docker-archive-keyring.gpg
```

Use the following command to set up the stable repository. To add the nightly or test repository, add the word nightly or test (or both)
after the word stable in the commands below. Learn about nightly and test channels.

```shell
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu \
  $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
```

#### CentOS

1. Ensure previous installation is cleaned up

```shell
yum remove docker docker-client docker-client-latest docker-common docker-latest docker-latest-logrotate docker-logrotate docker-engine
```

2. Add repository

```shell
yum install -y yum-utils
yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo
```

3. Install required dependencies

```shell
yum install docker-ce docker-ce-cli containerd.io
```

6. Start application container

```shell
docker run --name=website -it -d -p 80:5000 website:latest 
```

## Stopping

docker stop website

## Build

Execute locally from project root:

```shell
docker build -t website:latest --target=website .
```

## Further update

Execute on server:

```shell
docker pull dcr.bndigital.dev/yieldapp/website:latest
docker restart yieldapp
```