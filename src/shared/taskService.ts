import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { ProductRepository } from 'src/products/products.repository';
import { SilpoService } from './silpo_query';

@Injectable()
export class TasksService {
    constructor(
        readonly silpoService : SilpoService,
        readonly productsRepository: ProductRepository,
    ){}
  private readonly logger = new Logger(TasksService.name);

  @Cron(CronExpression.EVERY_2_HOURS)
  async handleCron() {
    const products = await this.silpoService.getSilpoProducts();
    await this.productsRepository.createProductMany(products);
    this.logger.debug('DB refresh');
  }
}