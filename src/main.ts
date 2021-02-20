import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
 
  const app = await NestFactory.create(AppModule,{cors:true});
  const config = new DocumentBuilder()
  .setTitle('SilpoPro')
  .setDescription('The silpoPro API description')
  .setVersion('1.0')
  .addTag('products')
  .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(process.env.PORT || 8080);
}
bootstrap();
