FROM node:lts
LABEL description="Instant high-performance GraphQL API for your PostgreSQL database https://github.com/graphile/postgraphile"

ENV PORT=5000

COPY package.json .

RUN npm install --frozen-lockfile

COPY src src

EXPOSE 5000
ENTRYPOINT ["npm", "start"]
