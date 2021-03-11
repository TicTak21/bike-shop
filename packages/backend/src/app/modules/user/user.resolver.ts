import { InternalServerErrorException } from '@nestjs/common';
import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { genSalt, genSaltSync, hash, hashSync } from 'bcryptjs';
import { promisify } from 'util';
import { PrismaService } from '../db/prisma/prisma.service';
import { CreateUserInput } from './dto/create-user.input';
import { UserModel } from './models/user.model';

@Resolver(of => UserModel)
export class UserResolver {
  constructor(private readonly prisma: PrismaService) {}

  @Query(returns => [UserModel])
  async users() {
    return await this.prisma.user.findMany();
  }

  @Query(returns => UserModel, { nullable: true })
  async user(@Args('id') id: string) {
    return await this.prisma.user.findUnique({ where: { userId: id } });
  }

  @Mutation(returns => UserModel)
  async createUser(@Args('user') createUserInput: CreateUserInput) {
    const { password, ...rest } = createUserInput;

    const salt = genSaltSync(10);
    const passwordHash = hashSync(password, salt);

    const userData = { passwordHash, ...rest };

    return await this.prisma.user.create({ data: userData });
  }
}
