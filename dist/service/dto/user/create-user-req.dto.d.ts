import { UserRole } from 'src/infrastructure/enums/user-role.enums';
export declare class CreateUserRequestDto {
    email: string;
    password: string;
    roles: UserRole;
}
