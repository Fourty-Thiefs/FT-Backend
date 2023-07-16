FROM node:16.14.0-alpine AS development

WORKDIR /usr/src/app

COPY package*.json ./
COPY yarn.lock ./
RUN yarn --only=development

COPY . .

RUN npm run build

FROM node:16.14.0-alpine as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY package*.json ./
COPY yarn.lock /usr/src/app/
RUN yarn --only=production

COPY . .

COPY --from=development /usr/src/app/dist ./dist

CMD ["node", "dist/main"]