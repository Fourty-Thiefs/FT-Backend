import { Controller, Get, UseInterceptors } from "@nestjs/common";
import { MeanfulResponseInterceptor } from "src/interceptors/meanful-response.interceptor";
import { HomeService } from "./home.service";
import { ApiTags } from "@nestjs/swagger";
import { BaseControllerWrapper } from "src/infrastructure/decorator/controller-base.decorator";

@Controller({
  path: "home",
  version: "1",
})
@BaseControllerWrapper("home-module")
export class HomeController {
  constructor(private readonly homeService: HomeService) {}

  @Get("users")
  getUsers(): Array<any> {
    console.log("controller");

    return this.homeService.getUser();
  }

  @Get()
  getHome(): string {
    return "Hello";
  }
}
