FROM node:lts-alpine3.12

WORKDIR /app
COPY . .

ENV NODE_ENV=production

RUN npm install && \
    node db.js && \
    chown -R node:node . /home

USER node
ENTRYPOINT [ "npm", "start" ]