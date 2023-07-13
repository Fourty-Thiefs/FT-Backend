import { NotFoundException } from '../exceptions/notFound';

export class Guard {
  public static throwIfNull(_obj: any, message: string) {
    throw new NotFoundException(message);
  }
}
