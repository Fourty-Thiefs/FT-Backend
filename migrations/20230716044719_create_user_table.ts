import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('Users', (table) => {
    table.increments('id').unique().notNullable();
    table.string('firstName').notNullable();
    table.string('lastName').notNullable();
    table.date('birthDate');
    table.string('email').unique().notNullable();
    table.dateTime('createdAt');
    table.integer('createdBy');
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('Users');
}
