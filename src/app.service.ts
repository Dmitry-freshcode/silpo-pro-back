import { Injectable } from '@nestjs/common';
import { ProductRepository } from './products/products.repository';

@Injectable()
export class AppService {
  constructor(
    private productRepository: ProductRepository
    ) {}

  getHello(): string {
    return 'Welcome, it is SilpoPro server';
  }

}
