import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    const ENV = process.env.NODE_ENV;
console.log("ENV",ENV)
    return this.appService.getHello();
  }
}
