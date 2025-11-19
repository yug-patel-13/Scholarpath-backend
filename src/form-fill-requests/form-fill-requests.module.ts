import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FormFillRequestsService } from './form-fill-requests.service';
import { FormFillRequestsController } from './form-fill-requests.controller';
import { FormFillRequest } from './entities/form-fill-request.entity';

@Module({
  imports: [TypeOrmModule.forFeature([FormFillRequest])],
  controllers: [FormFillRequestsController],
  providers: [FormFillRequestsService],
  exports: [FormFillRequestsService],
})
export class FormFillRequestsModule {}





