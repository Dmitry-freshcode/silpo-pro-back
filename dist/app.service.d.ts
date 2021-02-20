import { ProductRepository } from './products/products.repository';
export declare class AppService {
    private productRepository;
    constructor(productRepository: ProductRepository);
    getHello(): string;
}
