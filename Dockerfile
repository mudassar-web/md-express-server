FROM node:18-alpine
WORKDIR /app/md-express-server
COPY . .
RUN npm install
CMD [ "npm", "start" ]
EXPOSE 4000