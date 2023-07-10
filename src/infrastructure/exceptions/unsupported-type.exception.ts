// Not Found Logic Exception

import { HttpException, HttpStatus } from '@nestjs/common';

export class UnsupportedTypeException extends HttpException {
  constructor(message: string) {
    super(
      message || 'Unsupported type exception',
      HttpStatus.UNSUPPORTED_MEDIA_TYPE,
    );
  }
}
