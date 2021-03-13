import { Test, TestingModule } from '@nestjs/testing';
import { DbModule } from '../db/db.module';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { UserResolver } from './user.resolver';

describe('UserResolver', () => {
  let resolver: UserResolver;
  const mockUser: CreateUserInput = {
    username: 'test_user',
    email: 'test_user@mail.com',
    password: 'qwer_1234',
    role: 'Client',
  };

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
    const user = resolver.user('1234');

    await expect(user).resolves.toBe(null);
  });

  it('should return array from `users`', async () => {
    const users = await resolver.users();

    expect(Array.isArray(users)).toBe(true);
  });

  it('should create user via `createUser`', async () => {
    const user = await resolver.createUser(mockUser);

    expect(user.email).toEqual(mockUser.email);

    await resolver.deleteUser(user.userId);
  });

  it('should delete user via `deleteUser`', async () => {
    const user = await resolver.createUser(mockUser);
    await resolver.deleteUser(user.userId);

    const possibleDeletedUser = await resolver.user(user.userId);

    expect(possibleDeletedUser).toBeNull();
  });

  it('should update user via `updateUser`', async () => {
    const user = await resolver.createUser(mockUser);

    const mockUpdateUser: UpdateUserInput = {
      email: 'update_test_user@mail.com',
    };

    const updatedUser = await resolver.updateUser(user.userId, mockUpdateUser);

    expect(updatedUser.email).toEqual(mockUpdateUser.email);

    await resolver.deleteUser(user.userId);
  });
});
