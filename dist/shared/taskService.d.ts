import { ProductsService } from 'src/products/products.service';
export declare class TasksService {
    readonly productService: ProductsService;
    constructor(productService: ProductsService);
    private readonly logger;
    handleCron(): Promise<void>;
}
