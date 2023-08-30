# md-express-server
Testing Deployment on Vercel

## Demo
- [URL](https://md-express-server.vercel.app)

- [Health Check URL](https://md-express-server.vercel.app/health)

## Docker commands
```
Containerize an application

type nul > Dockerfile

Add the below instructions in Dockerfile

FROM node:18-alpine
WORKDIR /app/md-express-server
COPY . .
RUN npm install
CMD [ "npm","start"]
EXPOSE 4000

docker build -t md-express-server .

-t(tag)

docker run -dp 4000:4000 md-express-server

-d(detach) to runs the container in the background.
-p(publish) creates a port mapping between the host and the container.

docker ps

docker logs <container-id>

docker stop <container-id>

docker rm <container-id>

docker image rm md-express-server

```

## Authors

- [@mudassar-web](https://github.com/mudassar-web)

## License

[MIT License](LICENSE)
