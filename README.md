## NodeJS API

![logo-nodejs](http://www.alex-arriaga.com/wp-content/uploads/2015/10/nodejs-logo.png)
![logo-nodejs](http://nodejs-cloud.com/img/128px/expressjs.png)

### Install Project

```bash
git clone git@github.com:shadownetX/node-js-api.git
cd node-js-api/
make build && make run && make install
```

### Project Commands

| **For short** | **Makefile command** | **Purpose**                     |
|---------------|----------------------|---------------------------------|
| build         | ```make build```     | Build app                       |
| run           | ```make run```       | Run app                         |
| nodemon       | ```make nodemon```   | Run app with monitoring         |
| install       | ```make install```   | Install app                     |
| stop          | ```make stop```      | Stop app                        |
| destroy       | ```make destroy```   | Destroy app                     |
| tests         | ```make tests```     | Test project with code coverage |
| help          | ```make help```      | Help command                    |

### Containers Commands

| **For short** | **Command**             | **Purpose**                                   |
|---------------|-------------------------|-----------------------------------------------|
| bash          | ```bin/app bash```      | Run bash for actual project                   |
| ps            | ```bin/app ps```        | List containers for actual project            |
| exec          | ```bin/app exec```      | Execute command inside app container          |
| exec-root     | ```bin/app exec-root``` | Execute command has root inside app container |

### Access To Containers

```bash
docker-compose -f docker/docker-compose.yml up nodejs
docker-compose -f docker/docker-compose.yml up mongodb
```