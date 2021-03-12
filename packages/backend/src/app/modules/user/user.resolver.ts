import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { genSaltSync, hashSync } from 'bcryptjs';
import { PrismaService } from '../db/prisma/prisma.service';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
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

  @Mutation(returns => UserModel)
  async deleteUser(@Args('id') id: string) {
    return await this.prisma.user.delete({ where: { userId: id } });
  }

  @Mutation(returns => UserModel)
  async updateUser(@Args('id') id: string, @Args('user') updateUserInput: UpdateUserInput) {
    return await this.prisma.user.update({
      where: { userId: id },
      data: updateUserInput,
    });
  }
}
