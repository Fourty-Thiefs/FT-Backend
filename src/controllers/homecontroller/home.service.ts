import { Injectable } from '@nestjs/common';

@Injectable()
export class HomeService {
  getUser() {
    console.log('get user');

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
