FROM node:8

RUN groupmod -g 1000 node && usermod -u 1000 -g 1000 node

WORKDIR /usr/src/app

RUN chown -R node:node /usr/src/app

USER node

EXPOSE 3000

CMD ["npm", "start"]