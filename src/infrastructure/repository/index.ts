import Objection, { Model, ModelClass } from 'objection';

type MaybeSingleModel<T extends Model> = Objection.MaybeSingleQueryBuilder<
  Objection.QueryBuilderType<T>
>;

interface IBaseRepository<T extends Model> {
  findAll(): Promise<Awaited<Objection.QueryBuilderType<T>>>;
  findOne(entity: T): Promise<Awaited<MaybeSingleModel<T>>>;
  findById(id: string): Promise<Awaited<MaybeSingleModel<T>>>;
  create(entity: T): Promise<Awaited<MaybeSingleModel<T>>>;
  delete(entity: T | string): Promise<Awaited<MaybeSingleModel<T>>>;
}

class BaseRepository<T extends Model> implements IBaseRepository<T> {
  private readonly entity: ModelClass<T>;
  constructor(entity: ModelClass<T>) {
    this.entity = entity;
  }

  async findAll(): Promise<Awaited<Objection.QueryBuilderType<T>>> {
    const records = await this.entity.query();
    return records;
  }
  async findOne(entity: T): Promise<Awaited<MaybeSingleModel<T>>> {
    const record = await this.entity.query().findOne(entity);
    return record;
  }
  async findById(
    id: Objection.MaybeCompositeId
  ): Promise<Awaited<MaybeSingleModel<T>>> {
    const record = await this.entity.query().findById(id);

    return record;
  }
  async create(entity: T): Promise<Awaited<MaybeSingleModel<T>>> {
    const newRecord = await this.entity.query().insert(entity);

    return newRecord;
  }
  async delete(entity: T): Promise<Awaited<MaybeSingleModel<T>>> {
    const deletedRecord = await this.entity.query().deleteById(entity.$id());

    return this.findById(deletedRecord);
  }
}

export default BaseRepository;
