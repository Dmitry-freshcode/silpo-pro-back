import { ProductRepository } from './products.repository';
import { HttpService } from '@nestjs/common';
import { ProductPgSchema } from "./schemas/product_postgres.schema";
export declare type Product = {
    id: string;
    slug: string;
    lagerId: number;
    type: number;
    title: string;
    weight: string;
    image: string;
    available: boolean;
    imageUrl: string;
    price: number;
    oldPrice: number;
    discount: number;
    points: string;
    pointsText: string;
    loyaltyTerms: string;
    skuInfo: string;
    appearance: {
        size: string;
        color: string;
        __typename: string;
    };
    promotion: {
        id: string;
        slug: string;
        labelIcon: {
            url: string;
            __typename: string;
        };
        labelIconReversed: string;
        __typename: string;
    };
    activePeriod: {
        start: string;
        end: string;
        __typename: string;
    };
    __typename: string;
};
export declare class ProductsService {
    private productDB;
    private httpService;
    constructor(productDB: ProductRepository, httpService: HttpService);
    getProducts(sort: number, field: string, limit: number, skip: number): Promise<ProductPgSchema[]>;
    refreshProductBySilpo(): Promise<string>;
    getSilpoProducts(): Promise<Product[]>;
}
