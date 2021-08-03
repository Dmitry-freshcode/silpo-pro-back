import {Column, Model, Table} from "sequelize-typescript";
import { IProduct } from "../interfaces/product.interface";

@Table({ tableName: 'Product' })
export class ProductPgSchema extends Model implements IProduct{
    @Column
    slug: string;
    @Column
    lagerId: number;
    @Column
    type: number;
    @Column
    title: string;
    @Column
    weight:string;
    @Column
    image: string;
    @Column
    available: boolean;
    @Column
    imageUrl: string;
    @Column
    price: number;
    @Column
    oldPrice: number;
    @Column
    discount: number;
    @Column
    points: string;
    @Column
    pointsText: string;
    @Column
    loyaltyTerms: string;
    @Column
    skuInfo: string;
}