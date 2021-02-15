import { ProductRepository } from './products/products.repository';
import { IProduct } from './products/interfaces/product.interface';
export declare class AppService {
    private productRepository;
    constructor(productRepository: ProductRepository);
    getHello(): string;
    getProductsGoogle(): any;
    addProductsDb(products: IProduct[]): Promise<any>;
}
