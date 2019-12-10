import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { CatModule } from './cats/cat.module'
// import { CatController } from './cats/cat.controller';
// import { CatService } from './cats/cat.service';

@Module({
  imports: [CatModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
