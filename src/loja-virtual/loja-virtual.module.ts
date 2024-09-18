import { Module } from '@nestjs/common';
import { LojaVirtualService } from './loja-virtual.service';
import { LojaVirtualController } from './loja-virtual.controller';

@Module({
  controllers: [LojaVirtualController],
  providers: [LojaVirtualService],
})
export class LojaVirtualModule {}
