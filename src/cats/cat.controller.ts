import { Controller, Get, Post, Req, HttpCode, Redirect, Query, Param } from '@nestjs/common';
import { CatService } from './cat.service';
import { Request } from 'express'

@Controller('cats')
export class CatController {
  constructor(private readonly catService: CatService) {}
  @Post()
  create(): string {
    return 'This action adds a new cat';
  }

  @Get('ab*cd')
  // @HttpCode(204)
  // @Redirect('https://nestjs.com', 301)
  findAll(@Req() request: Request): string {
    return 'This action returns all cats';
  }
  // 获取查询字符串参数
  @Get('docs')
  @Redirect('https://docs.nestjs.com', 302)
  getDocs(@Query('version') version) {
    if (version && version === '5') {
      return { url: 'https://docs.nestjs.com/v5/' };
    }
  }

  // 获取路由路径参数
  @Get(':id')
  findOne(@Param() params): string {
    console.log(params.id);
    return `This action returns a #${params.id} cat`;
  }
}
