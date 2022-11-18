# syntax=docker/dockerfile:1
FROM nginx:1.10.01
RUN apk add --no-cache python2 g++ make
WORKDIR /app
COPY src/html/user/share/nginx/html
RUN yarn install --production
CMD ["nginx","-g","daemon off;"]
EXPOSE 3000