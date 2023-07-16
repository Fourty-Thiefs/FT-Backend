import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

import { ValidationPipe, VersioningType } from '@nestjs/common';
import { ZodExceptionFilter } from 'infrastructure/exceptions/zodError';
import { UniqueViolationFilter } from 'infrastructure/exceptions/UniqueViolation';

const PORT = 8080;

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['error', 'log', 'warn', 'debug'],
  });

  app.useGlobalPipes(new ValidationPipe()).enableVersioning({
    type: VersioningType.URI,
  });

  app.useGlobalFilters(new ZodExceptionFilter(), new UniqueViolationFilter());

  const config = new DocumentBuilder()
    .setTitle('Shopping Platform')
    .setDescription('Shopping Platform API Description')
    .addTag('shopping-platform')
    .addBearerAuth()
    .addApiKey()
    .setLicense('License', 'License Url')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/swagger', app, document);

  await app.listen(PORT);
}

bootstrap();
