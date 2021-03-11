import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class UserModel {
  @Field(type => ID)
  userId: string;

  @Field({ nullable: true })
  username?: string;

  @Field()
  email: string;

  @Field({ nullable: true })
  passwordHash?: string;

  @Field()
  createdAt: string;

  @Field()
  updatedAt: string;

  @Field()
  role: string;

  @Field({ nullable: true })
  orderId?: string;

  @Field({ nullable: true })
  order?: string;

  @Field(type => [String], { nullable: true })
  userImages: string[];

  @Field()
  userToken?: string;
}
