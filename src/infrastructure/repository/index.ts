import { Model } from 'objection';

interface BaseRepository<T extends Model> {
  findAll(): Promise<T[]>;
  findOne(entity: T): Promise<T | null>;
  findById(id: string): Promise<T | null>;
  create(entity: T): Promise<T>;
  delete(entity: T | string): Promise<T>;
}

export default BaseRepository;
