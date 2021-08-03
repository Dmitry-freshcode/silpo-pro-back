import { Model } from "sequelize-typescript";
import { IProduct } from "../interfaces/product.interface";
export declare class ProductPgSchema extends Model implements IProduct {
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
}
