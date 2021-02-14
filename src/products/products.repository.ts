import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
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
    return await this.productModel.insertMany(products);
  }

  async deleteAll() : Promise<any>{
      return  await this.productModel.deleteMany({});
  }
}