## BUILD PROJECT
FROM node:10-alpine

RUN apk add --no-cache git \
 && apk add --no-cache bash \
 && mkdir /src

WORKDIR /src

COPY . ./

RUN chmod +x ./installation/start.sh

EXPOSE ${SERVICE_PORT}

CMD ./installation/start.sh

