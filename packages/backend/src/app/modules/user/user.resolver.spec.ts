import { Test, TestingModule } from '@nestjs/testing';
import { DbModule } from '../db/db.module';
import { UserResolver } from './user.resolver';

describe('UserResolver', () => {
  let resolver: UserResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [DbModule],
      providers: [UserResolver],
    }).compile();

    resolver = module.get<UserResolver>(UserResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });

  it('should return null from `user` if user not found', async () => {
    const res = resolver.user('1234');

    await expect(res).resolves.toBe(null);
  });

  it('should return array from `users`', async () => {
    const res = resolver.users();

    await expect(res).resolves.toEqual([]);
  });
});
