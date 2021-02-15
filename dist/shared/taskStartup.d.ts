import { OnApplicationBootstrap } from '@nestjs/common';
import { ProductRepository } from 'src/products/products.repository';
import { SilpoService } from './silpo_query';
export declare class TaskStartup implements OnApplicationBootstrap {
    readonly silpoService: SilpoService;
    readonly productsRepository: ProductRepository;
    constructor(silpoService: SilpoService, productsRepository: ProductRepository);
    private readonly logger;
    onApplicationBootstrap(): Promise<void>;
}
