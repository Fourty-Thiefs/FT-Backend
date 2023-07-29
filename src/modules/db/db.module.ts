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
              host: process.env.DATABASE_HOST,
              port: process.env.DATABASE_PORT,
              database: process.env.DATABASE_NAME,
              user: process.env.DATABASE_USERNAME,
              password: process.env.DATABASE_PASSWORD,
            },
            pool: {
              min: 2,
              max: 6,
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
