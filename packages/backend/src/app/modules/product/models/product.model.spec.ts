import { ProductModel } from './product.model';

describe('ProductResolver', () => {
  let model: ProductModel;

  beforeEach(async () => {
    model = new ProductModel();
  });

  it('should be defined', () => {
    expect(model).toBeDefined();
  });

  it('should return 0(zero) as default `price` value', () => {
    expect(model.price).toBe(0);
  });

  it('should return 0(zero) as default `views` value', () => {
    expect(model.views).toBe(0);
  });

  it('should return 0(zero) as default `rating` value', () => {
    expect(model.rating).toBe(0);
  });
});
