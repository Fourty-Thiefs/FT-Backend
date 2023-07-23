import { Knex } from 'knex';

const baseEntity = (table: Knex.CreateTableBuilder) => {
  table.dateTime('createdAt');
  table.dateTime('updatedAt');
  table.dateTime('deletedAt');
};

export default baseEntity;
