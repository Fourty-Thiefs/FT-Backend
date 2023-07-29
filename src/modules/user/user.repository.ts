import { Inject, Injectable } from '@nestjs/common';
import User from 'domains/entities/user';
import BaseRepository from 'infrastructure/repository';
import Objection, { ModelClass } from 'objection';

@Injectable()
class UserRepository extends BaseRepository<User> {
  constructor() {
    super(User);
  }
}

export default UserRepository;
