import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { RolesRepository } from './roles.repository';
import { Role } from 'src/entities/Role.entity';

@Injectable()
export class RolesService {
  constructor(private readonly rolesRepository: RolesRepository) {}

  async createRole(createRoleDto: CreateRoleDto): Promise<Role> {
    const existingRole = await this.rolesRepository.findByName(createRoleDto.name);
    if (existingRole) {
      throw new BadRequestException(`El rol "${createRoleDto.name}" ya existe.`);
    }
    return this.rolesRepository.createRole(createRoleDto);
  }

  async getAllRoles(): Promise<Role[]> {
    return this.rolesRepository.getAllRoles();
  }

  async getRoleByNameCliente(): Promise<Role> {
    const roleName = 'Cliente';
    const role = await this.rolesRepository.findByName(roleName);
    if (!role) {
      throw new NotFoundException(`El rol "${roleName}" no se encontró.`);
    }
    return role;
  }
  

  async deleteRoleById(id: string): Promise<void> {
    const role = await this.rolesRepository.findById(id);
    if (!role) {
      throw new NotFoundException('Rol no encontrado.');
    }
    await this.rolesRepository.deleteRoleById(id);
  }
  
}
