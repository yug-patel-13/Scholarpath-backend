import { RequestType } from '../entities/form-fill-request.entity';
export declare class CreateFormFillRequestDto {
    userId: number;
    requestType: RequestType;
    scholarshipId?: number;
    description?: string;
    contactPhone?: string;
    contactEmail?: string;
    address?: string;
    pincode?: string;
    preferredDate?: Date;
    preferredTime?: string;
    additionalInfo?: Record<string, any>;
}
