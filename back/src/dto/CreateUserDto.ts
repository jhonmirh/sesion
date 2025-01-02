import { IsString, IsOptional } from 'class-validator';
// ...existing code...

export class CreateUserDto {
  // ...existing code...

  @IsString()
  @IsOptional()  
  authProvider: string;  

  // ...existing code...
}
