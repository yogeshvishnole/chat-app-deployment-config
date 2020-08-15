# sppecifying a base image

FROM node:alpine

# installing some dependencies

WORKDIR /app
COPY package.json .
RUN npm install
COPY . .

CMD ["npm","run","start"]
