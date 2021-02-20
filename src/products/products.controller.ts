import { Controller, Get, Post, Req } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Request } from 'express';
import { ProductSendDto } from './dto/product.dto';

@Controller('products')
export class ProductsController {
    constructor(private productService: ProductsService) {}

  @Get()
  async getAll(@Req() request: Request) : Promise<ProductSendDto[]>{ 
    const sort = Number(request.query.sort as string);
    const field = request.query.field as string;
    const limit = Number(request.query.limit as string);
    const skip = Number(request.query.skip as string);
    return await this.productService.getProducts(sort, field,limit,skip);
  }

  // @Post()
  // async createProduct(): Promise<any> {
  //   return await this.productService.createProduct();
  // }
}
