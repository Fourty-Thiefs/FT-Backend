import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HomeController } from './modules/homemodule/home.controller';
import { HomeService } from './modules/homemodule/home.service';
import { UserController } from './modules/usermodule/user.controller';
import { UserService } from './modules/usermodule/user.service';
import { ScheduleService } from './service/schedule/background-job.schedule';

import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [
    ScheduleModule.forRoot(),
  ],
  controllers: [AppController, HomeController, UserController],
  providers: [AppService, HomeService, UserService, ScheduleService],
})
export class AppModule {}
