import { ProductsService } from './products.service';
import { Request } from 'express';
import { ProductSendDto } from './dto/product.dto';
export declare class ProductsController {
    private productService;
    constructor(productService: ProductsService);
    getAll(request: Request): Promise<ProductSendDto[]>;
}
