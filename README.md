# Decimal ![version](https://img.shields.io/github/v/tag/gajaguar/decimal?label=version) ![license](https://img.shields.io/github/license/gajaguar/decimal)

> By: [G.A.JAGUAR](https://github.com/gajaguar)

A lightweight tool intended to treatment of float numbers in JavaScrtipt.

![typescript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![jest](https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white)
![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)
![docker](https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white)
![shell-script](https://img.shields.io/badge/Shell_Script-121011?style=for-the-badge&logo=gnu-bash&logoColor=white)
![babel](https://img.shields.io/badge/Babel-F9DC3E?style=for-the-badge&logo=babel&logoColor=white)
![eslint](https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white)
![prettier](https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E)

## Build Setup

### Docker

#### Fast setup (only linux os)

```bash
# build docker container and install dependencies.
sh install.sh
```

#### Manual

```bash
# create a docker image
docker-compose build
```

```bash
# install dependencies
docker-compose run --rm server pnpm i
```

```bash
# build for production
docker-compose run --rm server yarn build
```

### Local

```bash
# install dependencies
# pnpm (recommended to save disk space)
pnpm i
# or with yarn
yarn
# or native
npm install
```

```bash
# build for production
pnpm build
```
