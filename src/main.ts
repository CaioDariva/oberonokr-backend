import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { UnauthorizedInterceptor } from './auth/interceptors/authorized.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );
  const config = new DocumentBuilder()
  .setTitle('Documentação Oberon Sistema de Okr"s" - Grupo 2')
    .setDescription(
      'O Oberon Sistema de Okr"s" foi desenvolvido para ser simples e eficiente no acompanhamento de evolução de metas para alcançar um objetivo maior.')
    .setVersion('0.0.1')
    .addTag('Felings')
    .addTag('Kr')
    .addTag('Objectives')
    .addTag('Team')
    .addTag('User')
    .addTag('Hello')
    .addTag('Login')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('documentation', app, document);

  app.useGlobalInterceptors(new UnauthorizedInterceptor());
  await app.listen(process.env.port || 3001);
}
bootstrap();
