import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import UserRepository from './user.repository';
import User from 'domains/entities/user';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [User, UserRepository, UserService],
})
export class UserModule {}
