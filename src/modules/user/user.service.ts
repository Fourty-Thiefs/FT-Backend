import { Inject, Injectable } from '@nestjs/common';
import UserRepository from './user.repository';
import User from 'domains/entities/user';
import { CreateUserRequestDto } from 'services/dtos/user/createUserRequest';

@Injectable()
export class UserService {
  constructor(
    @Inject(UserRepository) private readonly userRepository: UserRepository
  ) {}

  getUsers() {
    return this.userRepository.findAll();
  }

  async createNewUser(user: CreateUserRequestDto) {
    const newUser = User.fromJson({
      ...user,
      birthDate: new Date(user.birthDate),
    });

    return this.userRepository.create(newUser);
  }
}
