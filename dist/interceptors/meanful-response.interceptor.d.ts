import { NestInterceptor, CallHandler, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';
import { ApiResponse } from 'src/service/dto/api-response.dto';
export declare class MeanfulResponseInterceptor<T> implements NestInterceptor<T, ApiResponse<T>> {
    intercept(context: ExecutionContext, next: CallHandler<any>): Observable<ApiResponse<T>>;
}
