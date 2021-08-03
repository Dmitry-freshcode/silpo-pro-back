export interface IProduct {
    readonly id?: string;
    readonly slug: string;
    readonly lagerId: number;
    readonly type: number;
    readonly title: string;
    readonly weight: string;
    readonly image: string;
    readonly available: boolean;
    readonly imageUrl: string;
    readonly price: number;
    readonly oldPrice: number;
    readonly discount: number;
    readonly points: string;
    readonly pointsText: string;
    readonly loyaltyTerms: string;
    readonly skuInfo: string;
}
