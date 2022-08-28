FROM node:alpine3.16

WORKDIR /usr/src/app

COPY package.json .
COPY package-lock.json .

ADD src /usr/src/app/src

RUN npm install

EXPOSE 80

CMD npm run start