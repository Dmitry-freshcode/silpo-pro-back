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
exports.ProductsSchema = exports.Products = void 0;
const mongoose_1 = require("@nestjs/mongoose");
let labelIcon = class labelIcon {
};
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], labelIcon.prototype, "url", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], labelIcon.prototype, "__typename", void 0);
labelIcon = __decorate([
    mongoose_1.Schema()
], labelIcon);
let appearance = class appearance {
};
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], appearance.prototype, "size", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], appearance.prototype, "color", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], appearance.prototype, "__typename", void 0);
appearance = __decorate([
    mongoose_1.Schema()
], appearance);
let promotion = class promotion {
};
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], promotion.prototype, "id", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], promotion.prototype, "slug", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", labelIcon)
], promotion.prototype, "labelIcon", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], promotion.prototype, "labelIconReversed", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], promotion.prototype, "__typename", void 0);
promotion = __decorate([
    mongoose_1.Schema()
], promotion);
let activePeriod = class activePeriod {
};
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], activePeriod.prototype, "start", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], activePeriod.prototype, "end", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], activePeriod.prototype, "__typename", void 0);
activePeriod = __decorate([
    mongoose_1.Schema()
], activePeriod);
let Products = class Products {
};
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Products.prototype, "id", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Products.prototype, "slug", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Number)
], Products.prototype, "lagerId", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Number)
], Products.prototype, "type", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Products.prototype, "title", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Products.prototype, "weight", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Products.prototype, "image", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Boolean)
], Products.prototype, "available", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Products.prototype, "imageUrl", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Number)
], Products.prototype, "price", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Number)
], Products.prototype, "oldPrice", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Number)
], Products.prototype, "discount", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Products.prototype, "points", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Products.prototype, "pointsText", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Products.prototype, "loyaltyTerms", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Products.prototype, "skuInfo", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", appearance)
], Products.prototype, "appearance", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", promotion)
], Products.prototype, "promotion", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", activePeriod)
], Products.prototype, "activePeriod", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Products.prototype, "__typename", void 0);
Products = __decorate([
    mongoose_1.Schema()
], Products);
exports.Products = Products;
exports.ProductsSchema = mongoose_1.SchemaFactory.createForClass(Products);
//# sourceMappingURL=products.js.map