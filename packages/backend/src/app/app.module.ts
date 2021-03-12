import { Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { AuthModule } from './modules/auth/auth.module';
import { DbModule } from './modules/db/db.module';
import { GqlModule } from './modules/gql/gql.module';
import { ProductModule } from './modules/product/product.module';
import { UserModule } from './modules/user/user.module';
import { LoggingInterceptor } from './shared/interceptors/logging.interceptor';

@Module({
  imports: [DbModule, GqlModule, AuthModule, UserModule, ProductModule],
  providers: [{ provide: APP_INTERCEPTOR, useClass: LoggingInterceptor }],
})
export class AppModule {}
