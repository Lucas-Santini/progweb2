import { Injectable } from '@nestjs/common';
import { CreateLojaVirtualDto } from './dto/create-loja-virtual.dto';
import { UpdateLojaVirtualDto } from './dto/update-loja-virtual.dto';

@Injectable()
export class LojaVirtualService {
  create(createLojaVirtualDto: CreateLojaVirtualDto) {
    return 'This action adds a new lojaVirtual';
  }

  findAll() {
    return `This action returns all lojaVirtual`;
  }

  findOne(id: number) {
    return `This action returns a #${id} lojaVirtual`;
  }

  update(id: number, updateLojaVirtualDto: UpdateLojaVirtualDto) {
    return `This action updates a #${id} lojaVirtual`;
  }

  remove(id: number) {
    return `This action removes a #${id} lojaVirtual`;
  }
}
