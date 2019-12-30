import { Controller, Get, Post, Req, Body, HttpCode, Redirect, Query, Param, HttpException, HttpStatus, UseGuards } from '@nestjs/common';
import { CreateCatDto } from './create-cat.dto';
import { RolesGuard } from '../guard/roles.guard';
import { CatService } from './cat.service';
import { Request } from 'express'
import { Cat } from './cat.interface'

@Controller('cats')
export class CatController {
  constructor(private readonly catService: CatService) {}
  @Post()
  create(@Body() createCatDto: CreateCatDto): string {
    console.log(createCatDto)
    this.catService.create(createCatDto)
    return 'This action adds a new cat';
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    // throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    return this.catService.findAll();
  }

  @Get('ab*cd')
  @HttpCode(204)
  @Redirect('https://nestjs.com', 301)
  findAll2(@Req() request: Request): string {
    return 'Tnvmnvmis action returns all cats';
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
  @UseGuards(RolesGuard)
  findOne(@Param() params): string {
    console.log(params.id);
    return `This action returns a #${params.id} cat`;
  }
}
