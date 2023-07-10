import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HomeController } from './controllers/homecontroller/home.controller';
import { HomeService } from './controllers/homecontroller/home.service';
import { UserController } from './controllers/usercontroller/user.controller';
import { UserService } from './controllers/usercontroller/user.service';

@Module({
  imports: [],
  controllers: [AppController, HomeController, UserController],
  providers: [AppService, HomeService, UserService],
})
export class AppModule {}
