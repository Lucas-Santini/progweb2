import { Body, Controller, Get, Post, Param, Delete, Put } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('users')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  async create(@Body() body) {
    return {body};
  }

  @Get()
  async read() {
    return {users:[]}
  }

  getHello(): string {
    return this.appService.getHello();
  }

  @Get(':id')
  async readOne(@Param() param) {
    return {user: {}, param}
  }

  @Get()
  async list() {
    return {users:[]}
  }

  @Get(':id')
  async show(@Param() params) {
    return {user: {}, params}
  }

  @Put(':id')
  async update(@Body() body, @Param() params) {
    return{
      method: 'patch',
      body,
      params
    }

 
  }


}
