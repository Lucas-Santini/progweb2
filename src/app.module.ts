import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LojaVirtualModule } from './loja-virtual/loja-virtual.module';
import { ProductsModule } from './products/products.module';
import { CartModule } from './cart/cart.module';
import { PrismaService } from 'prisma/prisma.service';

@Module({
  imports: [LojaVirtualModule, ProductsModule, CartModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
  exports : [AppService]
})
export class AppModule {}


