import { OnApplicationBootstrap } from '@nestjs/common';
import { ProductsService } from 'src/products/products.service';
export declare class TaskStartup implements OnApplicationBootstrap {
    readonly productService: ProductsService;
    constructor(productService: ProductsService);
    private readonly logger;
    onApplicationBootstrap(): Promise<void>;
}
