import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from '@app/app.controller';
import { AppService } from '@app/app.service';
import { typeOrmConfig } from '@app/config/typeorm.config';
import { TagModule } from './tag/tag.module';

@Module({
  imports: [TagModule, TypeOrmModule.forRoot(typeOrmConfig)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
