import { applyDecorators, UseInterceptors } from '@nestjs/common';
import { MeaningfulResponseInterceptor } from 'infrastructure/interceptors/meaningfulResponse';
import { ApiTags } from '@nestjs/swagger';

export function BaseControllerWrapper(tag: string) {
  /* Custom Decorator */

  return applyDecorators(
    UseInterceptors(MeaningfulResponseInterceptor),
    ApiTags(tag)
    // ApiBearerAuth() -- Option
  );
}
