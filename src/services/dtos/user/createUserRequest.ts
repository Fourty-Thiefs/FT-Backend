import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  MinLength,
  MaxLength,
  IsDate,
} from 'class-validator';

import {
  REQUIRED_PASSWORD,
  MAXIMUM_PASSWORD_MESSAGE,
} from 'infrastructure/constant/validator';
// import { UserRole } from 'infrastructure/constant/userRole';

export class CreateUserRequestDto {
  // @ApiProperty()
  // @IsEmail()
  // @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(20)
  lastName: string;

  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(20)
  firstName: string;

  // @IsDate()
  birthDate: string;

  // @ApiProperty({ name: 'roles', enum: UserRole })
  // roles: UserRole;
}
