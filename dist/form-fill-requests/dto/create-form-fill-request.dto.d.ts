import { RequestType } from '../entities/form-fill-request.entity';
export declare class CreateFormFillRequestDto {
    userId: number;
    requestType: RequestType;
    scholarshipId?: number;
    formName?: string;
    description: string;
    contactPhone?: string;
    contactEmail?: string;
    address?: string;
    pincode?: string;
    preferredDate?: string;
    preferredTime?: string;
    additionalInfo?: Record<string, any>;
}
