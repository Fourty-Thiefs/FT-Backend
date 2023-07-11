import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { MeanfulResponseInterceptor } from 'src/interceptors/meanful-response.interceptor';
import { HomeService } from './home.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('home')
@ApiTags('homes')
export class HomeController {
  constructor(private readonly homeService: HomeService) {}

  @Get('users')
  @UseInterceptors(MeanfulResponseInterceptor)
  getUsers(): Array<any> {
    console.log('controller');

    return this.homeService.getUser();
  }

  @Get()
  getHome(): string {
    return 'Hello';
  }
}
