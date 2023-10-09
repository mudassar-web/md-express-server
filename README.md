# md-express-server
Testing Deployment on Vercel

## Demo
- [URL](https://md-express-server.vercel.app)

- [Health Check URL](https://md-express-server.vercel.app/health)

## Docker commands
```
Containerize an application

Create Dockerfile from terminal

type nul > Dockerfile

---------------------------------------------------
                Dockerfile
---------------------------------------------------

Add the below instructions in Dockerfile

FROM node:18-alpine
WORKDIR /app/md-express-server
COPY . .
RUN npm install
CMD [ "npm","start"]
EXPOSE 4000

---------------------------------------------------
                docker-compose.yml
---------------------------------------------------

Add the below instructions in Dockerfile

version: '3.9'
services:
  server:
    build: .
    ports:
      - "4000:4000"
    links:
      - bitmongo
  bitmongo:
    image: 'bitnami/mongodb'
    ports:
      - "27017:27017"

---------------------------------------------------
                docker command
---------------------------------------------------

docker images

docker ps

docker compose up

docker compose up -d

-d(detach)  to runs the container in the background.

docker compose down

```

## Authors

- [@mudassar-web](https://github.com/mudassar-web)

## License

[MIT License](LICENSE)
