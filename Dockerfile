FROM node:18-alpine as build

WORKDIR /app

COPY package*.json yarn.lock ./

RUN yarn install --network-timeout 100000

COPY . .

RUN yarn build

FROM node:18-alpine

WORKDIR /app

COPY --from=build /app/dist ./dist
COPY --from=build /app/node_modules ./node_modules

EXPOSE 3000

CMD ["yarn", "start"]

