/// <reference types="mongoose" />
declare class labelIcon {
    url: string;
    __typename: string;
}
declare class appearance {
    size: string;
    color: string;
    __typename: string;
}
declare class promotion {
    id: string;
    slug: string;
    labelIcon: labelIcon;
    labelIconReversed: string;
    __typename: string;
}
declare class activePeriod {
    start: string;
    end: string;
    __typename: string;
}
export declare class Products {
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
    appearance: appearance;
    promotion: promotion;
    activePeriod: activePeriod;
    __typename: string;
}
export declare const ProductsSchema: import("mongoose").Schema<import("mongoose").Document<Products>, import("mongoose").Model<import("mongoose").Document<Products>>, undefined>;
export {};
