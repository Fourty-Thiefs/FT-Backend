import {
  Body,
  Controller,
  Get,
  HttpCode,
  Post,
  Param,
  ParseIntPipe,
} from '@nestjs/common';

import { UserService } from './user.service';
import { CreateUserRequestDto } from 'dtos/user/createUserRequest';

import { BaseControllerWrapper } from 'infrastructure/decorator/controller-base';

@Controller({
  path: 'user',
  version: '1',
})
@BaseControllerWrapper('user-module')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('users')
  getUsers(): Array<any> {
    return this.userService.getUser();
  }

  @Get('get-home')
  getHome(): string {
    return 'Hello';
  }

  @Post('user')
  @HttpCode(201)
  createUser(@Body() user: CreateUserRequestDto): CreateUserRequestDto {
    return user;
  }

  // Test Pipe
  @Get(':id')
  async testPipe(@Param('id', ParseIntPipe) id: number) {
    return id;
  }

  @Get('/test')
  testReq() {}
}
