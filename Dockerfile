### STAGE 1: Build ###
FROM node:14.15.1 as builder

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile

COPY next.config.js next.config.js

COPY src src
COPY public public

RUN npm run build

### STAGE 2: Production Environment ###
FROM node:14.15.1-alpine3.10

WORKDIR /app

ENV NODE_ENV=production

COPY --from=builder /app/package.json /app/yarn.lock ./

RUN yarn install --frozen-lockfile --production

COPY --from=builder /app/next.config.js .

COPY --from=builder /app/.next/ ./.next/
COPY --from=builder /app/public/ ./public/

CMD ["npm", "start"]
