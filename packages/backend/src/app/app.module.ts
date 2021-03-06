import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { DbModule } from './modules/db/db.module';
import { GqlModule } from './modules/gql/gql.module';
import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/user/user.module';
import { ProductModule } from './modules/product/product.module';

@Module({
  imports: [DbModule, GqlModule, AuthModule, UserModule, ProductModule],
  providers: [AppService],
})
export class AppModule {}
