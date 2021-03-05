import { Module } from '@nestjs/common';
import { DbModule } from '../db/db.module';
import { UserResolver } from './user.resolver';

@Module({
  imports: [DbModule],
  providers: [UserResolver],
})
export class UserModule {}
