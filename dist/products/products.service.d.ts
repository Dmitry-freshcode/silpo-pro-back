import { IProduct } from './interfaces/product.interface';
import { ProductRepository } from './products.repository';
export declare class ProductsService {
    private productDB;
    constructor(productDB: ProductRepository);
    private readonly cats;
    findAll(): string[];
    createProduct(): Promise<IProduct>;
}
