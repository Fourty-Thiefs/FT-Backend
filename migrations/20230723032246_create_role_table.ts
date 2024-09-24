import { Knex } from 'knex';
import baseEntity from '../baseEntityMigration';

export async function up(knex: Knex): Promise<void> {
  return knex.schema
    .createTable('Roles', (table) => {
      table.increments('id').unique().notNullable();
      table.string('name').notNullable();
      table.boolean('isActive').defaultTo(1);
      baseEntity(table);
    })
    .then(() => {
      return knex.schema.createTable('UserRoles', (table) => {
        table.increments('id').unique().notNullable();
        table
          .integer('userId')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('Users');
        table
          .integer('roleId')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('Roles');
      });
    });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('UserRoles').dropTable('Roles');
}
