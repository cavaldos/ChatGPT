# Chat GPT clone

![](/screenshot/1.png){: width="200px"}
![](/screenshot/2.png){: width="200px"}
![](/screenshot/3.png){: width="200px"}
## Install

1. Clone repository

```shell
 git clone https://github.com/cavaldos/ChatGPT.git
```

```shell

 npm install # pnpm install
```

```shell
 npm run dev # npm run dev
```

## Docker

### Build docker

1.Build your updated version of the image, using the `docker build` command.

```shell
docker build -t chat-gpt .
```

2.Start a new container using the updated code.

```shell
docker run -dp 3000:3000  chat-gpt .
```

### Remove the old container

1.Get the ID of the container by using the `docker ps` command.

```shell
docker ps -a
```

2. Use the docker stop command to stop the container. Replace `<the-container-id>` with the ID from docker ps.

```shell
 docker stop <the-container-id>
```

3.Once the container has stopped, you can remove it by using the `docker rm` command.

```shell
 docker rm <the-container-id>
```
