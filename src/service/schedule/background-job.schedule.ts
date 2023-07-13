import { Injectable, Logger } from "@nestjs/common";
import { Cron } from "@nestjs/schedule";
import { FTLoggerService } from "src/infrastructure/logger/ft-custom.logger";

@Injectable()
export class ScheduleService {
  private readonly logger = new Logger(ScheduleService.name);
  private readonly customLogger = new FTLoggerService(ScheduleService.name);

  @Cron("* * * * * *")
  handleCron() {
    // this.logger.debug("Called when the current second is 30s");
    // this.customLogger.logWithParams("Error", "ScheduleService");
  }
}
