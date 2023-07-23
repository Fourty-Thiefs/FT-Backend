import { Knex } from 'knex';
import baseEntity from '../baseEntityMigration';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('User', (table) => {
    table.increments('id').unique().notNullable();
    table.string('firstName').notNullable();
    table.string('lastName').notNullable();
    table.date('birthDate');
    table.string('email').unique().notNullable();
    table.boolean('isActive');
    table.integer('createdBy');
    baseEntity(table);
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('User');
}
