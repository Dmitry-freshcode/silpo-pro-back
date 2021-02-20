import { ApiProperty } from '@nestjs/swagger';

export class ProductGetDto{ 
    @ApiProperty()  
    id: string; 

    @ApiProperty()
    slug: string;

    @ApiProperty()
    lagerId: number;

    @ApiProperty()
    type: number;

    @ApiProperty()
    title:string;

    @ApiProperty()
    weight: string;

    @ApiProperty()
    image: string;

    @ApiProperty()
    available: boolean;

    @ApiProperty()
    imageUrl:string;

    @ApiProperty()
    price: string;

    @ApiProperty()
    oldPrice: string;

    @ApiProperty()
    discount:string;

    @ApiProperty()
    points: string;

    @ApiProperty()
    pointsText: string;

    @ApiProperty()
    loyaltyTerms: string;

    @ApiProperty()
    skuInfo:string;

    @ApiProperty()
    appearance: {
        size: string,
        color: string,
        __typename: string,
    };

    @ApiProperty()
    promotion: {
        id: string,
        slug: string,
        labelIcon:{
            url: string,
            __typename: string
        },
        labelIconReversed: string,
        __typename: string
    };

    @ApiProperty()
    activePeriod:{
        start: string,
        end: string,
        __typename: string
    };

    @ApiProperty()
    __typename: string;  
}

export class ProductSendDto{ 
    @ApiProperty()  
    id: string; 

    @ApiProperty()
    slug: string;

    @ApiProperty()
    lagerId: number;

    @ApiProperty()
    type: number;

    @ApiProperty()
    title:string;

    @ApiProperty()
    weight: string;

    @ApiProperty()
    image: string;

    @ApiProperty()
    available: boolean;

    @ApiProperty()
    imageUrl:string;

    @ApiProperty()
    price: number;

    @ApiProperty()
    oldPrice: number;

    @ApiProperty()
    discount:number;

    @ApiProperty()
    points: string;

    @ApiProperty()
    pointsText: string;

    @ApiProperty()
    loyaltyTerms: string;

    @ApiProperty()
    skuInfo:string;

    @ApiProperty()
    appearance: {
        size: string,
        color: string,
        __typename: string,
    };

    @ApiProperty()
    promotion: {
        id: string,
        slug: string,
        labelIcon:{
            url: string,
            __typename: string
        },
        labelIconReversed: string,
        __typename: string
    };

    @ApiProperty()
    activePeriod:{
        start: string,
        end: string,
        __typename: string
    };

    @ApiProperty()
    __typename: string;  
}