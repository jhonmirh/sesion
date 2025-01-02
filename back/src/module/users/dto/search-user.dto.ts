import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, Matches } from 'class-validator';

export class SearchUserDto {
  @ApiProperty({
    description: 'Cadena de texto a buscar en el campo "name" de los usuarios',
    example: 'John',
  })
  @IsNotEmpty({ message: 'El campo de búsqueda no puede estar vacío' })
  @IsString({ message: 'El campo de búsqueda debe ser una cadena de texto' })
  @Matches(/\S/, { message: 'El campo de búsqueda no puede ser solo espacios en blanco' })
  search: string;
}
