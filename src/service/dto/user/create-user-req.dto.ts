import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, MinLength, MaxLength } from 'class-validator';

import {
  REQUIRED_PASSWORD,
  MAXIMUM_PASSWORD_MESSAGE,
} from 'src/infrastructure/constant/validator.constant';
import { UserRole } from 'src/infrastructure/enums/user-role.enums';

export class CreateUserRequestDto {
  @ApiProperty()
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty()
  @IsNotEmpty()
  @MinLength(6, {
    message: REQUIRED_PASSWORD,
  })
  @MaxLength(20, {
    message: MAXIMUM_PASSWORD_MESSAGE,
  })
  password: string;

  @ApiProperty({ name: 'roles', enum: UserRole })
  roles: UserRole;
}
