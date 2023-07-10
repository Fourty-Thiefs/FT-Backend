import { NestInterceptor, CallHandler, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';
import { ApiResponse } from 'src/service/dto/api-response.dto';
import { map } from 'rxjs';

export class MeanfulResponseInterceptor<T>
  implements NestInterceptor<T, ApiResponse<T>>
{
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<ApiResponse<T>> {
    console.log('custom interceptor');

    return next.handle().pipe(
      map((data) => ({
        statusCode: context.switchToHttp().getResponse().statusCode,
        message: data.message || '',
        data: data,
      })),
    );
  }
}
