import { Module } from '@nestjs/common';

import { ScheduleModule } from '@nestjs/schedule';
import { HomeController } from 'modules/home/home.controller';
import { HomeService } from 'modules/home/home.service';
import { UserController } from 'modules/user/user.controller';
import { UserService } from 'modules/user/user.service';
import { ScheduleService } from 'services/schedule/backgroundJob';

import { AppController } from './app.controller';
import { AppService } from './app.service';
@Module({
  imports: [ScheduleModule.forRoot()],
  controllers: [AppController, HomeController, UserController],
  providers: [AppService, HomeService, UserService, ScheduleService],
})
export class AppModule {}
