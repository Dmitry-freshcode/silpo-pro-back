import { HttpModule, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { ConfigModule } from '@nestjs/config';
import { ScheduleModule } from '@nestjs/schedule';
import { TasksService } from './shared/taskService';
import { TaskStartup } from './shared/taskStartup';
import { HttpService } from '@nestjs/common';

const ENV = process.env.NODE_ENV;
const envPath = !ENV ? '.env' : `.env.${ENV}`;
@Module({ 
  imports: [
    ProductsModule,      
    ScheduleModule.forRoot(),
    ConfigModule.forRoot({envFilePath: envPath,isGlobal: true}),
    MongooseModule.forRoot(
      process.env.MONGODB_CONNECTION,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
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
