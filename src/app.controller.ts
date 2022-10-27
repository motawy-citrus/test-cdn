import { Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { TestEntity } from './entities/test.entity';

@Controller('test')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/:id')
  getTest(@Param('id') id: string): Promise<TestEntity> {
    return this.appService.getTest(id);
  }

  @Post()
  createTest(): Promise<TestEntity> {
    return this.appService.createTest();
  }
}
