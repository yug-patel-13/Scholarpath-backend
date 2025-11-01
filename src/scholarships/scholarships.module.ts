import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ScholarshipsService } from './scholarships.service';
import { ScholarshipsController } from './scholarships.controller';
import { Scholarship } from './entities/scholarship.entity';
import { UserProfilesModule } from '../user-profiles/user-profiles.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Scholarship]),
    UserProfilesModule,
  ],
  controllers: [ScholarshipsController],
  providers: [ScholarshipsService],
  exports: [ScholarshipsService],
})
export class ScholarshipsModule {}

