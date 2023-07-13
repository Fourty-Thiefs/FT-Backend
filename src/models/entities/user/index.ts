import BaseEntity from 'entities/base';

export class User extends BaseEntity {
  userName: string;
  lastName: string;
  firstName: string;
  password: string;
  phoneNumber: string;
  loginCount: number;
  roles: string;
}
