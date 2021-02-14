import { IProduct } from './interfaces/product.interface';
import { ProductsService } from './products.service';
export declare class ProductsController {
    private productService;
    constructor(productService: ProductsService);
    findAll(): string[];
    createProduct(): Promise<IProduct>;
}
