export declare class ProductGetDto {
    id: string;
    slug: string;
    lagerId: number;
    type: number;
    title: string;
    weight: string;
    image: string;
    available: boolean;
    imageUrl: string;
    price: string;
    oldPrice: string;
    discount: string;
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
}
export declare class ProductSendDto {
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
}
