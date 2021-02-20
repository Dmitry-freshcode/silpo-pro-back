import { IProduct } from "src/products/interfaces/product.interface";
import { HttpService } from '@nestjs/common';
export declare class SilpoService {
    private httpService;
    constructor(httpService: HttpService);
    private readonly query;
    getSilpoProducts(): Promise<IProduct[]>;
}
