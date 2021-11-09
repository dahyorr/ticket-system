FROM nginx:1.21.3-alpine

RUN rm /etc/nginx/conf.d/default.conf
COPY ./nginx-selfsigned.crt /etc/ssl/certs/nginx-selfsigned.crt
COPY ./nginx-selfsigned.key /etc/ssl/private/nginx-selfsigned.key
COPY ./nginx.conf /etc/nginx/conf.d
