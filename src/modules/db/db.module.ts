import { Module } from '@nestjs/common';
import { ObjectionModule } from '@willsoto/nestjs-objection';
import BaseEntity from 'domains/entities/base';
import User from 'domains/entities/user';

@Module({
  imports: [
    ObjectionModule.registerAsync({
      useFactory: () => {
        return {
          Model: BaseEntity,
          config: {
            client: 'postgresql',
            connection: {
              host: 'localhost',
              port: 5432,
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
              loadExtensions: ['.ts'],
            },
          },
        };
      },
    }),
    ObjectionModule.forFeature([User]),
  ],
  providers: [User],
  exports: [ObjectionModule, User],
})
class DBModule {}

export default DBModule;
