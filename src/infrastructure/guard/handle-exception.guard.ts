import { NotFoundException } from '../exceptions/not-found.exceptions';

export class Guard {
  public static throwIfNull(obj: any, message: string) {
    throw new NotFoundException(message);
  }
}
