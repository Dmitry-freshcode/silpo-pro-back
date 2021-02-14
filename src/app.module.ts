import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { ConfigModule } from '@nestjs/config';

const ENV = process.env.NODE_ENV;

@Module({ 
  imports: [ProductsModule,
    ConfigModule.forRoot({envFilePath: !ENV ? '.env' : `.env.${ENV}`,isGlobal: true}),
  //   MongooseModule.forRoot(
  //   process.env.MONGODB_CONNECTION_DEV,
  //   {
  //     useNewUrlParser: true,
  //     useUnifiedTopology: true,
  //     useCreateIndex: true,
  // })
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
