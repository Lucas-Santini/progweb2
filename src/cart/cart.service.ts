import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class CartService {
  constructor(private readonly prisma: PrismaService) {}

  async addProductToCart(productId: number, quantity: number) {
    return this.prisma.cartItem.create({
      data: { productId, quantity },
    });
  }

  async removeProductFromCart(id: number) {
    return this.prisma.cartItem.delete({
      where: { id },
    });
  }
}
