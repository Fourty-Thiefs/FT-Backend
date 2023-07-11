import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HomeController } from './modules/homemodule/home.controller';
import { HomeService } from './modules/homemodule/home.service';
import { UserController } from './modules/usermodule/user.controller';
import { UserService } from './modules/usermodule/user.service';

@Module({
  imports: [],
  controllers: [AppController, HomeController, UserController],
  providers: [AppService, HomeService, UserService],
})
export class AppModule {}
