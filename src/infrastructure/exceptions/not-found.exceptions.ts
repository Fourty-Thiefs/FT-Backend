// Not Found Logic Exception

import { HttpException, HttpStatus } from '@nestjs/common';

export class NotFoundException extends HttpException {
  constructor(message: string) {
    super(message || 'Not Found Logic Exception', HttpStatus.NOT_FOUND);
  }
}
