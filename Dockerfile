FROM node:alpine
WORKDIR /usr/app/nameserver
COPY package*.json ./
RUN npm install

COPY . . 

EXPOSE 3002

CMD ["npm", "start" ]