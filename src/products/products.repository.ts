import { Inject } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import {IProduct} from './interfaces/product.interface';
import {ProductPgSchema} from "./schemas/product_postgres.schema";

@Injectable()
export class ProductRepository {
  constructor(
      @Inject('ProductPgSchema') private readonly productModel: typeof ProductPgSchema,
  ) {}

  async deleteAll() : Promise<any>{
      return await this.productModel.destroy({
        where: {},
        truncate: true
      });
  }

  async createProductMany(products: IProduct[] | any = {}): Promise<any> {
    await this.deleteAll();
    return this.productModel.bulkCreate(products);
  }

  async getAllProducts(
    sort = 1,
    field = "slug",
    limit = 9999,
    skip = 0
    ):Promise<ProductPgSchema[] | []>{
    return this.productModel.findAll({
        where:{},
      order:[[field, sort===1 ? 'ASC' : 'DESC']],
      limit,
      offset: skip,
    })
  }
}