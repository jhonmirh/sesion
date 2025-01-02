import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  IsStrongPassword,
  MaxLength,
  Min,
  MinLength,
} from 'class-validator';

export class LoginUserDto {


   /**
   * El correo electrónico del usuario.
   * @example user@example.com
   */
   @ApiProperty({
    example: 'user@example.com',
    description: 'El correo electrónico del usuario.'
  })
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  /**
     * La contraseña ya creada del usuario.
     * @example Strong!Pass1
     */
  @ApiProperty({
    example: 'Strong!Pass1',
    description: 'La contraseña ya creada del usuario.'
  })
  @IsString()
  @IsNotEmpty()
  @IsStrongPassword({
    minLength: 8,
    minLowercase: 1,
    minUppercase: 1,
    minNumbers: 1,
    minSymbols: 1,
  })
  @MinLength(8)
  @MaxLength(15)
  password: string;
}
