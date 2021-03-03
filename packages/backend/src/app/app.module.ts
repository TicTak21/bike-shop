import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DbModule } from './modules/db/db.module';
import { GqlModule } from './modules/gql/gql.module';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [DbModule, GqlModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
