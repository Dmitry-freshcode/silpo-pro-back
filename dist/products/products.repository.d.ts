import { Model } from 'mongoose';
import { IProduct } from './interfaces/product.interface';
export declare class ProductRepository {
    private productModel;
    constructor(productModel: Model<IProduct>);
    createProduct(User?: IProduct | any): Promise<IProduct>;
    createProductMany(products?: IProduct[] | any): Promise<any>;
    deleteAll(): Promise<any>;
    getAllProducts(sort: any, field: any, limit: any, skip: any): Promise<IProduct[] | []>;
}
