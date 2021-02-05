import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

// Controller
import { AppController } from './app.controller';

// Service
import { AppService } from './app.service';

// Module
import { UrbanfarmersModule } from './urbanfarmers/urbanfarmers.module';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [TypeOrmModule.forRoot(), UrbanfarmersModule, ProductsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}