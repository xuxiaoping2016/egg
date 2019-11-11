import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // 自定义 getVersion 方法: 
  @Get('/version')
  getVersion(): Object {
    return this.appService.getVersion();
  }
  // 自定义 postIndex 方法: 
  @Post('/api')
  postIndex(): Object {
    return this.appService.getVersion();
  }
}
