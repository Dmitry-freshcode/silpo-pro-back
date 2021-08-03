import { HttpModule, Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { ProductRepository } from './products.repository';
import { ProductPgSchema } from './schemas/product_postgres.schema';

@Module({
  imports: [
  HttpModule
],
  providers: [ProductsService, ProductRepository,
    {
      provide: 'ProductPgSchema',
      useValue: ProductPgSchema,
    },
  ],
  controllers: [ProductsController],
  exports:[ProductRepository,ProductsService]
})
export class ProductsModule {}
