import { Field, InputType } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsOptional, IsString, MaxLength, MinLength } from 'class-validator';

@InputType()
export class CreateUserInput {
  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  @MaxLength(16)
  username?: string;

  @Field()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @Field()
  @IsNotEmpty()
  @IsString()
  @MinLength(8)
  password: string;

  @Field()
  @IsNotEmpty()
  @IsString()
  @MaxLength(20)
  role: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  order?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  userToken?: string;
}
