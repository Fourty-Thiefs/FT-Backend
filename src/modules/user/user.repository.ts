import { Inject, Injectable } from '@nestjs/common';
import User from 'domains/entities/user';
import BaseRepository from 'infrastructure/repository';
import Objection, { ModelClass } from 'objection';

@Injectable()
class UserRepository implements BaseRepository<User> {
  private readonly userEntity: ModelClass<User>;
  constructor() {
    this.userEntity = User;
  }

  async findAll(): Promise<User[]> {
    const users = await this.userEntity.query();
    return users;
  }
  async findOne(entity: User): Promise<User> {
    const user = await this.userEntity.query().findOne(entity);

    return user;
  }
  async findById(id: Objection.MaybeCompositeId): Promise<User> {
    const user = await this.userEntity.query().findById(id);

    return user;
  }
  async create(entity: User): Promise<User> {
    const newUser = await this.userEntity.query().insert(entity);

    return newUser;
  }
  async delete(entity: User): Promise<User> {
    const deletedUser = await this.userEntity.query().deleteById(entity.$id());

    return this.findById(deletedUser);
  }
}

export default UserRepository;
