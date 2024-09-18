/*import { Test, TestingModule } from '@nestjs/testing';
import { LojaVirtualService } from './loja-virtual.service';

describe('LojaVirtualService', () => {
  let service: LojaVirtualService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LojaVirtualService],
    }).compile();

    service = module.get<LojaVirtualService>(LojaVirtualService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});*/

import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class ProductsService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return this.prisma.product.findMany();
  }
}

