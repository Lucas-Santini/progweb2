import { Controller, Post, Delete, Body, Param } from '@nestjs/common';
import { CartService } from './cart.service';

@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Post('add')
  async addProductToCart(@Body() body: { productId: number, quantity: number }) {
    const { productId, quantity } = body;
    return this.cartService.addProductToCart(productId, quantity);
  }

  @Delete('remove/:id')
  async removeProductFromCart(@Param('id') id: number) {
    return this.cartService.removeProductFromCart(id);
  }
}
