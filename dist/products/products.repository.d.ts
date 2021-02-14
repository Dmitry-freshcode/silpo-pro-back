import { Model } from 'mongoose';
import { IProduct } from './interfaces/product.interface';
export declare class ProductRepository {
    private productModel;
    constructor(productModel: Model<IProduct>);
    createProduct(User?: IProduct | any): Promise<IProduct>;
}
