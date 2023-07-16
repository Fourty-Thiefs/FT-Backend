import {
  Catch,
  ArgumentsHost,
  ExceptionFilter,
  HttpStatus,
} from '@nestjs/common';

import { UniqueViolationError } from 'objection';

@Catch(UniqueViolationError)
export class UniqueViolationFilter implements ExceptionFilter {
  catch(exception: typeof UniqueViolationError, host: ArgumentsHost) {
    const response = host.switchToHttp().getResponse();
    const status = HttpStatus.BAD_REQUEST;

    response.status(status).json({
      statusCode: status,
      message: exception.name,
      errors: (exception as any).nativeError,
    });
  }
}
