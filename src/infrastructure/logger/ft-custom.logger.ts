import { Logger } from "@nestjs/common";

export class FTLoggerService extends Logger {
  logWithParams(message: string, fromService: string) {
    const dateTime = new Date().getUTCDate();

    const formattedMessage = `Something went wrong at : ${dateTime}, in service: ${fromService}, message: ${message};`;

    this.log(formattedMessage);
  }
}
