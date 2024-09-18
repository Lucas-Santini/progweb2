import { PartialType } from '@nestjs/mapped-types';
import { CreateLojaVirtualDto } from './create-loja-virtual.dto';

export class UpdateLojaVirtualDto extends PartialType(CreateLojaVirtualDto) {}
