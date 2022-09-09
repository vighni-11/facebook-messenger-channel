FROM node:lts-alpine

LABEL author="Vighnesh KSP"
LABEL channel="facebook messenger"

COPY package*.json .

RUN npm ci

WORKDIR /var/channels/facebook-messenger-channel/

COPY dist/ ./

CMD [ "node", "index.js" ]
