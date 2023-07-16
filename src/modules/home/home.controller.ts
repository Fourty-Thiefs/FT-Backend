import { Controller, Get } from '@nestjs/common';

import { HomeService } from './home.service';

import { BaseControllerWrapper } from 'infrastructure/decorator/controllerBase';

@Controller({
  path: 'home',
  version: '1',
})
@BaseControllerWrapper('home-module')
export class HomeController {
  constructor(private readonly homeService: HomeService) {}

  @Get('users')
  getUsers(): Array<any> {
    console.log('controller');

    return this.homeService.getUser();
  }

  @Get()
  getHome(): string {
    return 'Hello';
  }
}
