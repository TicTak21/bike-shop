import { Module } from '@nestjs/common';
import { UserModel } from './models/user.model';
import { UserResolver } from './user.resolver';
import { UserService } from './user.service';

@Module({
  providers: [UserService, UserResolver, UserModel],
})
export class UserModule {}
