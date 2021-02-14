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
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const products_repository_1 = require("./products/products.repository");
const silpo_query_1 = require("./shared/silpo_query");
let AppService = class AppService {
    constructor(httpService, productRepository) {
        this.httpService = httpService;
        this.productRepository = productRepository;
    }
    getHello() {
        return 'Hello World!';
    }
    getProductsGoogle() {
        return this.httpService.get('https://google.com').subscribe(res => res);
    }
    async getProductsSilpo() {
        try {
            const response = await this.httpService.post(process.env.SILPO_URL, {
                query: silpo_query_1.default.query, variables: silpo_query_1.default.variables
            }).toPromise();
            return await this.addProductsDb(response.data.data.offersSplited.products.items);
        }
        catch (e) {
            console.log(e);
            throw e;
        }
    }
    async addProductsDb(products) {
        try {
            await this.productRepository.deleteAll();
            const result = await this.productRepository.createProductMany(products);
            return "products created";
        }
        catch (e) {
            console.log(e);
            throw e;
        }
    }
};
AppService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [common_1.HttpService,
        products_repository_1.ProductRepository])
], AppService);
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map