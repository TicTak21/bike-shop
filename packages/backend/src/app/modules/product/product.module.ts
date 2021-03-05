import { Module } from '@nestjs/common';
import { DbModule } from '../db/db.module';
import { ProductResolver } from './product.resolver';
import { ProductService } from './product.service';

@Module({
  imports: [DbModule],
  providers: [ProductService, ProductResolver],
})
export class ProductModule {}
