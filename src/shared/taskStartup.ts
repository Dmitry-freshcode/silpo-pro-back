import { Injectable,Logger,OnApplicationBootstrap } from '@nestjs/common';
import { ProductsService } from 'src/products/products.service';

@Injectable()
export class TaskStartup implements OnApplicationBootstrap {
    constructor(
     readonly productService: ProductsService,
    ) {}
    private readonly logger = new Logger(TaskStartup.name);
    
    async onApplicationBootstrap() {   
        const result = await this.productService.refreshProductBySilpo();
        this.logger.debug(`Startup DB refresh, result: ${result}`);
    }
  }
  