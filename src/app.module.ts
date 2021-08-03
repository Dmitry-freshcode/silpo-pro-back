import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { ConfigModule } from '@nestjs/config';
import { ScheduleModule } from '@nestjs/schedule';
import { TasksService } from './shared/taskService';
import { TaskStartup } from './shared/taskStartup';
import { SequelizeModule } from '@nestjs/sequelize';
import { ProductPgSchema } from './products/schemas/product_postgres.schema';

const ENV = process.env.NODE_ENV;
const envPath = !ENV ? '.env' : `.env.${ENV}`;
@Module({
  imports: [
    ProductsModule,
    ScheduleModule.forRoot(),
    ConfigModule.forRoot({envFilePath: envPath,isGlobal: true}),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_LOGIN,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      define: {
        timestamps: true,
      },
      autoLoadModels: true,
      synchronize: true,
      models:[ProductPgSchema],
    }),
],
  controllers: [AppController],
  providers: [
    AppService,
    TasksService,
    TaskStartup,
  ],
})

export class AppModule {}
