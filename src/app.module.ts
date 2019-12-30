import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { CatModule } from './cats/cat.module'
// import { CatController } from './cats/cat.controller';
// import { CatService } from './cats/cat.service';

import { LoggerMiddleware } from './middlewares/logger.middleware'

@Module({
  imports: [CatModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes('cats');
  }
}
// export class AppModule {}
