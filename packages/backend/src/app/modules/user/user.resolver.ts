import { Inject } from '@nestjs/common';
import { Resolver, Query, Args } from '@nestjs/graphql';
import { UserModel } from './models/user.model';

@Resolver((of) => UserModel)
export class UserResolver {
  constructor() {}

  @Query((returns) => [UserModel])
  async users() {
    return [];
  }

  @Query((returns) => UserModel, { nullable: true })
  async user(@Args('id') id: string) {
    return {};
  }
}
