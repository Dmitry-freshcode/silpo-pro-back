import { HttpService } from '@nestjs/common';
import { Product } from "src/products/products.service";
export declare class SilpoService {
    private httpService;
    constructor(httpService: HttpService);
    private readonly query;
    getSilpoProducts(): Promise<Product[]>;
}
