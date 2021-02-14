import { HttpService } from '@nestjs/common';
import { ProductRepository } from './products/products.repository';
import { IProduct } from './products/interfaces/product.interface';
export declare class AppService {
    private httpService;
    private productRepository;
    constructor(httpService: HttpService, productRepository: ProductRepository);
    getHello(): string;
    getProductsGoogle(): any;
    getProductsSilpo(): Promise<IProduct[]>;
    addProductsDb(products: IProduct[]): Promise<any>;
}
