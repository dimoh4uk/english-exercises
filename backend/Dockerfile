## BUILD PROJECT
FROM node:10-alpine

RUN apk add --no-cache git \
 && apk add --no-cache bash \
 && mkdir /src

WORKDIR /src

COPY . ./

RUN set -x \
 && npm install

RUN chmod +x ./start.sh

EXPOSE ${SERVICE_PORT}

CMD ./start.sh
