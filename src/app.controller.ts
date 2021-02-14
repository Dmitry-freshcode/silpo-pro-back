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
    const test = await this.appService.getProductsSilpo();  
    //console.log(test.data.data.offersSplited.products)  
    return test;
  }


  @Get('/google')
  async getGoogle(): Promise<any> {
    const test = await this.appService.getProductsGoogle(); 
  
    return test;
  }
}
