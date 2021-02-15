import { Prop, Schema, SchemaFactory  } from '@nestjs/mongoose';

@Schema()
class labelIcon{
    @Prop()        
    url: string;

    @Prop()  
    __typename: string;
}

@Schema()
class appearance{
    @Prop()
    size: string;

    @Prop()
    color: string;

    @Prop()    
    __typename: string;
}

@Schema()
class promotion{
    @Prop()
    id: string;

    @Prop()
    slug: string;

    @Prop()
    labelIcon: labelIcon;

    @Prop()
    labelIconReversed: string;

    @Prop()
    __typename: string;
}

@Schema()
class activePeriod{
    @Prop()
    start: string;

    @Prop()
    end: string;

    @Prop()
    __typename: string;
}

@Schema()
export class Products {
  @Prop()
  id: string;

  @Prop()
  slug: string;

  @Prop()
  lagerId: number;

  @Prop()
  type: number;

  @Prop()
  title: string;

  @Prop()
  weight:string;

  @Prop()
  image: string;

  @Prop()
  available: boolean;

  @Prop()
  imageUrl: string;

  @Prop()
  price: number;

  @Prop()
  oldPrice: number;

  @Prop()
  discount: number;

  @Prop()
  points: string;

  @Prop()
  pointsText: string;

  @Prop()
  loyaltyTerms: string;

  @Prop()
  skuInfo: string;

  @Prop()
  appearance: appearance;

  @Prop()
  promotion: promotion;

  @Prop()
  activePeriod: activePeriod;

  @Prop()
  __typename: string;
}

export const ProductsSchema = SchemaFactory.createForClass(Products);