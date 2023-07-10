import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { AppService } from './app.service';
import { MeanfulResponseInterceptor } from './interceptors/meanful-response.interceptor';
import { ApiTags } from '@nestjs/swagger';

@Controller('app')
@ApiTags('defaults')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('get-number')
  @UseInterceptors(MeanfulResponseInterceptor)
  getHello(): number {
    return this.appService.getNumber();
  }
}
