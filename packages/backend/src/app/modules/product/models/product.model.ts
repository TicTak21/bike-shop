import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ProductModel {
  @Field((type) => ID)
  productId: string;

  @Field()
  createdAt: string;

  @Field()
  updatedAt: string;

  @Field()
  name: string;

  @Field({ defaultValue: 0 })
  price: number = 0;

  @Field()
  description?: string;

  @Field()
  urlSlug?: string;

  @Field({ defaultValue: 0 })
  views: number = 0;

  @Field({ defaultValue: 0 })
  rating: number = 0;

  @Field({ nullable: true })
  subcategoryId?: string;

  @Field({ nullable: true })
  subcategory?: string;

  @Field({ nullable: true })
  categoryId?: string;

  @Field({ nullable: true })
  category?: string;

  @Field()
  productImages: string;
}
