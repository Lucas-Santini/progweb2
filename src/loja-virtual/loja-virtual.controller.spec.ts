import { Test, TestingModule } from '@nestjs/testing';
import { LojaVirtualController } from './loja-virtual.controller';
import { LojaVirtualService } from './loja-virtual.service';

describe('LojaVirtualController', () => {
  let controller: LojaVirtualController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LojaVirtualController],
      providers: [LojaVirtualService],
    }).compile();

    controller = module.get<LojaVirtualController>(LojaVirtualController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
