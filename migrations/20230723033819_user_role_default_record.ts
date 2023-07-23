import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex('User')
    .insert([
      {
        id: 1,
        firstName: 'Admin',
        lastName: 'Account',
        birthDate: new Date(),
        email: 'admin@gmail.com',
        isActive: true,
        createdBy: null,
        createdAt: new Date(),
        updatedAt: null,
        deletedAt: null,
      },
    ])
    .then(() => {
      return knex('Role').insert([
        {
          id: 1,
          name: 'Admin',
          createdAt: new Date(),
          updatedAt: null,
          deletedAt: null,
        },
      ]);
    })
    .then(() => {
      return knex('UserRole').insert({
        id: 1,
        userId: 1,
        roleId: 1,
      });
    });
}

export async function down(knex: Knex): Promise<void> {}
