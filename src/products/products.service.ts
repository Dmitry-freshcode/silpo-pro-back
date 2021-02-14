import { Injectable } from '@nestjs/common';
import { IProduct } from './interfaces/product.interface';
import { ProductRepository } from './products.repository';

@Injectable()
export class ProductsService {
    constructor(
        private productDB: ProductRepository,       
      ) {}
    private readonly cats: string[] = ["one","too"];

    findAll(): string[] {
        return this.cats;
      }

    createProduct(): Promise<IProduct>{
        return this.productDB.createProduct();
    }
}
