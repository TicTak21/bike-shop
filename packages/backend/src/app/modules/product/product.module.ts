import { Module } from '@nestjs/common';
import { DbModule } from '../db/db.module';
import { ProductResolver } from './product.resolver';

@Module({
  imports: [DbModule],
  providers: [ProductResolver],
})
export class ProductModule {}
