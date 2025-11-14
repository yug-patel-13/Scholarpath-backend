import { IsNumber, IsString, IsOptional, IsNumberString, IsEnum } from 'class-validator';

export class CreateUserProfileDto {
  @IsNumber()
  userId: number;

  @IsOptional()
  @IsString()
  category?: string;

  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsNumber()
  age?: number;

  @IsOptional()
  @IsString()
  gender?: string;

  @IsOptional()
  @IsString()
  caste?: string;

  @IsOptional()
  @IsString()
  aadhaar?: string;

  @IsOptional()
  @IsString()
  phone?: string;

  @IsOptional()
  annualIncome?: number;

  @IsOptional()
  marks10?: number;

  @IsOptional()
  marks12?: number;

  @IsOptional()
  landSize?: number;

  @IsOptional()
  @IsString()
  crop?: string;

  @IsOptional()
  @IsString()
  farmerType?: string;

  @IsOptional()
  @IsString()
  loanStatus?: string;

  @IsOptional()
  @IsString()
  state?: string;

  @IsOptional()
  @IsString()
  district?: string;

  @IsOptional()
  @IsString()
  city?: string;

  @IsOptional()
  @IsString()
  pincode?: string;

  // CMSS (Chief Minister Scholarship Scheme) Special Categories
  @IsOptional()
  lowLiteracyTaluka?: boolean;

  @IsOptional()
  childrenOfMartyrs?: boolean;

  @IsOptional()
  shramikCard?: boolean;

  @IsOptional()
  disabilityCertificate?: boolean;

  @IsOptional()
  widowCertificate?: boolean;

  @IsOptional()
  orphanCertificate?: boolean;

  @IsOptional()
  tyaktaCertificate?: boolean;

  @IsOptional()
  documents?: Record<string, any>;
}



