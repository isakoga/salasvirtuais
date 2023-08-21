import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './appService';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  updateHello(): string {
    return this.appService.updateHello();
  }
}
