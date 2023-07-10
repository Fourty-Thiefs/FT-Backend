import { BaseEntity } from 'src/infrastructure/utilities/baseEntity/base-entity.utilities';
export declare class User extends BaseEntity {
    userName: string;
    lastName: string;
    firstName: string;
    password: string;
    phoneNumber: string;
    loginCount: number;
    roles: string;
}
