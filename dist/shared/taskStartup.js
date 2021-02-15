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
var TaskStartup_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskStartup = void 0;
const common_1 = require("@nestjs/common");
const products_repository_1 = require("../products/products.repository");
const silpo_query_1 = require("./silpo_query");
let TaskStartup = TaskStartup_1 = class TaskStartup {
    constructor(silpoService, productsRepository) {
        this.silpoService = silpoService;
        this.productsRepository = productsRepository;
        this.logger = new common_1.Logger(TaskStartup_1.name);
    }
    async onApplicationBootstrap() {
        const products = await this.silpoService.getSilpoProducts();
        await this.productsRepository.createProductMany(products);
        this.logger.debug('DB refresh');
    }
};
TaskStartup = TaskStartup_1 = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [silpo_query_1.SilpoService,
        products_repository_1.ProductRepository])
], TaskStartup);
exports.TaskStartup = TaskStartup;
//# sourceMappingURL=taskStartup.js.map