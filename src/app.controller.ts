import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { AppService } from './app.service';
import { MeaningfulResponseInterceptor } from 'infrastructure/interceptors/meaningfulResponse';
import { ApiTags } from '@nestjs/swagger';

@Controller('/')
@ApiTags('defaults')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('get-number')
  @UseInterceptors(MeaningfulResponseInterceptor)
  getHello(): number {
    return this.appService.getNumber();
  }

  @Get('/')
  startedPage() {
    return this.appService.getHello();
  }
}
