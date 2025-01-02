import { PipeTransform, Injectable, BadRequestException } from '@nestjs/common';

@Injectable()
export class ImageValidatorPipe implements PipeTransform {
  private readonly allowedTypes: string[] = ['image/jpeg', 'image/png', 'image/jpg', 'image/webp'];
  private readonly maxSize: number = 2 * 1024 * 1024; // 2 MB

  transform(file: Express.Multer.File) {
    if (!file) {
      throw new BadRequestException('No se proporcionó ninguna imagen.');
    }

    const { mimetype, size } = file;

    if (!this.allowedTypes.includes(mimetype)) {
      throw new BadRequestException('Tipo de archivo no permitido. Solo se permiten imágenes JPEG, PNG, JPG Y WEBP.');
    }

    if (size > this.maxSize) {
      throw new BadRequestException('El tamaño del archivo excede el límite permitido de 2 MB.');
    }

    return file; 
  }
}