import { HttpService, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { AxiosResponse } from 'axios';
import { map } from 'rxjs/operators';
import { ProductRepository } from './products/products.repository';
import { IProduct } from './products/interfaces/product.interface';
import silpo from './shared/silpo_query'


@Injectable()
export class AppService {
  constructor(private httpService: HttpService,
    private productRepository: ProductRepository
    ) {}

  getHello(): string {
    return 'Hello World!';
  }

  getProductsGoogle(): any {
    return this.httpService.get('https://google.com').subscribe(res=>res);
  }

  async getProductsSilpo(): Promise<IProduct[]> {
    try{
      const response = await this.httpService.post(process.env.SILPO_URL,{
        query: silpo.query,variables: silpo.variables        
      }).toPromise();
      return await this.addProductsDb(response.data.data.offersSplited.products.items);
    } catch (e) {
      console.log(e);
      throw e;
    }
  }

  async addProductsDb (products:IProduct[]):Promise<any>{
   try{
     await this.productRepository.deleteAll();
    const result = await this.productRepository.createProductMany(products);
    return "products created"
   } catch (e) {
     console.log(e);
     throw e;
   } 
  }
}
