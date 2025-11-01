import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CyberCafesService } from './cyber-cafes.service';
import { CyberCafesController } from './cyber-cafes.controller';
import { CyberCafe } from './entities/cyber-cafe.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CyberCafe])],
  controllers: [CyberCafesController],
  providers: [CyberCafesService],
  exports: [CyberCafesService],
})
export class CyberCafesModule {}

