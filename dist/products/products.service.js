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
exports.ProductsService = void 0;
const common_1 = require("@nestjs/common");
const products_repository_1 = require("./products.repository");
const silpo_query_1 = require("../shared/silpo_query");
const common_2 = require("@nestjs/common");
let ProductsService = class ProductsService {
    constructor(productDB, httpService) {
        this.productDB = productDB;
        this.httpService = httpService;
    }
    async getProducts(sort, field, limit, skip) {
        return await this.productDB.getAllProducts(sort, field, limit, skip);
    }
    async refreshProductBySilpo() {
        try {
            const products = await this.getSilpoProducts();
            await this.productDB.deleteAll();
            await this.productDB.createProductMany(products);
            return "products created";
        }
        catch (e) {
            console.log(e);
            throw e;
        }
    }
    async getSilpoProducts() {
        try {
            const response = await this.httpService.post(process.env.SILPO_URL, {
                query: silpo_query_1.default.query,
                variables: silpo_query_1.default.variables,
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
ProductsService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [products_repository_1.ProductRepository,
        common_2.HttpService])
], ProductsService);
exports.ProductsService = ProductsService;
//# sourceMappingURL=products.service.js.map