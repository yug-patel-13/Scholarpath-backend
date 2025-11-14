import { User } from '../../users/entities/user.entity';
export declare enum RequestType {
    ONLINE = "online",
    OFFLINE = "offline"
}
export declare enum RequestStatus {
    PENDING = "pending",
    IN_PROGRESS = "in_progress",
    COMPLETED = "completed",
    CANCELLED = "cancelled"
}
export declare class FormFillRequest {
    id: number;
    userId: number;
    user: User;
    requestType: RequestType;
    status: RequestStatus;
    scholarshipId: number;
    formName: string;
    description: string;
    contactPhone: string;
    contactEmail: string;
    address: string;
    pincode: string;
    preferredDate: Date;
    preferredTime: string;
    additionalInfo: Record<string, any>;
    adminNotes: string;
    createdAt: Date;
    updatedAt: Date;
}
