FROM node:alpine

WORKDIR '/app'

COPY package.json .

RUN npm install

RUN npm rebuild node-sass

COPY . .

EXPOSE 4200

CMD ["npm", "start"]
