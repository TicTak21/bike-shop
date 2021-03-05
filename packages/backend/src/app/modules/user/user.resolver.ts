import { Resolver, Query, Args } from '@nestjs/graphql';
import { PrismaService } from '../db/prisma/prisma/prisma.service';
import { UserModel } from './models/user.model';

@Resolver((of) => UserModel)
export class UserResolver {
  constructor(private readonly prisma: PrismaService) {}

  @Query((returns) => [UserModel])
  async users() {
    return this.prisma.user.findMany();
  }

  @Query((returns) => UserModel, { nullable: true })
  async user(@Args('id') id: string) {
    return this.prisma.user.findUnique({ where: { userId: id } });
  }
}
