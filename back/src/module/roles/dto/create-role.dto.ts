import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, Length } from 'class-validator';

export class CreateRoleDto {
  @ApiProperty({
    example: 'Admin',
    description: 'Nombre del rol.',
  })
  @IsNotEmpty()
  @IsString()
  @Length(3, 50)
  name: string;

  @ApiProperty({
    example: 'Administrador con acceso completo a todas las funcionalidades.',
    description: 'Descripción del rol.',
  })
  @IsNotEmpty()
  @IsString()
  description: string;
}
