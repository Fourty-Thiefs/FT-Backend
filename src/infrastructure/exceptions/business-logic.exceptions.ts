// Business Logic Exception

import { HttpException, HttpStatus } from '@nestjs/common';

export class BusinessLogicException extends HttpException {
  constructor(message: string) {
    super(message || 'Business Logic Exception', HttpStatus.BAD_REQUEST);
  }
}
