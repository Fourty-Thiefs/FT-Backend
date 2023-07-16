import type { Knex } from 'knex';

// Update with your config settings.

const config: { [key: string]: Knex.Config } = {
  development: {
    client: 'postgresql',
    connection: {
      database: 'FT-Shopping',
      user: 'postgres',
      password: 'admin',
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
