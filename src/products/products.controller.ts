import { Controller, Get, Post } from '@nestjs/common';
import { IProduct } from './interfaces/product.interface';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
    constructor(private productService: ProductsService) {}

  @Get()
  findAll(): string[] {
      console.log(process.env.MONGODB_CONNECTION)
    return this.productService.findAll();
  }

  @Post()
  async createProduct(): Promise<any> {
    return await this.productService.createProduct();
  }
}
