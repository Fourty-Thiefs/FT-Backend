import { Injectable } from '@nestjs/common';
import '../../infrastructure/extensions/string-custom.extension';

@Injectable()
export class UserService {
  getUser() {
    const response: Array<User> = [
      { name: 'Tam', age: 10 },
      { name: 'Ngoc', age: 8 },
    ];

    return response;
  }
}

interface User {
  name: string;
  age: number;
}
