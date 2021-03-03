import { Test, TestingModule } from '@nestjs/testing';
import { MysqlConnectionService } from './mysql-connection.service';

describe('MysqlConnectionService', () => {
  let service: MysqlConnectionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MysqlConnectionService],
    }).compile();

    service = module.get<MysqlConnectionService>(MysqlConnectionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
