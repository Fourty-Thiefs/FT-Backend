import { IDeletable } from './base-entity-deletable.utilities';
import { IKey } from './base-entity-key.utilities';
import { IUpdatable } from './base-entity-updatable.utilities';
import { ICreatable } from './base-entity-icreatable.utilities';

export class BaseEntity implements IDeletable, IUpdatable, IKey, ICreatable {
  id: string;
  createdBy: string;
  createdAt: Date;
  updatedAt: Date;
  updatedBy: string;
  deletedBy: string;
  deletedAt: Date;
}
