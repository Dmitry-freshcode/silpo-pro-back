import { Injectable } from '@nestjs/common';
import { ProductGetDto } from './dto/product.dto';
import { ProductRepository } from './products.repository';
import query from '../shared/silpo_query'
import { HttpService } from '@nestjs/common';
import {ProductPgSchema} from "./schemas/product_postgres.schema";


export type Product = {
  id: string; 
  slug: string;
  lagerId: number;
  type: number;
  title:string;
  weight: string;
  image: string;
  available: boolean;
  imageUrl:string;
  price: number;
  oldPrice: number;
  discount:number;
  points: string;
  pointsText: string;
  loyaltyTerms: string;
  skuInfo:string;
  appearance: {
      size: string,
      color: string,
      __typename: string,
  };
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
  activePeriod:{
      start: string,
      end: string,
      __typename: string
  };
  __typename: string;  
}

@Injectable()
export class ProductsService {
    constructor(
       private productDB: ProductRepository,    
       private httpService: HttpService,   
      ) {} 


    async getProducts(sort:number, field:string,limit:number,skip:number) : Promise<ProductPgSchema[]>{
      return await this.productDB.getAllProducts( sort, field,limit,skip )
    }

    async refreshProductBySilpo():Promise<string>{
      try{
        const products = await this.getSilpoProducts();
        await this.productDB.deleteAll();
       await this.productDB.createProductMany(products);
       return "products created"
      } catch (e) {
        console.log(e);
        throw e;
      } 
    }

    async getSilpoProducts (): Promise<Product[]>{
      try{
        const response = await this.httpService.post(
          process.env.SILPO_URL,{
          query: query.query,
          variables: query.variables,      
        }).toPromise();
        const products :ProductGetDto[] = response.data.data.offersSplited.products.items;
        
        const mapProducts = products.map(item=>{
          let mapItem = {...item,price:0,oldPrice:0,discount:0 };
          mapItem.price = parseFloat(item.price);
          mapItem.oldPrice = parseFloat(item.oldPrice);
          mapItem.discount = Number(((1-mapItem.price/mapItem.oldPrice)*100).toFixed(2));   
          return mapItem;
        })           
        return mapProducts;
      } catch (e) {
        console.log(e);
        throw e;
      }
    }
}
