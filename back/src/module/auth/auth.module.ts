import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/entities/User.entity';
import { RolesService } from '../roles/roles.service';
import { RolesModule } from '../roles/roles.module';
import { Role } from 'src/entities/role.entity';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [TypeOrmModule.forFeature([User, Role]), RolesModule, UsersModule], // Asegúrate de que UsersModule esté importado
  controllers: [AuthController],
  providers: [AuthService, RolesService],
  exports: [AuthService],
})
export class AuthModule {}
