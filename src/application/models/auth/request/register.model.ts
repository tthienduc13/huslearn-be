import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class RegisterRequestModel {
  @ApiProperty()
  @IsString({
    message: 'Identifier must be a string',
  })
  @IsEmail({}, { message: 'Invalid email' })
  @IsNotEmpty({ message: "Identifier can't be empty" })
  identifier: string;

  @ApiProperty()
  @IsString({
    message: 'Password must be a string',
  })
  @IsNotEmpty({ message: "Password can't be empty" })
  password: string;
}
