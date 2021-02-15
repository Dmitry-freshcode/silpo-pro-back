import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/silpo')
  async getSilpo():  Promise<any> {
    return ;
  }


  @Get('/google')
  async getGoogle(): Promise<any> {     
    return ;
  }
}
