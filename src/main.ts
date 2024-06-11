/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

// eslint-disable-next-line prettier/prettier
async function bootstrap() {
  // eslint-disable-next-line prettier/prettier
  const app = await NestFactory.create(AppModule);
  // eslint-disable-next-line prettier/prettier
  app.setGlobalPrefix('api');
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );
  await app.listen(3000);
}
bootstrap();
