import { Bot } from './bot';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  //const app = await NestFactory.create(AppModule);
  //await app.listen(3000);

  let bot = new Bot()
  bot.listen().then(() => {
    console.log('O Lobbão está ON!!')
  }).catch((error) => {
    console.log('Azedou! Lobbão off. ', error)
  });
}
bootstrap();
