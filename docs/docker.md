# Docker

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

### Docker Compose

#### Install on Linux

You can install Compose V2 by downloading the appropriate binary for your system from the project release page and copying it into $HOME/.docker/cli-plugins as docker-compose.

Run the following command to download the current stable release of Docker Compose:

```shell
mkdir -p /usr/local/lib/docker/cli-plugins
curl -SL https://github.com/docker/compose/releases/download/v2.5.0/docker-compose-linux-x86_64 -o /usr/local/lib/docker/cli-plugins/docker-compose
chmod +x /usr/local/lib/docker/cli-plugins/docker-compose
```

To verify install

```shell
docker-compose version
```

## Build

### Option A: Docker
Execute locally from each package working directory:

**For CMS**:

```shell
cd packages/cms
docker build -t cms:latest .
```

**For Website**:

```shell
cd packages/website
docker build -t website:latest .
```

---

To simplify image builds you can use [Docker Compose](#docker-compose) or [Skaffold](https://skaffold.dev)

#### Option B: Docker Compose

From project root:

```shell
docker compose build
```

#### Option C: Skaffold

From project root:

```shell
skaffold build
```

## Deployment

### Docker Compose

```shell
docker-compose up -d
```

### Kubernetes

#### Prerequisites:
- [Helm](https://github.com/helm/helm)
- [Helmfile](https://github.com/helmfile/helmfile)

```shell
helmfile --environment production apply
```

