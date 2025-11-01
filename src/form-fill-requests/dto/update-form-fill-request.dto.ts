import { PartialType } from '@nestjs/mapped-types';
import { CreateFormFillRequestDto } from './create-form-fill-request.dto';
import { RequestStatus } from '../entities/form-fill-request.entity';
import { IsEnum, IsOptional, IsString } from 'class-validator';

export class UpdateFormFillRequestDto extends PartialType(CreateFormFillRequestDto) {
  @IsOptional()
  @IsEnum(RequestStatus)
  status?: RequestStatus;

  @IsOptional()
  @IsString()
  adminNotes?: string;
}

