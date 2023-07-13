export interface IKey {
  readonly id: string;
}

export interface ICreatable {
  createdBy: string;
  createdAt: Date;
}

export class IDeletable {
  deletedBy: string;
  deletedAt: Date;
}

export interface IUpdatable {
  updatedAt: Date;
  updatedBy: string;
}

export default class BaseEntity
  implements IDeletable, IUpdatable, IKey, ICreatable
{
  id: string;
  createdBy: string;
  createdAt: Date;
  updatedAt: Date;
  updatedBy: string;
  deletedBy: string;
  deletedAt: Date;
}
