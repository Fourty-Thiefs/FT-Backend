import { UserService } from './user.service';
import { CreateUserRequestDto } from 'src/service/dto/user/create-user-req.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    getUsers(): Array<any>;
    getHome(): string;
    createUser(user: CreateUserRequestDto): CreateUserRequestDto;
}
