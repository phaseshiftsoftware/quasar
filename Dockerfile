FROM node:12

COPY ./ /app
WORKDIR /app

RUN npm install && npm run build

EXPOSE 80

ENTRYPOINT [ "node", "src/server.js" ]
