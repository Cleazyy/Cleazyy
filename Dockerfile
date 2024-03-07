FROM node:lts-alpine

RUN apk update && \
    npm install -g pnpm

WORKDIR /app

COPY package.json .
RUN pnpm install
COPY . .

RUN pnpm run build

EXPOSE 80

CMD ["pnpm", "run", "start"]
