import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { ScheduleService } from 'services/schedule/backgroundJob';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from 'modules/user/user.module';
import DbModule from 'modules/db/db.module';
import { HomeModule } from 'modules/home/home.module';

@Module({
  imports: [ScheduleModule.forRoot(), DbModule, HomeModule, UserModule],
  controllers: [AppController],
  providers: [AppService, ScheduleService],
})
export class AppModule {}
