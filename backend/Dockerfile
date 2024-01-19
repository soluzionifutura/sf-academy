FROM node:lts-alpine

WORKDIR /backend

COPY package.json .

RUN npm install

COPY . .

EXPOSE 4000

RUN npm run build

CMD ["node", "dist/index.js"]
