import { applyDecorators, UseInterceptors } from '@nestjs/common';
import { MeaningfulResponseInterceptor } from 'interceptors/meaningfulResponse';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';

export function BaseControllerWrapper(tag: string) {
  /* Custom Decorator */

  return applyDecorators(
    UseInterceptors(MeaningfulResponseInterceptor),
    ApiTags(tag)
    // ApiBearerAuth() -- Option
  );
}
