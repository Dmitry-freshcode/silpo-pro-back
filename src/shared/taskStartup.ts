import { Injectable,Logger,OnApplicationBootstrap } from '@nestjs/common';
import { ProductRepository } from 'src/products/products.repository';
import { SilpoService } from './silpo_query';

@Injectable()
export class TaskStartup implements OnApplicationBootstrap {
    constructor(
        readonly silpoService : SilpoService,
        readonly productsRepository: ProductRepository,
    ) {}
    private readonly logger = new Logger(TaskStartup.name);
    
    async onApplicationBootstrap() {   
        const products = await this.silpoService.getSilpoProducts();  
        await this.productsRepository.createProductMany(products);
        this.logger.debug('DB refresh');
    }
  }
  