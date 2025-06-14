import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get<ConfigService>(ConfigService)
  const PORT = configService.get<number>("PORT", 5000)
  await app.listen(PORT);
  console.log(`Server is running on port: ${PORT}`);
}
bootstrap();
