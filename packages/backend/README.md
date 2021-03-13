# Bike-shop backend

![](https://img.shields.io/github/checks-status/TicTak21/bike-shop/dev?label=build) [![codecov](https://codecov.io/gh/TicTak21/bike-shop/branch/dev/graph/badge.svg?token=QH7jjIYBv3)](https://codecov.io/gh/TicTak21/bike-shop)

## Quick start

_NOTE_: don't forget to install all dependecies in project root via `yarn`.

_NOTE_: don't forget to run docker container in project root via `docker-compose`.

Also check `.env` file and change `DATABASE_URL` if needed.
`port`, `host`, `db`, `user`, `password` should match credentials for _your_ container.

1. Generate Prisma Client

```
yarn prisma generate
```

You should see `.prisma` directory in `node_modules`

2. Push the Prisma schema state to the database

```
yarn prisma db push --preview-feature
```

3. Run backend in dev mode

```
yarn workspace backend start:dev
```

4. Navigate to [http://localhost:PORT/graphql](http://localhost:PORT/graphql]) and check if GraphQL Playground works.

Default is [http://localhost:4000/graphql](http://localhost:4000/graphql)

## Tech Stack

### Core

- Typescript
- Nestjs
- GraphQL(Apollo)

### DB

- MySQL
- Prisma

### Tests

- Jest
- Ts-Jest

### Code style

- Prettier
- Eslint

### CI

- GitHub Actions

### CD

- Docker
- Docker-compose

## Roadmap

### Files

- [ ] file uploading
- [ ] AWS S3 for images

### Deploy

- [ ] Heroku/AWS/..?

### Tests

- [ ] Run tests via Github Actions
- [ ] Tests for all services/resolvers
- [ ] 90%+ coverage
