import '../../infrastructure/extensions/string-custom.extension';
export declare class UserService {
    getUser(): User[];
}
interface User {
    name: string;
    age: number;
}
export {};
