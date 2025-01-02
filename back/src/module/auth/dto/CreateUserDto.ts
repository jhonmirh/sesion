import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsStrongPassword,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  /**
   * Nombre del usuario.
   * @example 'John Doe'
   */
  @ApiProperty({
    example: 'John Doe',
    description: 'Nombre del usuario.',
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  @MaxLength(50)
  name: string;

  /**
   * Número de teléfono del usuario.
   * @example '+1234567890'
   */
  @ApiProperty({
    example: '+1234567890',
    description: 'Número de teléfono del usuario.',
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  @MaxLength(15)
  phone: string;

  /**
   * Correo electrónico del usuario.
   * @example 'user@example.com'
   */
  @ApiProperty({
    example: 'user@example.com',
    description: 'Correo electrónico del usuario.',
  })
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  /**
   * Contraseña del usuario.
   * @example 'Strong!Pass1'
   */
  @ApiProperty({
    example: 'Strong!Pass1',
    description: 'Contraseña del usuario.',
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

   /**
   * Documento Nacional de Identidad (DNI).
   * @example '12345678A'
   */
   @ApiProperty({
    example: '12345678A',
    description: 'Documento Nacional de Identidad (DNI).',
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  @MaxLength(15)
  dni: string;



  @IsOptional()
  @IsString()
  authProvider?: 'local' | 'google' = 'local'; // Valor predeterminado 'local'
}

