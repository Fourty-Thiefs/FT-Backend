import { JSONSchema, Model } from 'objection';

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

export default class BaseEntity extends Model {
  static get modelPaths() {
    return [__dirname];
  }

  createdBy: string;
  createdAt: Date;

  static get jsonSchema(): JSONSchema {
    return {
      type: 'object',
      properties: {
        createdAt: {
          type: 'string',
        },
        createdBy: {
          type: 'string',
        },
      },
    };
  }

  $beforeInsert(): void | Promise<any> {
    this.createdAt = new Date();
    this.createdBy = null;
  }
}
