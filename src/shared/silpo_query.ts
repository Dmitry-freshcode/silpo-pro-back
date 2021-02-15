import { IProduct } from "src/products/interfaces/product.interface";
import { HttpService, Injectable } from '@nestjs/common';

@Injectable()
export class SilpoService {
  constructor(private httpService: HttpService,){} 

  private readonly query ={
    query: `query offers($categoryId: ID, $filialIds: [ID], $coordinates: Coordinates, $pagingInfo: InputBatch!, $pageSlug: String!, $random: Boolean!, $onlyActive: Boolean) {
        offersSplited(categoryId: $categoryId, filialIds: $filialIds, coordinates: $coordinates, pagingInfo: $pagingInfo, pageSlug: $pageSlug, random: $random, onlyActive: $onlyActive) {    
          products {
            count
            items {
              ... on Product {
                ...OptimizedProductsFragment
                __typename
              }
              __typename
            }
            __typename
          }
        }
      }
      
      fragment OptimizedProductsFragment on Product {
        id
        slug
        lagerId: articul
        type
        title
        weight
        image {
          url
          __typename
        }
        available
        imageUrl
        price
        oldPrice
        discount
        points
        pointsText
        loyaltyTerms {
          id
          rewardTypeId
          rewardValueLoyalty
          loyaltyTriggerCondition
          rewardImg
          rewardNameForGuest
          __typename
        }
        skuInfo {
          labels
          id
          __typename
        }
        appearance {
          size
          color
          __typename
        }
        promotion {
          id
          slug
          labelIcon {
            url
            __typename
          }
          labelIconReversed {
            url
            __typename
          }
          __typename
        }
        activePeriod {
          start
          end
          __typename
        }
        __typename
      }`,
      variables: {
        categoryId:null,
        filialIds:null,
        coordinates:null,
        pagingInfo:{
          offset:0,
          limit:999999
        },
        onlyActive:true,
        pageSlug:"cina-tizhnya",
        random:false
      }
}


  async getSilpoProducts (): Promise<IProduct[]>{
    try{
      const response = await this.httpService.post(
        process.env.SILPO_URL,{
        query: this.query.query,
        variables: this.query.variables,      
      }).toPromise();
      const products = response.data.data.offersSplited.products.items;

      const mapProducts = products.map(item=>{
        item.price = parseFloat(item.price);
        item.oldPrice = parseFloat(item.oldPrice);
        item.discount = Number(((1-item.price/item.oldPrice)*100).toFixed(2));
        return item;
      })
           
      return mapProducts;
    } catch (e) {
      console.log(e);
      throw e;
    }
  }
}


