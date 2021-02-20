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
exports.ProductSendDto = exports.ProductGetDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class ProductGetDto {
}
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], ProductGetDto.prototype, "id", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], ProductGetDto.prototype, "slug", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", Number)
], ProductGetDto.prototype, "lagerId", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", Number)
], ProductGetDto.prototype, "type", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], ProductGetDto.prototype, "title", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], ProductGetDto.prototype, "weight", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], ProductGetDto.prototype, "image", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", Boolean)
], ProductGetDto.prototype, "available", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], ProductGetDto.prototype, "imageUrl", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], ProductGetDto.prototype, "price", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], ProductGetDto.prototype, "oldPrice", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], ProductGetDto.prototype, "discount", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], ProductGetDto.prototype, "points", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], ProductGetDto.prototype, "pointsText", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], ProductGetDto.prototype, "loyaltyTerms", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], ProductGetDto.prototype, "skuInfo", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", Object)
], ProductGetDto.prototype, "appearance", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", Object)
], ProductGetDto.prototype, "promotion", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", Object)
], ProductGetDto.prototype, "activePeriod", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], ProductGetDto.prototype, "__typename", void 0);
exports.ProductGetDto = ProductGetDto;
class ProductSendDto {
}
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], ProductSendDto.prototype, "id", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], ProductSendDto.prototype, "slug", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", Number)
], ProductSendDto.prototype, "lagerId", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", Number)
], ProductSendDto.prototype, "type", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], ProductSendDto.prototype, "title", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], ProductSendDto.prototype, "weight", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], ProductSendDto.prototype, "image", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", Boolean)
], ProductSendDto.prototype, "available", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], ProductSendDto.prototype, "imageUrl", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", Number)
], ProductSendDto.prototype, "price", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", Number)
], ProductSendDto.prototype, "oldPrice", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", Number)
], ProductSendDto.prototype, "discount", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], ProductSendDto.prototype, "points", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], ProductSendDto.prototype, "pointsText", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], ProductSendDto.prototype, "loyaltyTerms", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], ProductSendDto.prototype, "skuInfo", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", Object)
], ProductSendDto.prototype, "appearance", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", Object)
], ProductSendDto.prototype, "promotion", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", Object)
], ProductSendDto.prototype, "activePeriod", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], ProductSendDto.prototype, "__typename", void 0);
exports.ProductSendDto = ProductSendDto;
//# sourceMappingURL=product.dto.js.map