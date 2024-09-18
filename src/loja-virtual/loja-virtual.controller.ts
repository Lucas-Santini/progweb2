import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LojaVirtualService } from './loja-virtual.service';
import { CreateLojaVirtualDto } from './dto/create-loja-virtual.dto';
import { UpdateLojaVirtualDto } from './dto/update-loja-virtual.dto';

@Controller('loja-virtual')
export class LojaVirtualController {
  constructor(private readonly lojaVirtualService: LojaVirtualService) {}

  @Post()
  create(@Body() createLojaVirtualDto: CreateLojaVirtualDto) {
    return this.lojaVirtualService.create(createLojaVirtualDto);
  }

  @Get()
  findAll() {
    return this.lojaVirtualService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.lojaVirtualService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLojaVirtualDto: UpdateLojaVirtualDto) {
    return this.lojaVirtualService.update(+id, updateLojaVirtualDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.lojaVirtualService.remove(+id);
  }
}
