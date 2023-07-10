import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Store Management')
    .setDescription('The store management API description')
    .setVersion('1.0')
    .addTag('store')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('index.html', app, document);

  app.useGlobalPipes(new ValidationPipe());

  await app.listen(8080);
}

bootstrap();
