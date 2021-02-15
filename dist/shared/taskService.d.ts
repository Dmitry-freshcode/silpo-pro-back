import { ProductRepository } from 'src/products/products.repository';
import { SilpoService } from './silpo_query';
export declare class TasksService {
    readonly silpoService: SilpoService;
    readonly productsRepository: ProductRepository;
    constructor(silpoService: SilpoService, productsRepository: ProductRepository);
    private readonly logger;
    handleCron(): Promise<void>;
}
