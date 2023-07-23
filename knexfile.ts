import type { Knex } from 'knex';

// Update with your config settings.

const config: { [key: string]: Knex.Config } = {
  [process.env.MODE]: {
    client: 'postgresql',
    connection: {
      database: process.env.DATABASE_NAME,
      user: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: './migrations',
      loadExtensions: ['.ts'], //
    },
  },

  // staging: {
  //   client: 'postgresql',
  //   connection: {
  //     database: 'FT-Shopping',
  //     user: 'postgres',
  //     password: 'admin',
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10,
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations',
  //   },
  // },

  // production: {
  //   client: 'postgresql',
  //   connection: {
  //     database: 'FT-Shopping',
  //     user: 'postgres',
  //     password: 'admin',
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10,
  //   },
  //   migrations: {
  //     directory: './migrations',
  //     loadExtensions: ['.ts'], //
  //   },
};

module.exports = config;
