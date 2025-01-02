import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import { ValidationPipe } from '@nestjs/common';
import { RolesRepository } from './module/roles/roles.repository';
import { AuthService } from './module/auth/auth.service';


dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  app.useGlobalPipes(new ValidationPipe({ whitelist: true }))

  app.enableCors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  });

  const swaggerConfig = new DocumentBuilder()
  .setTitle('Demo nest')
  .setDescription('Esta es una api construida por nest para ser empleada en las demos del proyecto final de la carrera Fullstack Developer de soyHenry')
  .setVersion('1.0')
  .addBearerAuth()
  .build();
  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api', app, document);

  try {
    const rolesRepository = app.get(RolesRepository); 
    await rolesRepository.seedRoles();
    console.log('Roles seed ejecutado exitosamente');
  } catch (error) {
    console.error('Error ejecutando el seed de roles:', error);
  }

  try {
    const authService = app.get(AuthService); 
    await authService.seedAdmin();
    console.log('Admin seed ejecutado exitosamente');
  } catch (error) {
    console.error('Error ejecutando el seed de admin:', error);
  }



  const port = process.env.PORT ?? 4000; // Asegúrate de que el servidor esté escuchando en el puerto correcto
  await app.listen(port);
  console.log(`Aplicación corriendo en el puerto ${port}`);
}
bootstrap();
