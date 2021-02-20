import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { ProductsService } from 'src/products/products.service';

@Injectable()
export class TasksService {
    constructor(
      readonly productService: ProductsService,   
    ){}
  private readonly logger = new Logger(TasksService.name);

  @Cron(CronExpression.EVERY_2_HOURS)
  async handleCron() {
  const result = await this.productService.refreshProductBySilpo();
  this.logger.debug(`Cron DB refresh, result: ${result}`);
  }
}