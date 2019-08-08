## BUILD PROJECT
FROM node:10-alpine

RUN apk add --no-cache git \
 && apk add --no-cache bash \
 && mkdir /src

WORKDIR /src

COPY . ./

RUN set -x \
 && npm install

RUN chmod +x ./installation/npm.sh
RUN ./installation/npm.sh

#make image
FROM nginx:1.15-alpine

ARG SERVICE_PORT=8080
ENV SERVICE_PORT=${SERVICE_PORT}

RUN apk add --no-cache bash \
 && mkdir /src \
 && mkdir /installation

WORKDIR /installation

COPY --from=0 /src/dist /srv/www/
COPY installation/default.conf /etc/nginx/conf.d/
COPY installation/ ./

RUN chmod +x ./start.sh

EXPOSE ${SERVICE_PORT}

CMD ./start.sh
