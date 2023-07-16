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
import { CreateUserRequestDto } from 'services/dtos/user/createUserRequest';

import { BaseControllerWrapper } from 'infrastructure/decorator/controllerBase';
import User from 'domains/entities/user';

@Controller({
  path: 'users',
  version: '1',
})
@BaseControllerWrapper('user-module')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('')
  getUsers(): Promise<User[]> {
    return this.userService.getUsers();
  }

  @Post('')
  @HttpCode(201)
  createUser(@Body() user: CreateUserRequestDto): Promise<User> {
    return this.userService.createNewUser(user);
  }

  // Test Pipe
  @Get(':id')
  async testPipe(@Param('id', ParseIntPipe) id: number) {
    return id;
  }
}
