FROM node:16
WORKDIR /nodeapp

COPY ./package*.json ./

RUN npm install

COPY . .

ENV PORT  3000

EXPOSE $PORT

CMD ["npm","run","dev"]