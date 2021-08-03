import { ProductsService } from './products.service';
import { Request } from 'express';
import { ProductPgSchema } from "./schemas/product_postgres.schema";
export declare class ProductsController {
    private productService;
    constructor(productService: ProductsService);
    getAll(request: Request): Promise<ProductPgSchema[]>;
}
