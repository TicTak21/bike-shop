import { Test, TestingModule } from '@nestjs/testing';
import { DbModule } from '../db/db.module';
import { ProductResolver } from './product.resolver';

describe('ProductResolver', () => {
  let resolver: ProductResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [DbModule],
      providers: [ProductResolver],
    }).compile();

    resolver = module.get<ProductResolver>(ProductResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });

  it('should return null from `product` if product not found', async () => {
    const res = resolver.product('1234');

    await expect(res).resolves.toBe(null);
  });

  it('should return array from `products`', async () => {
    const res = resolver.products();

    await expect(res).resolves.toEqual([]);
  });
});
