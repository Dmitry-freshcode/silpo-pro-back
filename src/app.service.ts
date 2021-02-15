import { Injectable } from '@nestjs/common';
import { ProductRepository } from './products/products.repository';
import { IProduct } from './products/interfaces/product.interface';

@Injectable()
export class AppService {
  constructor(
    private productRepository: ProductRepository
    ) {}

  getHello(): string {
    return 'Hello World!';
  }

  getProductsGoogle(): any {
   
  }


  async addProductsDb (products:IProduct[]):Promise<any>{
   try{
     await this.productRepository.deleteAll();
    const result = await this.productRepository.createProductMany(products);
    return "products created"
   } catch (e) {
     console.log(e);
     throw e;
   } 
  }
}
