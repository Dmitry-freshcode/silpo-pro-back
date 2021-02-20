import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {IProduct} from './interfaces/product.interface';


@Injectable()
export class ProductRepository {
  constructor(
    @InjectModel('Product')
    private productModel: Model<IProduct>,
  ) {}

  async createProduct(User: IProduct | any = {}): Promise<IProduct> {
    const product = new this.productModel(User);
    return await product.save();
  }

  async createProductMany(products: IProduct[] | any = {}): Promise<any> { 
    await this.deleteAll();      
    return await this.productModel.insertMany(products);
  }

  async deleteAll() : Promise<any>{
      return  await this.productModel.deleteMany({});
  }

  async getAllProducts(
    sort,
    field,
    limit,
    skip
    ):Promise<IProduct[] | []>{
      sort = sort || 1;
      field = field || "slug";
      limit = limit || 9999;
      skip = skip || 0;       
    return await this.productModel.aggregate([
      {
          '$sort': {
            [field]: sort
          }
      }, {
          '$skip': skip
      }, {
          '$limit': limit
      }
  ]);
  }
}