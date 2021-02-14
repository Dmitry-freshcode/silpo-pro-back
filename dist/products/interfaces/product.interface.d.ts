import { Document } from 'mongoose';
export interface IProduct extends Document {
    readonly id: string;
    readonly slug: string;
    readonly lagerId: number;
    readonly type: number;
    readonly title: string;
    readonly weight: string;
    readonly image: string;
    readonly available: boolean;
    readonly imageUrl: string;
    readonly price: string;
    readonly oldPrice: string;
    readonly discount: string;
    readonly points: string;
    readonly pointsText: string;
    readonly loyaltyTerms: string;
    readonly skuInfo: string;
    readonly appearance: {
        size: string;
        color: string;
        __typename: string;
    };
    readonly promotion: {
        id: string;
        slug: string;
        labelIcon: {
            url: string;
            __typename: string;
        };
        labelIconReversed: string;
        __typename: string;
    };
    readonly activePeriod: {
        start: string;
        end: string;
        __typename: string;
    };
    readonly __typename: string;
}
