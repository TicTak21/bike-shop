import { Field, InputType, OmitType, PartialType } from '@nestjs/graphql';
import { IsOptional, IsString } from 'class-validator';
import { CreateUserInput } from './create-user.input';

@InputType()
export class UpdateUserInput extends PartialType(
  OmitType(CreateUserInput, ['order', 'userToken', 'password'] as const),
) {
  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  passwordHash: string;
}
