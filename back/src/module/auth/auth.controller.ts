import {
  Controller,
  Post,
  Body,
  HttpCode,
  HttpStatus,
  UsePipes,
  ValidationPipe,
  Get,
} from '@nestjs/common';

import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { LoginUserDto } from './dto/login-auth.dto';
import { CreateUserDto } from './dto/CreateUserDto';

import { User } from 'src/entities/User.entity';
import { UsersService } from '../users/users.service';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UsersService,
  ) {}

  @ApiTags('Auth')
  @Post('signin')
  @HttpCode(HttpStatus.OK)
  signIn(@Body() userLogin: LoginUserDto) {
    return this.authService.signIn(userLogin);
  }

  @Post('register')
  @HttpCode(HttpStatus.CREATED)
  @UsePipes(new ValidationPipe({ transform: true }))
  @ApiOperation({ summary: 'Registrar un nuevo usuario' })
  @ApiResponse({
    status: 201,
    description: 'Usuario registrado exitosamente',
  })
  @ApiResponse({
    status: 400,
    description: 'Error de validación',
  })
  @ApiResponse({
    status: 409,
    description: 'Conflicto - El correo ya existe',
  })
  async registerUser(@Body() createUserDto: CreateUserDto) {
    return this.authService.createUser(createUserDto);
  }

  @Get('google-auth')
  async getUsersByGoogleAuthProvider(): Promise<User[]> {
    return this.userService.findUsersByGoogleAuthProvider();
  }
}
