FROM node:alpine as build
WORKDIR /app
COPY src ./src
COPY package.json yarn.lock tsconfig.json tsconfig.build.json nest-cli.json ./
RUN yarn install --frozen-lockfile && yarn build

FROM node:alpine as prod
COPY --from=build app/dist ./dist
COPY package.json yarn.lock .env ./
RUN yarn install --production=true
EXPOSE 3000
CMD ["yarn", "start:prod"]