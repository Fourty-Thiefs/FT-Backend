import BaseEntity from 'domains/entities/base';
import { ZodError, z } from 'zod';

const UserSchema = z.object({
  firstName: z.string().min(3).max(100),
  lastName: z.string().min(3).max(100),
  email: z.string().email('Invalid Email'),
  birthDate: z.date(),
});

class User extends BaseEntity {
  static tableName: string = 'Users';

  firstName: string;
  lastName: string;
  email: string;
  birthDate: Date;

  async $beforeInsert(): Promise<any> {
    try {
      await UserSchema.parseAsync(this);
    } catch (error) {
      throw new ZodError(error.errors);
    }
  }
}

export default User;
