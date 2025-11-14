import { IsNumber, IsString, IsEnum, IsOptional } from 'class-validator';
import { RequestType } from '../entities/form-fill-request.entity';

export class CreateFormFillRequestDto {
  @IsNumber()
  userId: number;

  @IsEnum(RequestType)
  requestType: RequestType;

  @IsOptional()
  @IsNumber()
  scholarshipId?: number;

  @IsOptional()
  @IsString()
  formName?: string;

  @IsString()
  description: string;

  @IsOptional()
  @IsString()
  contactPhone?: string;

  @IsOptional()
  @IsString()
  contactEmail?: string;

  @IsOptional()
  @IsString()
  address?: string;

  @IsOptional()
  @IsString()
  pincode?: string;

  @IsOptional()
  @IsString()
  preferredDate?: string;

  @IsOptional()
  @IsString()
  preferredTime?: string;

  @IsOptional()
  additionalInfo?: Record<string, any>;
}



