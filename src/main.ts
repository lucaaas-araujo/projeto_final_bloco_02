import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'; 

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

    const config = new DocumentBuilder()
    .setTitle('FarmaTech')
    .setDescription('Projeto Farmatech')
    .setContact("Generation Brasil","http://www.generationbrasil.online","generation@email.com")
    .setVersion('1.0')
    .addBearerAuth()
    .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('/swagger', app, document);

  // Seta o fuso horario para horario de brasilia. para garantir que as datas sejam tratadas corretamente
  process.env.TZ = '-03:00';

  app.enableCors();

  await app.listen(process.env.PORT ?? 4000);
}
bootstrap();
