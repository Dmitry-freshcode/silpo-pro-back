"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const products_module_1 = require("./products/products.module");
const config_1 = require("@nestjs/config");
const schedule_1 = require("@nestjs/schedule");
const taskService_1 = require("./shared/taskService");
const silpo_query_1 = require("./shared/silpo_query");
const taskStartup_1 = require("./shared/taskStartup");
const ENV = process.env.NODE_ENV;
const envPath = !ENV ? '.env' : `.env.${ENV}`;
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            products_module_1.ProductsModule,
            schedule_1.ScheduleModule.forRoot(),
            config_1.ConfigModule.forRoot({ envFilePath: envPath, isGlobal: true }),
            mongoose_1.MongooseModule.forRoot(process.env.MONGODB_CONNECTION, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useCreateIndex: true,
            }),
            common_1.HttpModule
        ],
        controllers: [app_controller_1.AppController],
        providers: [
            app_service_1.AppService,
            silpo_query_1.SilpoService,
            taskService_1.TasksService,
            taskStartup_1.TaskStartup,
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map