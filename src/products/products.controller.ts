import { Controller, Get, Post } from '@nestjs/common';
import { IProduct } from './interfaces/product.interface';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
    constructor(private productService: ProductsService) {}

  @Get()
  findAll(): string[] {
    return this.productService.findAll();
  }

  @Post()
  async createProduct(): Promise<IProduct> {
    return await this.productService.createProduct();
  }
}
