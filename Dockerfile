# syntax=docker/dockerfile:1

FROM node:16.3.0-alpine3.13

WORKDIR /usr/app
COPY . .
RUN npm install --force
RUN npm run build:db
EXPOSE 5000

CMD [ "npm","run","dev" ]