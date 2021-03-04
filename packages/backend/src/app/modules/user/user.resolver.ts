import { Inject } from '@nestjs/common';
import { Resolver, Query } from '@nestjs/graphql';
import { UserModel } from './models/user.model';
import { UserService } from './user.service';

@Resolver((of) => UserModel)
export class UserResolver {
  constructor(@Inject(UserService) private userService: UserService) {}

  @Query((returns) => [UserModel])
  async users() {
    return await this.userService.findAll();
  }
}
