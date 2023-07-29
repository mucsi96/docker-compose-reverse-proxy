FROM node:18

WORKDIR /usr/src/app

COPY package.json yarn.lock ./

RUN yarn --frozen-lockfile --production

COPY . .

EXPOSE 8080

CMD [ "node", "logger.js" ]