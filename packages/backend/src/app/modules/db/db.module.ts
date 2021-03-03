import { Module } from '@nestjs/common';
import { MysqlConnectionService } from './mysql-connection/mysql-connection.service';

@Module({
  providers: [MysqlConnectionService]
})
export class DbModule {}
