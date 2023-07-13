import {
  Body,
  Controller,
  Get,
  HttpCode,
  Post,
  Param,
  ParseIntPipe,
} from "@nestjs/common";
import { MeanfulResponseInterceptor } from "src/interceptors/meanful-response.interceptor";
import { UserService } from "./user.service";
import { CreateUserRequestDto } from "src/service/dto/user/create-user-req.dto";
import { ApiTags } from "@nestjs/swagger";
import { BaseControllerWrapper } from "src/infrastructure/decorator/controller-base.decorator";

@Controller({
  path: "user",
  version: "1",
})
@BaseControllerWrapper("user-module")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get("users")
  getUsers(): Array<any> {
    return this.userService.getUser();
  }

  @Get("get-home")
  getHome(): string {
    return "Hello";
  }

  @Post("user")
  @HttpCode(201)
  createUser(@Body() user: CreateUserRequestDto): CreateUserRequestDto {
    return user;
  }

  // Test Pipe
  @Get(":id")
  async testPipe(@Param("id", ParseIntPipe) id: number) {
    return id;
  }

  @Get("/test")
  testReq() {}
}
