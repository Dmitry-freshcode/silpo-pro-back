import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { ProductsSchema } from './schemas/products';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductRepository } from './products.repository';

@Module({
  imports: [MongooseModule.forFeature([{name:"Product", schema: ProductsSchema }])],
  providers: [ProductsService, ProductRepository
  ],
  controllers: [ProductsController],
  exports:[ProductRepository]
})
export class ProductsModule {}
