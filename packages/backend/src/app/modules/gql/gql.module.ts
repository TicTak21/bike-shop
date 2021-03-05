import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ProductModule } from '../product/product.module';
import { UserModule } from '../user/user.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      include: [UserModule, ProductModule],
      installSubscriptionHandlers: true,
      debug: false,
      autoSchemaFile: 'schema.gql',
      playground: true,
      path: '/graphql',
      context: ({ req }) => ({ req }),
    }),
  ],
})
export class GqlModule {}
