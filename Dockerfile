FROM node:lts-alpine as builder

RUN apk add --update --no-cache \
    ca-certificates \
    git

WORKDIR /usr/src/app
COPY package.json yarn.lock ./
RUN yarn

COPY . .
RUN yarn build 

FROM nginx:stable-alpine
COPY --from=builder /usr/src/app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf