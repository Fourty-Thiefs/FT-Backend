import {
  Body,
  Controller,
  Get,
  HttpCode,
  Post,
  UseInterceptors,
} from "@nestjs/common";
import { MeanfulResponseInterceptor } from "src/interceptors/meanful-response.interceptor";
import { UserService } from "./user.service";
import { CreateUserRequestDto } from "src/service/dto/user/create-user-req.dto";
import { ApiTags } from "@nestjs/swagger";

@Controller({
  path: "user",
  version: "1",
})
@ApiTags("users")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get("users")
  @UseInterceptors(MeanfulResponseInterceptor)
  getUsers(): Array<any> {
    return this.userService.getUser();
  }

  @Get("get-home")
  @UseInterceptors(MeanfulResponseInterceptor)
  getHome(): string {
    return "Hello";
  }

  @Post("user")
  @HttpCode(201)
  @UseInterceptors(MeanfulResponseInterceptor)
  createUser(@Body() user: CreateUserRequestDto): CreateUserRequestDto {
    return user;
  }
}
