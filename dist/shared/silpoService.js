"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SilpoService = void 0;
const product_interface_1 = require("../products/interfaces/product.interface");
const common_1 = require("@nestjs/common");
const product_dto_1 = require("../products/dto/product.dto");
const products_service_1 = require("../products/products.service");
let SilpoService = class SilpoService {
    constructor(httpService) {
        this.httpService = httpService;
        this.query = {
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
                categoryId: null,
                filialIds: null,
                coordinates: null,
                pagingInfo: {
                    offset: 0,
                    limit: 999999
                },
                onlyActive: true,
                pageSlug: "cina-tizhnya",
                random: false
            }
        };
    }
    async getSilpoProducts() {
        try {
            const response = await this.httpService.post(process.env.SILPO_URL, {
                query: this.query.query,
                variables: this.query.variables,
            }).toPromise();
            const products = response.data.data.offersSplited.products.items;
            const mapProducts = products.map(item => {
                let mapItem = Object.assign(Object.assign({}, item), { price: 0, oldPrice: 0, discount: 0 });
                mapItem.price = parseFloat(item.price);
                mapItem.oldPrice = parseFloat(item.oldPrice);
                mapItem.discount = Number(((1 - mapItem.price / mapItem.oldPrice) * 100).toFixed(2));
                return mapItem;
            });
            return mapProducts;
        }
        catch (e) {
            console.log(e);
            throw e;
        }
    }
};
SilpoService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [common_1.HttpService])
], SilpoService);
exports.SilpoService = SilpoService;
//# sourceMappingURL=silpoService.js.map