import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class UserModel {
  @Field((type) => ID)
  userId: string;

  @Field({ nullable: true })
  username?: string;

  @Field()
  email: string;

  @Field()
  password_hash: string;

  @Field()
  createdAt: string;

  @Field()
  updatedAt: string;

  @Field()
  role: string;

  @Field()
  orderId?: string;

  @Field()
  order?: string;

  @Field((type) => [String])
  userImages: string[];

  @Field()
  userToken?: string;
}
