import { applyDecorators, UseInterceptors } from "@nestjs/common";
import { MeanfulResponseInterceptor } from "src/interceptors/meanful-response.interceptor";
import { ApiTags, ApiBearerAuth } from "@nestjs/swagger";

export function BaseControllerWrapper(tag: string) {
  /* Custom Decorator */

  return applyDecorators(
    UseInterceptors(MeanfulResponseInterceptor),
    ApiTags(tag)
    // ApiBearerAuth() -- Option
  );
}
