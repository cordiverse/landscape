FROM node:22.13.0-alpine3.20

WORKDIR /app
COPY . /app
RUN corepack yarn --immutable
RUN corepack yarn workspace cordis-landscape build

FROM nginx:1.27.3-alpine-slim

RUN ["rm", "/usr/share/nginx/html/index.html", "/usr/share/nginx/html/50x.html"]

COPY --from=0 /app/nginx.conf /etc/nginx/nginx.conf
COPY --from=0 /packages/landscape/dist /usr/share/nginx/html
