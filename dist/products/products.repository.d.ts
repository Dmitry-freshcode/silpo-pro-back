import { IProduct } from './interfaces/product.interface';
import { ProductPgSchema } from "./schemas/product_postgres.schema";
export declare class ProductRepository {
    private readonly productModel;
    constructor(productModel: typeof ProductPgSchema);
    deleteAll(): Promise<any>;
    createProductMany(products?: IProduct[] | any): Promise<any>;
    getAllProducts(sort?: number, field?: string, limit?: number, skip?: number): Promise<ProductPgSchema[] | []>;
}
