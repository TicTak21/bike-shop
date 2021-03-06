import { Test, TestingModule } from '@nestjs/testing';
import { PrismaClient } from '@prisma/client';
import { PrismaService } from './prisma.service';

describe('PrismaService', () => {
  let service: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PrismaService],
    }).compile();

    service = module.get<PrismaService>(PrismaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should extends PrismaClient', () => {
    expect(service instanceof PrismaClient).toBe(true);
  });

  it('should implements OnModuleInit', () => {
    expect(service.onModuleInit()).toBeDefined();
  });

  it('should implements OnModuleDestroy', () => {
    expect(service.onModuleDestroy()).toBeDefined();
  });
});
