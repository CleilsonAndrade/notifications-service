import { DatabaseModule } from '@infra/database/database.module';
import { HttpModule } from '@infra/http/http.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [HttpModule, DatabaseModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
