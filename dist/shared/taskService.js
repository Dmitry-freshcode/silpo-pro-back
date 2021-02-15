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
var TasksService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TasksService = void 0;
const common_1 = require("@nestjs/common");
const schedule_1 = require("@nestjs/schedule");
const products_repository_1 = require("../products/products.repository");
const silpo_query_1 = require("./silpo_query");
let TasksService = TasksService_1 = class TasksService {
    constructor(silpoService, productsRepository) {
        this.silpoService = silpoService;
        this.productsRepository = productsRepository;
        this.logger = new common_1.Logger(TasksService_1.name);
    }
    async handleCron() {
        const products = await this.silpoService.getSilpoProducts();
        await this.productsRepository.createProductMany(products);
        this.logger.debug('DB refresh');
    }
};
__decorate([
    schedule_1.Cron(schedule_1.CronExpression.EVERY_2_HOURS),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TasksService.prototype, "handleCron", null);
TasksService = TasksService_1 = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [silpo_query_1.SilpoService,
        products_repository_1.ProductRepository])
], TasksService);
exports.TasksService = TasksService;
//# sourceMappingURL=taskService.js.map