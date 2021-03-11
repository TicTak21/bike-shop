import { Resolver, Query, Args } from '@nestjs/graphql';
import { PrismaService } from '../db/prisma/prisma.service';
import { ProductModel } from './models/product.model';

@Resolver(of => ProductModel)
export class ProductResolver {
  constructor(private readonly prisma: PrismaService) {}

  @Query(returns => [ProductModel])
  async products() {
    return this.prisma.product.findMany();
  }

  @Query(returns => ProductModel, { nullable: true })
  async product(@Args('id') id: string) {
    return this.prisma.product.findUnique({ where: { productId: id } });
  }
}
